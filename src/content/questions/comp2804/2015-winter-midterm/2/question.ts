import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $A$ be a set of 7 elements and let $B$ be a set of 15 elements.
		How many functions $f : A \rightarrow B$ are there?
`;

const label1 = "$7^{15}$";
const label2 = "$15^7$";
const label3 = "$15!/7!$";
const label4 = "${15 \\choose 7}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
