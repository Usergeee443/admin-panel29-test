// const express = require('express');
// const fs = require('fs').promises;
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/api/burgers', async (req, res) => {
//     try {
//         const data = await fs.readFile('burgers.json', 'utf8');
//         res.json(JSON.parse(data));
//     } catch (error) {
//         res.status(500).json({ error: 'Error reading burger data' });
//     }
// });

// app.post('/api/burgers', async (req, res) => {
//     try {
//         await fs.writeFile('burgers.json', JSON.stringify(req.body, null, 2));
//         res.json({ message: 'Burgers saved successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error saving burger data' });
//     }
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/blog', (req, res) => {
//     res.sendFile(path.join(__dirname, 'blog.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/burgers', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data', 'burgers.json'), 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Error reading burger data' });
    }
});

app.post('/api/burgers', async (req, res) => {
    try {
        await fs.writeFile(path.join(__dirname, 'data', 'burgers.json'), JSON.stringify(req.body, null, 2));
        res.json({ message: 'Burgers saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving burger data' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});