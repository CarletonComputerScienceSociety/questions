import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 4 consisting of the characters $a$, $b$, $c$, and $d$.
		How many such strings are there that start with $ad$ or end with $dcb$?
`;

const label1 = String.raw`17`;
const label2 = String.raw`18`;
const label3 = String.raw`19`;
const label4 = String.raw`20`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
