import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 13$ be an integer. What is the number of bitstrings of length $n$ that have exactly
		seven 0's or exactly five 1's?
`;

const label1 = "${n \\choose 12} \\cdot {12 \\choose 7}$";
const label2 = "${n \\choose 7} + {n \\choose 5}$";
const label3 =
  "${n \\choose 7} + {n \\choose 5} - {n \\choose 5} \\cdot {n - 5 \\choose 7}$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
