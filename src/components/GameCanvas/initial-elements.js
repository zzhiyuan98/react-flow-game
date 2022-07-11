import React from 'react';

const questions = ["阿兰", "柳宁宁", "豚子", "小妈", "珞珞"];
const answers = ["hyh", "lyx", "zc", "szy", "dsy"];

const questionLength = questions.length;

const questionNodes = questions.map((e, i) => ({
  id: `${i}`,
  type: "input",
  data: { label: questions[i] },
  position: { x: i * 100, y: 0 },
  style: { width: 60 },
}));

const answerNodes = answers.map((e, i) => ({
  id: `${i + questionLength}`,
  type: "output",
  data: { label: answers[i] },
  position: { x: i * 100, y: 200 },
  style: { width: 60 },
}));

export const nodes = questionNodes.concat(answerNodes);

console.log(nodes);

export const edges = [];
