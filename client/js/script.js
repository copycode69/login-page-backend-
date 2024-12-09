const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Replace with actual authentication logic
    if (username === 'admin' && password === 'password') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
