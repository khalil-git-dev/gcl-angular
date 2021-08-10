// 1. Redirigez tout le trafic de http vers https.

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const app = express();
app.use(requireHTTPS);

//2. Servir nos fichiers statiques.

app.use(express.static('./dist/angular-gcl'));

// 3. Attendez une requête vers n'importe quel chemin et redirigez toutes les requêtes vers index.html.

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/angular-gcl/'}
  );
});

// 4. Écoutez les requêtes sur les variables PORTspécifiées par envou sur le port Heroku par défaut, qui est 8080.
app.listen(process.env.PORT || 8080);
