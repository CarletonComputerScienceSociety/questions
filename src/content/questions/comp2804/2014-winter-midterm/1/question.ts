import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
On a table, you see three types of fruit: apples, bananas, and oranges. There are $m \geq 2$ apples,
		$n \geq 2$ bananas, and $k \geq 2$ oranges. How many ways are there to choose 7 pieces of fruit, if
		you must take at least two pieces of each type?
`;

const label1 = "${m + n + k \\choose 7} - (m + n + k)$";
const label2 =
  "${m + n + k \\choose 7} - {m \\choose 2} - {n \\choose 2} - {k \\choose 2}$";
const label3 =
  "${m \\choose 3}{n \\choose 2}{k \\choose 2} + {m \\choose 2}{n \\choose 3}{k \\choose 2} + {m \\choose 2}{n \\choose 2}{k \\choose 3}$";
const label4 = "${m \\choose 2}{n \\choose 2}{k \\choose 2}(m + n + k)$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
