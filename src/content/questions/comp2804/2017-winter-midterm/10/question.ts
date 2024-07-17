import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many strings can be obtained by rearranging the letters of the word
		<p style="text-align: center;">
			POOPERSCOOPER
		</p>
`;

const label1 = "$13!$";
const label2 =
  "${13 \\choose 4}{13 \\choose 3}{13 \\choose 2}{13 \\choose 2}{13 \\choose 1}$";
const label3 = "${13 \\choose 4}{9 \\choose 3}{6 \\choose 2}{4 \\choose 2}$";
const label4 =
  "${13 \\choose 4}{9 \\choose 3}{6 \\choose 2}{4 \\choose 2}{2 \\choose 1}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
