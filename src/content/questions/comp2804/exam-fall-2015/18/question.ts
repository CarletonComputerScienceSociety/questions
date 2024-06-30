import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The $n$ students $S_1,S_2,\dots,S_n$ decide to organize a Secret Santa: They take a uniformly
		random permutation $P_1,P_2,\dots,P_n$ of $S_1,S_2,\dots,S_n$. For each $i = 1,2,\dots,n$,
		student $S_i$ buys a gift and gives it, anonymously, to student $P_i$.
		
		<p style="margin: 0.5rem 0;">
			Let $X$ be the number of students who give their gift to themselves. What is the expected value
			$\mathbb{E}(X)$ of the random variable $X$? <br>
			<em>Hint:</em> Use an indicator random variable for each student.
		</p>
`;

const label1 = String.raw`$1$`;
const label2 = String.raw`$2$`;
const label3 = String.raw`$1 + 1/n$`;
const label4 = String.raw`$2 + 1/n$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
