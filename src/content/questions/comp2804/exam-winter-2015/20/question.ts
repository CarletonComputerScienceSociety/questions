import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $G = (V,E)$ be a graph with vertex set $V$ and edge set $E$, let $n$ be the size of $V$, and let
		$m$ be the size of $E$. For each vertex of $V$, flip a fair and independent coin. Let $V'$ be the
		subset of $V$ consisting of all vertices of $V$ whose coin flip resulted in heads. Let $E'$ be the
		set consisting of all edges $(u,v)$ in $E$ for which both $u$ and $v$ are in $V'$. Define the random
		variable $X$ to be the number of edges in $E'$. What is the expected value of $X$?
`;

const label1 = String.raw`$m/2$`;
const label2 = String.raw`$m/4$`;
const label3 = String.raw`$m/8$`;
const label4 = String.raw`$m/16$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
