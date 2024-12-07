const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Handle clean URLs for pages
app.get('/pages/:page', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', `${req.params.page}.html`));
});

// Handle root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
