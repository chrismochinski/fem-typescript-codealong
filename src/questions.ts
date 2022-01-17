export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "Do you like lasagna?",
    answer: "Yes indeed kind sir",
  },
  {
    id: 2,
    question: "Do you like dark souls?",
    answer: "Yes of course holy crap!",
  },
  {
    id: 3,
    question: "Wakatime - thoughts?",
    answer: "Pretty neato!"
  },
];
