import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. What does
		$$
			\sum_{k=2}^{n} {{n}\choose{k}} \cdot 2^{n-k}
		$$
		count?
`;

const label1 = String.raw`The number of strings of length $n$, where each character is $a$ or $b$, that contain at least one $a$.`;
const label2 = String.raw`The number of strings of length $n$, where each character is $a$ or $b$, that contain at least 2 many $a$'s.`;
const label3 = String.raw`The number of strings of length $n$, where each character is $a$, $b$, or $c$, that contain at least one $a$.`;
const label4 = String.raw`The number of strings of length $n$, where each character is $a$, $b$, or $c$, that contain at least 2 many $a$'s.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
