import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In the game of <em>Hearthstone</em>, you are given a deck of 18 distinct cards. One of the cards is the <em>Raven Idol</em>.
		You choose a uniformly random hand of 3 cards. Define the event
		
    <ul>
      <li> A = the hand of 3 cards contains the Raven Idol $</li>
    </ul>
		
		What is $\Pr(A)$?
`;

const label1 = String.raw`3/17`;
const label2 = String.raw`3/18`;
const label3 = String.raw`3/19`;
const label4 = String.raw`4/19`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
