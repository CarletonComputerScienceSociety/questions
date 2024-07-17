import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A password consists of 10 characters, each character being a lowercase letter or a digit. A password
		must contain at least one digit and at most three digits. How many passwords are there?
`;

const label1 =
  "${10 \\choose 1}26^9 + {10 \\choose 2}26^8 + {10 \\choose 3}26^7$";
const label2 = "$10 \\cdot 26^9 + 10^2 \\cdot 26^8 + 10^3 \\cdot 26^7$";
const label3 =
  "${10 \\choose 1} \\cdot 10 \\cdot 26^9 + {10 \\choose 2} \\cdot 10^2 \\cdot 26^8 +$ $ {10 \\choose 3} \\cdot 10^3 \\cdot 26^7$";
const label4 = "none of the above";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
