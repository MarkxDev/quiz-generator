export interface IQuestionResponce {
  response_code: number,
  results: IQuestion[]
}

export interface IQuestion {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}


export type QuestionView = IQuestion & { answers: string[] };
export type QuizEndData = QuestionView & { selected_answer: string };
export type ResultView = { quizEndData: QuizEndData[], score?: number };
