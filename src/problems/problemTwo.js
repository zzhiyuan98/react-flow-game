export const description = "第二题：请将人物昵称和对应的姓名缩写用连线连起来";

const questionsTwo = ["阿兰", "柳宁宁", "豚子", "小妈", "珞珞"];
const answersTwo = ["hyh", "lyx", "zc", "szy", "dsy"];

export const solution = ["1", "2", "0", "3", "4"];

const questionNodes = questionsTwo.map((e, i) => ({
  id: `question${i}`,
  type: "input",
  data: { label: questionsTwo[i] },
  position: { x: i * 100, y: 0 },
  style: { width: 60 },
}));

const answerNodes = answersTwo.map((e, i) => ({
  id: `answer${i}`,
  type: "output",
  data: { label: answersTwo[i] },
  position: { x: i * 100, y: 200 },
  style: { width: 60 },
}));

export const nodes = questionNodes.concat(answerNodes);
