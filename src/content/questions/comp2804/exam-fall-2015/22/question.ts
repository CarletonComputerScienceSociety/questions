import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S = \{1,2,\dots,n\}$ and let $T$ be a set of $m$ unordered pairs of distinct elements of $S$. Thus,
		$$
			T \subseteq \{\{i,j\} : 1 \leq i < j \leq n\}.
		$$
		Consider a coin that comes up heads with probability 1/3 and, thus, tails with probability 2/3.
		For each element of $S$, flip the coin, and let $S'$ be the set consisting of all elements of $S$ whose
		coin flip resulted in heads. Let $T'$ be the set consisting of all elements $\{i,j\}$ in $T$ for which
		both $i$ and $j$ are in $S'$. <br>
		
		Let $X$ be the size of the set $T'$.
		What is the expected value $\mathbb{E}(X)$ of $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$n/9$`;
const label2 = String.raw`$m/9$`;
const label3 = String.raw`$4n/9$`;
const label4 = String.raw`$4m/9$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
