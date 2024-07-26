import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`A group of $n\ge 3$ friends stand around in a circle and each friend tosses a coin.  If the result of a friend's coin toss is the different from the result of the coin tossed by their left neighbour and different from result of the coin tossed by their right neighbour, then the friend shouts \enquote{Huzzah!}  Let $X$ be the number of friends who shout \enquote{Huzzah!}.  What is $ E(X)$? `;

const label1 = String.raw`$n/8$`;
const label2 = String.raw`$n/4$`;
const label3 = String.raw`$n/3$`;
const label4 = String.raw`$n/2$`;
const label5 = String.raw`None of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
