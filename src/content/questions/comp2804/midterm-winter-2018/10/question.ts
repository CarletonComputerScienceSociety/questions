import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
As you all know, Nick has been dreaming to be like Spiderman. Spiderman can climb up the outside of a building;
		if he is at a particular floor, then, in one step, Spiderman can move up several floors. <br>
		
		Since having finished marking assignment 2, Nick has been working hard to improve his Spiderman-skills:
		In one step, Nick can move up either two floors or three floors. (Nick lost his ability to move up one floor in one step.) <br>
		
		Let $n \geq 2$ be an integer and consider a building with $n$ floors, numbered $1,2,\dots,n$. (The first floor has number 1;
		this is not the ground floor.) Nick is standing in front of this building, at the ground level. <br>
		
		Let $N_n$ be the number of different ways in which Nick can climb to the $n$-th floor.
		Which of the following is true for any $n \geq 5$?
`;

const label1 = String.raw`$N_n = N_{n-1} + N_{n-2} + N_{n-3}$`;
const label2 = String.raw`$N_n = N_{n-1} + N_{n-2}$`;
const label3 = String.raw`$N_n = N_{n-1} + N_{n-3}$`;
const label4 = String.raw`$N_n = N_{n-2} + N_{n-3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
