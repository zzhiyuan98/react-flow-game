export const description = "第二题：以下哪个是正确的北京公司主体？";

const questionsTwo = ["北京 - 公司主体"];
const answersTwo = ["北京沂慧信息技术有限公司", "北京谊惠信息技术有限公司", "北京沂惠信息技术有限公司", "北京谊慧信息技术有限公司"];

export const solution = ["3"];

const questionNodes = questionsTwo.map((e, i) => ({
  id: `question${i}`,
  type: "input",
  data: { label: questionsTwo[i] },
  position: { x: i * 100, y: 0 },
  style: { width: 150 },
}));

const answerNodes = answersTwo.map((e, i) => ({
  id: `answer${i}`,
  type: "output",
  data: { label: answersTwo[i] },
  position: { x: i * 120, y: 100 },
  style: { width: 100 },
}));

export const nodes = questionNodes.concat(answerNodes);
