import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What does
		$$
			{w \choose 3} \cdot {m \choose 2} + {w \choose 4} \cdot m + {w \choose 5}
		$$
		count?
`;

const label1 = String.raw`The number of ways to choose 5 people out of a group consisting of $w$ women and $m$ men,
		where at most 3 women can be chosen.`;
const label2 = String.raw`The number of ways to choose 5 people out of a group consisting of $w$ women and $m$ men,
		where at most 3 men can be chosen.`;
const label3 = String.raw`The number of ways to choose 5 people out of a group consisting of $w$ women and $m$ men,
		where at least 3 women must be chosen.`;
const label4 = String.raw`The number of ways to choose 5 people out of a group consisting of $w$ women and $m$ men,
		where at least 3 men must be chosen.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
