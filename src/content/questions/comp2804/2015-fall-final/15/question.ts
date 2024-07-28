import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given that:
		<ul style="margin: 0.5rem 0;">
			<li>
				The course COMP 9999 runs over a period of one year, starting on January 1 and ending on December
				31. There is one lecture every day; thus, the total number of lectures is 365.
			</li>
			<li>
				Dania and Nick take this course. Dania's birthday is on November 19. Nick's birthday is on December
				3.
			</li>
			<li>
				Professor G. Ruesome teaches the course. Professor Ruesome decides to have 20 quizzes during the
				year. For this, he chooses a uniformly random subset of 20 days; the quizzes will be on the 20
				chosen days. (It is possible that there is a quiz on January 1.)
			</li>
		</ul>
		
		Determine $\Pr(A)$, where $A$ is the event
		<ul>
  <li> A = "There is a quiz on Dania's birthday and there is a quiz on Nick's birthday".</li>
		</ul>
`;

const label1 = String.raw`$1 - \left. {363 \choose 20} \middle/ {365 \choose 20} \right.$`;
const label2 = String.raw`$\left. {363 \choose 18} \middle/ {365 \choose 20} \right.$`;
const label3 = String.raw`$\left. {365 \choose 18} \middle/ {365 \choose 20} \right.$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
