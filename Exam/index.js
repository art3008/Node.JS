import express from 'express';
import toDoRoute  from './routes/todo.route.js';

const app = express();
const PORT = 5000;

app.use(express.json({ extend: true }))

app.use('/list', toDoRoute)

app.listen(PORT, () => {
    console.log(`Server is runnig on PORT: ${PORT}`);
})