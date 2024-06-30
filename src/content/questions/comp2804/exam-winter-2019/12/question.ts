import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In a standard deck of 52 cards, each card has a <em>suit</em> and a <em>rank</em>.
		There are four suits (spades ♠, hearts ♡, clubs ♣, and diamonds ♢), and 13 ranks
		(Ace, 2,3,4,5,6,7,8,9,10, Jack, Queen, and King). <br>
		Assume you get a uniformly random hand consisting of 5 cards. What is the probability
		that the 5 cards in this hand consist of 3 Aces and 2 Queens?
`;

const label1 = String.raw`$\left. 24 \middle/ {52 \choose 5} \right.$`;
const label2 = String.raw`$\left. 25 \middle/ {52 \choose 5} \right.$`;
const label3 = String.raw`$\left. 26 \middle/ {52 \choose 5} \right.$`;
const label4 = String.raw`$\left. 27 \middle/ {52 \choose 5} \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
