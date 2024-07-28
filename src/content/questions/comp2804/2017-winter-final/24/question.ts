import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Elisa Kazan has successfully completed her first term as President of the Carleton Computer Science
		Society. In order to celebrate this, Elisa decides to spend an evening in the Hyacintho Cactus Bar
		and Grill in downtown Ottawa. During this evening, Tan Tran is working as a server. Since Tan has
		been studying very hard for COMP 2804, he is a bit absent-minded: Every time a customer orders a
		drink, Tan serves the wrong drink with probability 1/12, independently of other orders. <br>
		
		Elisa orders 7 ciders, one cider at a time. Let $(D_1,D_2,\dots,D_7)$ be the sequence of drinks
		that Tan serves. Define the following random variable $X$:
		<ul>
  <li> X = the number of indices $i$ such that $D_i$ is a cider and $D_{i+1}$ is not a cider.</li>
		</ul>
		What is the expected value $\mathbb{E}(X)$ of $X$?
`;

const label1 = String.raw`44/144`;
const label2 = String.raw`55/144`;
const label3 = String.raw`66/144`;
const label4 = String.raw`77/144`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
