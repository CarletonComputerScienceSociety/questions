import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "How many strings can be obtained by rearranging the letters of the word POOPERSCOOPER",
  options: [
    { label: "$13!$", correct: false },
    {
      label:
        "${{13}\\choose{4}}{{9}\\choose{3}}{{6}\\choose{2}}{{4}\\choose{2}}{{2}\\choose{1}}$",
      correct: true,
    },
    {
      label:
        "${{13}\\choose{4}}{{9}\\choose{3}}{{6}\\choose{2}}{{4}\\choose{2}}$",
      correct: false,
    },
    { label: "$4!3!2!2!1!1!$", correct: false },
  ],
};
