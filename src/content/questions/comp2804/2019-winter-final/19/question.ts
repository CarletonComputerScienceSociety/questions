import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A red box contains the numbers 0, 1, and 2; a blue box contains the numbers 0 and 1;
		and a green box contains the numbers 1 and 2. Consider the following two steps:
		<span style="display: block; margin-top: 0.5rem;"></span>
		<strong>Step 1:</strong> Choose a uniformly random <span class="sticky">number from</span>
		the red box, and denote it by $x$. <br>
		<strong>Step 2:</strong>
		<ul>
			<li>
				If $x = 0$ or $x = 2$,
				then choose a uniformly random number from the green box, and denote it by $y$.
				</li>
			<li>
				Otherwise (i.e., if $x = 1$),
				choose a uniformly random number from the blue box, and denote it by $y$.
			</li>
		</ul>
		Consider the random variables
		
		<ul>
  <li> X = the number $x$ you choose in Step 1,</li>
  <li> Y = the number $y$ you choose in Step 2,</li>
  <li> Z = $\max(X,Y).$</li>
		</ul>
		
		What is the expected value $\mathbb{E}(Z)$ of the random variable $Z$?
`;

const label1 = String.raw`1`;
const label2 = String.raw`3/2`;
const label3 = String.raw`2`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
