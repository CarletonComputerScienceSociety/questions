import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A certain terrible, no-good, mean-spirited, awful professor gives his students 250 sample exam questions
		and then makes his final exam by choosing 25 of these questions uniformly at random. Student Nika doesn't
		have much time to study so she chooses 50 (out of 250) random sample exam questions and practices on those.
		
		<p style="margin: 0.5rem 0;">
			When Nika writes the exam, what is the expected number of questions that appear on the exam and that
			Nika has practiced on?
		</p>
		
		(n.b., depending on your background, it may be helpful to observe that this can be modelled using the hypergeometric
		distribution)
`;

const label1 = String.raw`2`;
const label2 = String.raw`5`;
const label3 = String.raw`10`;
const label4 = String.raw`20`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
