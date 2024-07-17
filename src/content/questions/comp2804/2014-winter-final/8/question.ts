import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a group of $n$ people, let $k$ be an integer with $1 \leq k \leq n$, and consider a
		circular table with $k$ chairs around it. We select $k$ people and seat them around this table. How
		many different seating arrangements are there? (Two seating arrangements $A$ and $B$ are the same if
		for each person, the clockwise neighbor in $A$ is the same as the clockwise neighbor in $B$, and the
		counterclockwise neighbor in $A$ is the same as the counterclockwise neighbor in $B$.)
`;

const label1 = String.raw`$\frac{n!}{k(n-k)!}$`;
const label2 = String.raw`$\frac{n!}{k!(n-k)!}$`;
const label3 = String.raw`$\frac{n!}{(n-k)!}$`;
const label4 = String.raw`$\frac{2 \cdot n!}{(n-k)!}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
