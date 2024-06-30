import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a set $S$ consisting of 20 integers; 5 of them are even and the other 15 integers in $S$
		are odd. What is the number of 7-element subsets of $S$ having at least 5 even integers or at least
		5 odd integers?
`;

const label1 =
  "${5 \\choose 5}{15 \\choose 2} + {5 \\choose 2}{15 \\choose 5} + {5 \\choose 1}{15 \\choose 6} + {5 \\choose 0}{15 \\choose 7}$";
const label2 =
  "${5 \\choose 5}{15 \\choose 2} + {5 \\choose 2}{15 \\choose 5} - {5 \\choose 5}{15 \\choose 5}$";
const label3 = "${20 \\choose 7} - {5 \\choose 4}{15 \\choose 4}$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
