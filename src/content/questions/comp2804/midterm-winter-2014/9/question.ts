import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many strings can be obtained by rearranging the letters of the word
		<p style="margin: 1rem 0; text-align: center;">
			POOPERSCOOPER
		</p>
`;

const label1 = "$13!$";
const label2 = "${13 \\choose 4}{9 \\choose 2}{7 \\choose 2}{5 \\choose 3}$";
const label3 = "${13 \\choose 4}{9 \\choose 3}{6 \\choose 2}{4 \\choose 2}$";
const label4 =
  "${13 \\choose 1}{12 \\choose 4}{8 \\choose 2}{6 \\choose 1}{5 \\choose 2}{3 \\choose 3}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
