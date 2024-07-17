import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S$ be a set of 100 integers; 30 of these are positive and the other 70 integers in $S$ are
		negative. We choose, uniformly at random, a 20-element subset of $S$. Let $x$ be the product of the
		integers in the chosen subset. What is the probability that $x &gt; 0$?
`;

const label1 = String.raw`$\frac{1}{{100 \choose 20}} \sum_{k=0}^{20} \left({70 \choose k} + {30 \choose 20 - k}\right)$`;
const label2 = String.raw`$\frac{1}{{100 \choose 20}} \sum_{k=0}^{20} {70 \choose k}{30 \choose 20 - k}$`;
const label3 = String.raw`$\frac{1}{{100 \choose 20}} \sum_{k=0}^{10} \left({70 \choose 2k} + {30 \choose 20 - 2k}\right)$`;
const label4 = String.raw`$\frac{1}{{100 \choose 20}} \sum_{k=0}^{10} {70 \choose 2k}{30 \choose 20 - 2k}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
