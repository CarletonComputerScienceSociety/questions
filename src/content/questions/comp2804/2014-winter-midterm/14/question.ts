import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A standard deck of 52 cards has 4 Kings. Consider a hand of 9 cards, chosen uniformly at random.
		What is the probability that there are exactly two Kings in this hand?
`;

const label1 = String.raw`$1 - \left. {48 \choose 7} \middle/ {52 \choose 9} \right.$`;
const label2 = String.raw`$\left. \bigl\{ {4 \choose 2} + {48 \choose 7} \bigr\} \middle/ {52 \choose 9} \right.$`;
const label3 = String.raw`$\left. {52 \choose 9} \middle/ \bigl\{ {4 \choose 2}{48 \choose 7} \bigr\} \right.$`;
const label4 = String.raw`$\left. {4 \choose 2}{48 \choose 7} \middle/ {52 \choose 9} \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
