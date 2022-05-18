const express = require('express');
const mongoose = require('mongoose');
const { userRouter } = require('./routes/users');
const { cardRouter } = require('./routes/cards');

mongoose.connect('mongodb://localhost:27017/mestodb');
const app = express();

const { PORT = 3000 } = process.env;

app.use(express.json());

app.use((req, _, next) => {
  req.user = {
    _id: '6283b1da218a9b1b2dad0d75',
  };

  next();
});

app.use('/users', userRouter);
app.use('/cards', cardRouter);

app.listen(PORT, () => {
  console.log(`Запуск сервера ${PORT}`);
});
