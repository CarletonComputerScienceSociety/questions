import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. How many bitstrings of length $n$ are there that contain at least two
		1s?
`;

const label1 = "${n \\choose 2} \\cdot 2^{n-2}$";
const label2 = "$n \\cdot 2^{n-1}$";
const label3 = "$2^{n} - 1 - n$";
const label4 = "$2^{n} - n$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
