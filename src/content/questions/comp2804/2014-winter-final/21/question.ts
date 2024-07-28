import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
When a couple has a child, this child is a boy with probability 1/2 and a girl with probability
		1/2, independent of the gender of previous children. A couple stops having children as soon as
		they have 2 girls or 2 boys. Define the random variables
		<ul>
  <li> G = the number of girls the couple has</li>
		</ul>
		and
		<ul>
  <li> B = the number of boys the couple has.</li>
		</ul>
		Are $G$ and $B$ independent random variables?
`;

const label1 = String.raw`Yes`;
const label2 = String.raw`No`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
  ],
};
