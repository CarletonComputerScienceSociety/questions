import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Who is Lindsay Bangs?
`;

const label1 = String.raw`A world-renowned rapper.`;
const label2 = String.raw`Goalie of the Ottawa Senators, her nickname is The Hamburglar.`;
const label3 = String.raw`President of the Carleton Computer Science Society.`;
const label4 = String.raw`Owner of the brewery that produces Leo's Early Breakfast IPA.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
