import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A string that is obtained by rearranging the letters of the word
		<p style="text-align: center;">POOPERSCOOPER</p>
		is called <em>cool</em>, if each occurrence of E has the letter R to its left or
		right, and each occurrence of R has the letter E to its left or right. Thus, both
		<p style="text-align: center;">POOPERSCOOPER</p>
		and
		<p style="text-align: center;">OPRECSOOOERPP</p>
		are cool, whereas
		<p style="text-align: center;">EPOOPRSCOOPER</p>
		is not cool. What is the number of cool strings?
`;

const label1 = "${11 \\choose 3} \\cdot {8 \\choose 4} \\cdot {4 \\choose 2} \\cdot {2 \\choose 1} \\cdot {1 \\choose 1}$";
const label2 = "${11 \\choose 3} \\cdot {8 \\choose 4} \\cdot {4 \\choose 2} \\cdot {2 \\choose 1} \\cdot {1 \\choose 1} \\cdot 2$";
const label3 = "${11 \\choose 3} \\cdot {8 \\choose 4} \\cdot {4 \\choose 2} \\cdot {2 \\choose 1} \\cdot {1 \\choose 1} \\cdot 3$";
const label4 = "${11 \\choose 3} \\cdot {8 \\choose 4} \\cdot {4 \\choose 2} \\cdot {2 \\choose 1} \\cdot {1 \\choose 1} \\cdot 4$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
