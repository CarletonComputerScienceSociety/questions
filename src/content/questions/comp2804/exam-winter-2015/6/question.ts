import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 7$ be an integer. Why does the following equality hold:
		$$
			{n \choose 5}{n - 5 \choose 2} = {n \choose 2}{n - 2 \choose 5}
		$$
`;

const label1 = String.raw`Because both sides count the number of pairs $(A,B)$ of subsets of the $n$ people, such that $|A| = 2$, $|B| = 5$, and $A \subseteq B$.`;
const label2 = String.raw`Because both sides count the number of pairs $(A,B)$ of subsets of the $n$ people, such that $|A| = 5$, $|B| = 2$, and $A \subseteq B$.`;
const label3 = String.raw`Because both sides count the number of ways to choose 2 committees in a group of $n$ people, one committee has 5 members, the other committee has 2 members, and a person can be on both committees.`;
const label4 = String.raw`Because both sides count the number of ways to choose 2 committees in a group of $n$ people, one committee has 5 members, the other committee has 2 members, and <strong>no</strong> person can be on both committees.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
