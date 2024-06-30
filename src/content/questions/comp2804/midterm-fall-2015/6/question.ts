import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What does
		$$
			\sum_{k=1}^{m} {m \choose k}
		$$
		count?
`;

const label1 = String.raw`The number of non-empty subsets of a set of size $m$.`;
const label2 = String.raw`The number of subsets of a set of size $m$.`;
const label3 = String.raw`The number of bitstrings of length $m$ having exactly $k$ many 1s.`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
