export const description = "第三题：以下哪个是正确的上海公司主体？";

const questionsThree = ["上海 - 公司主体"];
const answersThree = ["上海熊熊乐道信息技术有限公司", "上海熊熊北极信息技术有限公司", "上海乐在熊熊信息技术有限公司", "上海北极熊熊信息技术有限公司"];

export const solution = ["0"];

const questionNodes = questionsThree.map((e, i) => ({
  id: `question${i}`,
  type: "input",
  data: { label: questionsThree[i] },
  position: { x: i * 100, y: 0 },
  style: { width: 150 },
}));

const answerNodes = answersThree.map((e, i) => ({
  id: `answer${i}`,
  type: "output",
  data: { label: answersThree[i] },
  position: { x: i * 120, y: 100 },
  style: { width: 100 },
}));

export const nodes = questionNodes.concat(answerNodes);
