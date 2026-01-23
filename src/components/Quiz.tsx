import { useState, useEffect } from "react";
import type { Question, QuizState } from "./Uhai";

const TIMER_START = 10;

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIMER_START);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load status dari localStorage (Resume kuis)
  useEffect(() => {
    const savedState = localStorage.getItem("quiz_progress");
    if (savedState) {
      const parsed = JSON.parse(savedState);
      setQuestions(parsed.questions);
      setCurrentIndex(parsed.currentIndex);
      setUserAnswers(parsed.userAnswers);
      setTimeLeft(parsed.timeLeft);
    } else {
      fetchQuestions();
    }
  }, []);

  // Simpan status ke localStorage setiap ada perubahan
  useEffect(() => {
    if (questions.length > 0 && !isFinished) {
      localStorage.setItem("quiz_progress", JSON.stringify({
        questions, currentIndex, userAnswers, timeLeft
      }));
    }
  }, [currentIndex, userAnswers, timeLeft, questions, isFinished]);

  // Timer Logic
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }
    if (isFinished) return;

    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  const fetchQuestions = async () => {
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=12&type=multiple");
      const data = await res.json();
      const formatted = data.results.map((q: Question) => ({
        ...q,
        all_answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
      }));
      setQuestions(formatted);
      setLoading(false);
    } catch (error) {
      console.error("Gagal memuat soal", error);
    }
  };

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...userAnswers, answer];
    setUserAnswers(updatedAnswers);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
      localStorage.removeItem("quiz_progress");
    }
  };

  if (loading) return <div>Memuat soal...</div>;

  if (isFinished) {
    const correctCount = userAnswers.reduce((acc, ans, idx) => 
      ans === questions[idx].correct_answer ? acc + 1 : acc, 0);
    
    return (
      <div className="p-8 text-center bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Hasil Kuis</h2>
        <p>Benar: {correctCount}</p>
        <p>Salah: {userAnswers.length - correctCount}</p>
        <p>Total Dijawab: {userAnswers.length} dari {questions.length}</p>
        <button 
          onClick={() => { localStorage.removeItem("quiz_progress"); window.location.reload(); }}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ulangi Kuis
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-slate-800 text-white rounded-xl shadow-md">
      <div className="flex justify-between mb-4">
        <span>Soal {currentIndex + 1} / {questions.length}</span>
        <span className={`font-mono ${timeLeft < 60 ? 'text-red-500' : 'text-green-400'}`}>
          Waktu: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </span>
      </div>

      <h3 className="text-xl mb-6" dangerouslySetInnerHTML={{ __html: currentQ.question }} />

      <div className="grid gap-3">
        {currentQ.all_answers?.map((ans, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(ans)}
            className="w-full text-left p-3 border border-slate-600 rounded hover:bg-slate-700 transition"
            dangerouslySetInnerHTML={{ __html: ans }}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;