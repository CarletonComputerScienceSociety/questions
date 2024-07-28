import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The final exam for COMP 2804 has 25 multiple-choice questions. For each question, there are 4
		possible answers, exactly one of which is correct. Michiel chooses a positive real number $z$ and
		uses the following marking scheme: For each correct answer, a student receives 1 mark, whereas for
		each incorrect answer, the student receives $-z$ marks. <br>
		
		Jim is one of the students and answers the 25 questions, by choosing a uniformly random answer for
		each question; the choices are independent of each other. <br>
		
		Define the random variable
		<ul>
  <li> X = the number of marks that Jim recevies.</li>
		</ul>
		For what value of $z$ is the expected value $\mathbb{E}(X)$ equal to 0? <br>
		
		<em>Hint:</em> Use the Linearity of Expectation.
`;

const label1 = String.raw`$z = 1/4$`;
const label2 = String.raw`$z = 1/3$`;
const label3 = String.raw`$z = 1/2$`;
const label4 = String.raw`$z = 3/4$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
