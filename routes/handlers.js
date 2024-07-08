const students = require('../data/students.json');
const exams = require('../data/exams.json');
const answers = require('../data/answers.json')

const getAlumnos = async(req, res)=> {
  res.status(200).json(students);

}

const getExamenes = async(req, res)=> {
  res.status(200).json(exams);

}

const getRespuestas = async(req, res)=> {
  res.status(200).json(answers);

}

module.exports = {
  getAlumnos,
  getExamenes,
  getRespuestas
};
