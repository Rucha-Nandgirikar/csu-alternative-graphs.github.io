const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Or any other port

// Serve static files from the root directory
app.use(express.static(__dirname));

// Fallback for unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});