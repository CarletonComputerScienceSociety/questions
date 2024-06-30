import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Assume you write a multiple-choice exam that has 25 questions. For each question, four options are given
		to you, and exactly one of these options is the correct answer. <br>
		
		Assume that you answer each question uniformly at random, where the choices for different questions are
		independent of each other. <br>
		
		What is the probability that you have exactly 17 correct answers?
`;

const label1 = "${25 \\choose 17} \\cdot \\left( 1 \\middle/ 4 \\right)^{17}$";
const label2 = "${25 \\choose 17} \\cdot \\left( 3 \\middle/ 4 \\right)^{17}$";
const label3 =
  "${25 \\choose 17} \\cdot \\left( 1 \\middle/ 4 \\right)^{17} \\cdot \\left( 3 \\middle/ 4 \\right)^8$";
const label4 =
  "${25 \\choose 17} \\cdot \\left( 1 \\middle/ 4 \\right)^8 \\cdot \\left( 3 \\middle/ 4 \\right)^{17}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
