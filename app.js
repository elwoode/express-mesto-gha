const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { createUser, login } = require('./controllers/users');
const {
  validationCreateUser,
  validationLogin,
} = require('./middlewares/validations');
const auth = require('./middlewares/auth');
const handelError = require('./middlewares/handelError');
const { userRouter } = require('./routes/users');
const { cardRouter } = require('./routes/cards');

mongoose.connect('mongodb://localhost:27017/mestodb');
const app = express();
const { PORT = 3000 } = process.env;
app.use(express.json());

app.post('/signin', validationLogin, login);
app.post('/signup', validationCreateUser, createUser);

app.use(auth);
app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use(errors());
app.use(handelError);
app.use((_, res) => {
  res.status(404).send({ message: 'Страница с таким url не найдена' });
});

app.listen(PORT, () => {
  console.log(`Запуск сервера ${PORT}`);
});
