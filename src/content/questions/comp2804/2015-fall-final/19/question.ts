import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The $n$ students $S_1,S_2,\dots,S_n$ decide to organize a Secret Santa: They take a uniformly
		random permutation $P_1,P_2,\dots,P_n$ of $S_1,S_2,\dots,S_n$. For each $i = 1,2,\dots,n$,
		student $S_i$ buys a gift and gives it, anonymously, to student $P_i$.
		
		<p style="margin: 0.5rem 0;">
			For each $i = 1,2,\dots,n$, let $v_i$ be the value (in dollars) of the gift that student $S_i$
			buys. Let $Y$ be the value of the gift that student $S_1$ receives, and let $Z$ be the value of the
			gift that student $S_2$ receives. What is $\mathbb{E}(2 \cdot Y - Z)$?
		</p>
`;

const label1 = String.raw`$2v_1 - v_2$`;
const label2 = String.raw`$\sum_{i=3}^{n} v_i/n$`;
const label3 = String.raw`$\sum_{i=1}^{n} v_i/n$`;
const label4 = String.raw`$2 \sum_{i=2}^{n} v_i/n - (v_1/n + \sum_{i=3}^{n} v_i/n)$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
