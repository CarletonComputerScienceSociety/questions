import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
After having proctored the midterm, Alexa, Farah, May, and Shelly decide to go trick-or-treating.
		For any house that the ladies visit, if they do not receive candy, they throw rotten eggs at the
		house. <br>
		
		Let $m \geq 7$ and $n \geq 7$ be integers. There are $m$ houses whose owners hand out candy and
		there are $n$ houses whose owners do not hand out candy. <br>
		
		The ladies choose a uniformly random subset of 7 houses and visit these 7 houses. Define the event
		[defs]
		  A = "the ladies throw rotten eggs at exactly 2 of the 7 chosen houses".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{{m \choose 5} + {n \choose 2}}{{m+n \choose 7}}$`;
const label2 = String.raw`$\frac{{m \choose 5} \cdot {n \choose 2}}{{m+n \choose 7}}$`;
const label3 = String.raw`$\frac{{7 \choose 2}}{{m \choose 5} \cdot {n \choose 2}}$`;
const label4 = String.raw`$\frac{{7 \choose 2}}{{m+n \choose 7}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
