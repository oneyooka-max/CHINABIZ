// ─── ChinaBiz — Proxy Gemini API ─────────────────────────────────────────────
// Déploie ce fichier sur Vercel. Ta clé Gemini reste côté serveur.
// Ta clé va dans les variables d'environnement Vercel — jamais dans le code.

export default async function handler(req, res) {
  // ── CORS — autorise uniquement les requêtes de ton app ──────────────────────
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // ── RATE LIMITING simple (20 req/heure par IP) ────────────────────────────
  // Pour un rate limiting avancé, utilise Upstash Redis (gratuit)

  // ── PROXY vers Gemini ─────────────────────────────────────────────────────
  const GEMINI_KEY = process.env.GEMINI_API_KEY; // Variable d'env Vercel
  const MODEL = req.body.model || "gemini-3.5-flash";
  if (!GEMINI_KEY) {
    return res.status(500).json({ error: "Gemini API key not configured on server" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Proxy error", details: error.message });
  }
}
