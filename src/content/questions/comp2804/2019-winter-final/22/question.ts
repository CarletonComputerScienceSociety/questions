import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
When a couple has a child, this child is a boy with probability 1/2 and a girl with probability 1/2,
		independent of the gender of the other children. A couple stops having children as soon as they have
		2 girls or 2 boys. Consider the random variables
		
		<ul>
  <li> G = the number of girls the couple has,</li>
		</ul>
		and
		<ul>
  <li> B = the number of boys the couple has.</li>
		</ul>
		
		Which of the following is correct?
`;

const label1 = String.raw`The random variables $G$ and $B$ are independent.`;
const label2 = String.raw`The random variables $G$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;
const label4 = String.raw`All of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
