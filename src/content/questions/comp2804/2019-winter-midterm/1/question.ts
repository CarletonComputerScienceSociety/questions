import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider bitstrings of length 13. The positions in these strings are numbered as $1,2,3,\dots,13$.
		How many such bitstrings have the property that all bits at the odd positions are equal?
`;

const label1 = String.raw`32`;
const label2 = String.raw`64`;
const label3 = String.raw`128`;
const label4 = String.raw`256`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
