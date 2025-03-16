const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// runs server at chosen PORT which is 3000 for this web page
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
