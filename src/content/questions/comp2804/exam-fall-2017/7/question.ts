import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many strings can be obtained by rearranging the letters of the word
		<p style="text-align: center;">
			BOOKKEEPER
		</p>
`;

const label1 = "$2! \\cdot 2! \\cdot 3!$";
const label2 =
  "${10 \\choose 2} \\cdot {8 \\choose 2} \\cdot {6 \\choose 3} \\cdot 3 \\cdot 2$";
const label3 =
  "${10 \\choose 2} \\cdot {8 \\choose 2} \\cdot {6 \\choose 3} \\cdot {3 \\choose 2}$";
const label4 =
  "${10 \\choose 2} \\cdot {8 \\choose 2} \\cdot {5 \\choose 3} \\cdot 3 \\cdot 2$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
