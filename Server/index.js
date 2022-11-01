const express = require('express');
require('dotenv').config();
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello from the root');
});

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

const cChat = require('./controllers/cChat');
io.on('connection', (socket) => {
    socket.on('disconnect', () => {
    });
    socket.on('RECEIVE_MESSAGE', (data) => {
        const { message, user, idUser } = data;
        io.emit('RECEIVE_MESSAGE', { message, user, idUser, create_date: new Date() });
        cChat.chat_create(data);
    });
});

app.use('/api/user', require('./Routers/rUser'));
app.use('/api/phims', require('./Routers/rPhim'));
app.use('/api/ghes', require('./Routers/rGhe'));
app.use('/api/tintuc', require('./Routers/rTinTuc'));
app.use('/api/rap', require('./Routers/rRap'));
app.use('/api/ve', require('./Routers/rVe'));
app.use('/api/chat', require('./Routers/rChat'));

server.listen(port, () => {
    require('./Config/db');
    console.log(`Listening on port ${port}`);
});