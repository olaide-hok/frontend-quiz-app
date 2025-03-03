/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useContext } from "react";

interface Question {
  title: string;
  icon: string;
  questions: QuestionType[];
}

interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

interface QuizContextType {
  fetchQuestions: (quizzess: Question[], quizName: string) => void;
  questions: any[];
  quiz: string;
  setQuiz: (quiz: string) => void;
  waiting: boolean;
  index: number;
  checkAnswer: (value: boolean) => void;
  nextQuestion: () => void;
  correct: number;
  showScore: boolean;
  playAgain: () => void;
}
const QuizContext = React.createContext<QuizContextType>({} as QuizContextType);

const QuizProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [waiting, setWaiting] = useState(true);

  const [quiz, setQuiz] = useState("");

  const [index, setIndex] = useState(0);

  const [correct, setCorrect] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const fetchQuestions = (quizzes: Question[], quizName: string) => {
    if (quizName === "") return;
    setWaiting(false);
    const quizQuestion = quizzes.filter((q) => q.title === quizName);
    if (quizQuestion.length > 0) {
      setQuestions(quizQuestion); // Only set if there are matching questions
      setWaiting(false);
    } else {
      console.warn("No questions found for the selected quiz.");
      setWaiting(true);
    }
    return quizQuestion;
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      const { questions: questionsArray } = questions[0];
      if (index > questionsArray.length - 1) {
        setShowScore(true);
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value: boolean) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
  };

  const playAgain = () => {
    setShowScore(false);
    setWaiting(true);
    setCorrect(0);
    setQuiz("");
  };

  return (
    <QuizContext.Provider
      value={{
        fetchQuestions,
        questions,
        quiz,
        setQuiz,
        waiting,
        index,
        checkAnswer,
        nextQuestion,
        correct,
        showScore,
        playAgain,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(QuizContext);
};

export { QuizContext, QuizProvider };
