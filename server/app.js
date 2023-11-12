import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import generateId from '../src/utils/idGenerator.js';

const app = express();
const port = '8000';



// Middle Ware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

ViteExpress.config({ printViteDevServerHost: true });

const TEST_DATA = [
    { id: 0, title: 'title0', image: 'https://picsum.photos/200', text: 'blog text0', },
    { id: 1, title: 'title1', image: 'https://picsum.photos/200', text: 'blog text1', },
    { id: 2, title: 'title2', image: 'https://picsum.photos/200', text: 'blog text2', },
    { id: 3, title: 'title3', image: 'https://picsum.photos/200', text: 'blog text3', },
];

app.get('/api/blog', (req, res) => {
    res.json(TEST_DATA);
});

app.post('/api/blog', (req, res) => {
    const { title, image, text } = req.body;

    const newItem = {
        id: generateId(),
        title: title || 'title',
        image: image || 'https://picsum.photos/200',
        text: text || 'text',
    };
    TEST_DATA.push(newItem);
    res.json(newItem);
});

app.put('/api/blog/:id', (req, res) => {
    const { id } = req.params;
    const { title, image, text } = req.body;

    const index = TEST_DATA.findIndex((item) => item.id === Number(id));

    if (index === -1) {
        res.status(404).json({ error: `Item with ID ${id} not found.` });
    } else {
        const item = TEST_DATA[index]

        item.title = title || item.title;
        item.image = image || item.image;
        item.text = text || item.text;

        res.json(item);

    }
})

app.delete('/api/blog/:id/delete', (req, res) => {
    const { id } = req.params;

    const index = TEST_DATA.findIndex((item) => item.id === Number(id));
    if (index === -1) {
        res.status(404).json({ error: `Item with ID ${id} not found.` });
    } else {
        TEST_DATA.splice(index, 1);
        res.json({ id: Number(id) });

    }
})

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
