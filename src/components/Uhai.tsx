import React from 'react';
export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  all_answers?: string[]; // Gabungan jawaban acak
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  userAnswers: string[];
  timeLeft: number;
  isFinished: boolean;
  isLoggedIn: boolean;
}
