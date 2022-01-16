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
    question: "Do you like wild rice hotdish?",
    answer: "No thankplease!",
  },
  {
    id: 4,
    question: "What do you yell at slow walkers?",
    answer: "I'm gonna puke!"
  }
];
