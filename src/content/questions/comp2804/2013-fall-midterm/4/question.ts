import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
  In a group of 20 people,
  <ul>
    <li> 6 are blond,
    <li> 7 have green eyes,
    <li> 11 are not blond and do not have green eyes.
  </ul>
  How many people are blond and have green eyes?
`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: "$3$", correct: false },
    { label: "$4$", correct: true },
    { label: "$5$", correct: false },
    { label: "$9$", correct: false },
  ],
};
