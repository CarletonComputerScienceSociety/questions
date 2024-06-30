import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider permutations of the set $\{a,b,c,d,e,f,g\}$ that do not contain $bge$ (in this order). <br>
		How many such permutations are there?
`;

const label1 = String.raw`$7! - 6!$`;
const label2 = String.raw`$7! - 5!$`;
const label3 = String.raw`$7! - 4!$`;
const label4 = String.raw`$7! - 3!$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
