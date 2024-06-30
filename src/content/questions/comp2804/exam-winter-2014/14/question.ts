import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We flip a fair coin repeatedly and independently, resulting in a sequence of heads ($H$) and tails
		($T$). We stop flipping the coin as soon as this sequence contains $H$ or $TTTT$. What is the
		probability that this sequence contains at most two $T$s?
`;

const label1 = String.raw`4/8`;
const label2 = String.raw`5/8`;
const label3 = String.raw`6/8`;
const label4 = String.raw`7/8`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
