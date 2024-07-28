import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given a fair red die and a fair blue die. Consider the following experiment:
		<p style="text-align: center;">Experiment: Roll each die once and take the sum of the two rolls.</p>
		You repeat this experiment until the sum of the two rolls is equal to 7. <br>
		Consider the random variable
		
		<ul>
  <li> X = the number of times you do the experiment.</li>
		</ul>
		
		(This value $X$ includes the experiment in which the sum is 7 for the first time.) <br>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$?
`;

const label1 = String.raw`6`;
const label2 = String.raw`5`;
const label3 = String.raw`4`;
const label4 = String.raw`3`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
