const express = require('express');
const { PORT } = require('./config/constants.js');
const { validateRequest } = require('./middlewares/validateRequest.js');
const { getAlumnos, getExamenes, getRespuestas } = require('./routes/handlers.js');

const app = express();

app.use(validateRequest);
app.get('/', (_, res) => {
  res.send('⚠️ Esta API fue desarrollada en estado de ebriedad... Pay attention!');
});
app.get('/alumnos', getAlumnos);
app.get('/examenes', getExamenes);
app.get('/respuestas', getRespuestas);

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});
