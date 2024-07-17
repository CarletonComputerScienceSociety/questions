import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In a standard deck of 52 cards, each card has a <em>suit</em> and a <em>rank</em>.
		There are four suits (spades ♠, hearts ♡, clubs ♣, and diamonds ♢),
		and 13 ranks (Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, and King). <br>
		Assume you get a uniformly random hand consisting of 5 cards. What is the probability that the 5
		cards in this hand are all of the same suit?
`;

const label1 = String.raw`$\left. {13 \choose 5} \middle/ {52 \choose 5} \right.$`;
const label2 = String.raw`$\left. {52 \choose 5} \middle/ {13 \choose 5} \right.$`;
const label3 = String.raw`$4 \cdot \left. {13 \choose 5} \middle/ {52 \choose 5} \right.$`;
const label4 = String.raw`$4 \cdot \left. {52 \choose 5} \middle/ {13 \choose 5} \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
