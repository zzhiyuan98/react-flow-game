export const description = "第四题：这题答对的概率是？";

const questionsFour = ["这题答对的概率是"];
const answersFour = ["25%", "25%", "50%", "0%"];

export const solution = ["3"];

const questionNodes = questionsFour.map((e, i) => ({
  id: `question${i}`,
  type: "input",
  data: { label: questionsFour[i] },
  position: { x: i * 100, y: 0 },
  style: { width: 150 },
}));

const answerNodes = answersFour.map((e, i) => ({
  id: `answer${i}`,
  type: "output",
  data: { label: answersFour[i] },
  position: { x: i * 120, y: 100 },
  style: { width: 100 },
}));

export const nodes = questionNodes.concat(answerNodes);
