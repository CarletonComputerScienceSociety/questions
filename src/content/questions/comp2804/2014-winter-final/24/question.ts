import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We flip a fair coin independently $n$ times. Define the random variable
		<ul>
  <li> X = the number of heads minus the number of tails in the sequence of $n$ flips.</li>
		</ul>
		What is the expected value of $X$?
`;

const label1 = String.raw`$n/2$`;
const label2 = String.raw`$n/4$`;
const label3 = String.raw`$n/8$`;
const label4 = String.raw`$0$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
