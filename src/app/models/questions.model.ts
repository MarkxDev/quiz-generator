export interface IQuestionResponce {
  response_code: number,
  results: any[]
}

export interface IQuestion {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}
