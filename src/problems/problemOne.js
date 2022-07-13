export const description = "第一题：请将人物的英文名和对应的姓名缩写用连线连起来";

const questionsOne = ["Patrick", "Andrew", "Aki", "Allen", "Peter"];
const answersOne = ["lhz", "cwh", "lyx", "wh", "zq"];

export const solution = ["3", "0", "4", "2", "1"];

const questionNodes = questionsOne.map((e, i) => ({
  id: `question${i}`,
  type: "input",
  data: { label: questionsOne[i] },
  position: { x: i * 100, y: 0 },
  style: { width: 60 },
}));

const answerNodes = answersOne.map((e, i) => ({
  id: `answer${i}`,
  type: "output",
  data: { label: answersOne[i] },
  position: { x: i * 100, y: 100 },
  style: { width: 60 },
}));

export const nodes = questionNodes.concat(answerNodes);
