import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You repeatedly, and independently, flip three fair coins, until there are exactly two heads among
		the three flips. Define the random variable $X$ to be the total number of coin flips.
		For example, if the coin flips result in
		$$
		(TTT), (THT), (HHH), (HTH),
		$$
		then $X = 12$. <br>
		
		What is the expected value $\mathbb{E}(X)$ of $X$?
`;

const label1 = String.raw`3/8`;
const label2 = String.raw`8/3`;
const label3 = String.raw`8`;
const label4 = String.raw`12`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
