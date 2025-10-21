import express from 'express';
const app = express();

app.get('/hello/:name', (req, res) => {
    res.json({ message: `Hello ${req.params.name}!` });
});

export default app;