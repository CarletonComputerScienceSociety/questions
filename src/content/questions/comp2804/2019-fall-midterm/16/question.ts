import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider 4 people, each of which has a uniformly random birthday. We ignore leap years; thus, one year
		has 365 days. Define the event
		
		[defs]
		  A = "at least 2 of these 4 people have the same birthday".
		[/defs]
		
		What is $\Pr(A)$?
`;

const label1 = "${4 \\choose 2} \\cdot \\frac{1}{365}$";
const label2 =
  "${4 \\choose 2} \\cdot \\frac{1}{365} + {4 \\choose 3} \\cdot \\frac{1}{365^2} + {4 \\choose 4} \\cdot \\frac{1}{365^3}$";
const label3 = "$1 - \\frac{361 \\cdot 362 \\cdot 363 \\cdot 364}{365^4}$";
const label4 = "$1 - \\frac{362 \\cdot 363 \\cdot 364}{365^3}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
