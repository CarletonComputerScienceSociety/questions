import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We flip a fair coin repeatedly and independently, resulting in a sequence of heads ($H$) and tails
		($T$). We stop flipping the coin as soon as this sequence contains one $H$ or eight $T$s. What is
		the probability that this sequence contains at most 7 $T$s?
`;

const label1 = String.raw`$1 - (1/2)^{7}$`;
const label2 = String.raw`$\sum_{k=0}^{7} (1/2)^{k}$`;
const label3 = String.raw`$\sum_{k=0}^{7} (1/2)^{k+1}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
