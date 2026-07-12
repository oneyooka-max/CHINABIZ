export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Politique de Confidentialité — ChinaBiz</title>
<style>body{font-family:-apple-system,sans-serif;max-width:760px;margin:0 auto;padding:40px 24px;background:#F7F3EE;color:#1A1008;line-height:1.7}h1{color:#700145;margin-bottom:8px}h2{color:#700145;margin-top:32px}p,li{color:#6B5B4E;font-size:15px}a{color:#700145}</style>
</head>
<body>
<h1>ChinaBiz — Politique de Confidentialité</h1>
<p>Dernière mise à jour : juillet 2026</p>
<h2>1. Éditeur</h2>
<p>ChinaBiz est développée par SUNEYES. Contact : <a href="mailto:suneyes.pro@gmail.com">suneyes.pro@gmail.com</a></p>
<h2>2. Données collectées</h2>
<p>ChinaBiz collecte un minimum de données :</p>
<ul>
<li>Textes soumis au traducteur IA — transmis à Google Gemini, non stockés</li>
<li>Abonnements — gérés par Apple App Store et RevenueCat</li>
<li>Adresses et fournisseurs ajoutés volontairement — stockés dans Supabase</li>
</ul>
<h2>3. Services tiers</h2>
<ul>
<li>Google Gemini API — traduction IA</li>
<li>Supabase — base de données sécurisée</li>
<li>RevenueCat — gestion abonnements</li>
<li>Trip.com — réservation hôtels</li>
<li>Frankfurter API — taux de change BCE</li>
</ul>
<h2>4. Vos droits (RGPD)</h2>
<p>Accès, rectification, effacement, portabilité. Contact : <a href="mailto:suneyes.pro@gmail.com">suneyes.pro@gmail.com</a></p>
<h2>5. Contact</h2>
<p>Email : <a href="mailto:suneyes.pro@gmail.com">suneyes.pro@gmail.com</a></p>
</body>
</html>`);
}
