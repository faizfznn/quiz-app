import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button/Button";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(1000); // Default 5 menit
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  // 1. Inisialisasi Kuis (Mendukung Resume)
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("quiz_state"));
    
    if (savedState && !savedState.isFinished) {
      setQuestions(savedState.questions);
      setCurrentIndex(savedState.currentIndex);
      setUserAnswers(savedState.userAnswers);
      setTimeLeft(savedState.timeLeft);
    } else {
      fetchQuestions();
    }
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
      const data = await response.json();
      const formatted = data.results.map((q) => ({
        question: q.question,
        correct: q.correct_answer,
        options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
      }));
      setQuestions(formatted);
    } catch (error) {
      console.error("Gagal memuat soal", error);
    }
  };

  // 2. Mekanisme Timer & Auto-Save
  useEffect(() => {
    if (timeLeft > 0 && !isFinished && questions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          saveToLocal(currentIndex, userAnswers, newTime);
          return newTime;
        });
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsFinished(true);
    }
  }, [timeLeft, isFinished, questions]);

  const saveToLocal = (index, answers, time) => {
    localStorage.setItem("quiz_state", JSON.stringify({
      questions,
      currentIndex: index,
      userAnswers: answers,
      timeLeft: time,
      isFinished: false
    }));
  };

  // 3. Logika Menjawab & Navigasi Otomatis
  const handleAnswer = (selectedOption) => {
    const newAnswers = [...userAnswers, { 
      questionIndex: currentIndex, 
      answer: selectedOption,
      isCorrect: selectedOption === questions[currentIndex].correct
    }];
    
    setUserAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      saveToLocal(nextIndex, newAnswers, timeLeft);
    } else {
      finishQuiz(newAnswers);
    }
  };

  const finishQuiz = (finalAnswers = userAnswers) => {
    setIsFinished(true);
    localStorage.removeItem("quiz_state"); // Bersihkan state setelah selesai
  };

  // 4. Tampilan Hasil (Jika Selesai)
  if (isFinished) {
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#F8F9FA]">
        <h2 className="text-3xl font-bold mb-4">Hasil Kuis</h2>
        <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-md text-center">
          <p className="text-lg mb-2">Benar: <span className="text-green-600 font-bold">{correctCount}</span></p>
          <p className="text-lg mb-2">Salah: <span className="text-red-600 font-bold">{questions.length - correctCount}</span></p>
          <p className="text-lg mb-6">Total Dikerjakan: <span className="font-bold">{userAnswers.length}</span> / {questions.length}</p>
          <Button onClick={() => navigate("/home")} className="w-full">Kembali ke Beranda</Button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return <div className="p-10 text-center font-bold">Memuat soal...</div>;

  const currentQ = questions[currentIndex];
  const formatTime = (s) => `${Math.floor(s / 60)}m:${String(s % 60).padStart(2, '0')}s`;

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter']">
      {/* Header Kuis */}
      <div className="flex justify-between items-center px-10 py-4 bg-white border-b border-gray-200">
        <h1 className="font-bold text-lg">Soal {currentIndex + 1} / {questions.length}</h1>
        <div className="flex items-center gap-4">
          <span className={`font-bold px-4 py-1 rounded-lg ${timeLeft < 60 ? 'text-red-600 bg-red-50' : 'text-blue-600 bg-blue-50'}`}>
            {formatTime(timeLeft)}
          </span>
          <Button variant="secondary" onClick={() => finishQuiz()} className="!h-10 bg-red-600 hover:bg-red-700 text-white border-none">Selesai</Button>
        </div>
      </div>

      <div className="flex p-10 gap-10">
        {/* Sidebar Indikator Soal */}
        <div className="w-1/4 bg-white p-6 rounded-2xl border border-gray-200 h-fit">
          <h3 className="font-bold mb-4">Daftar Soal</h3>
          <div className="grid grid-cols-4 gap-2">
            {questions.map((_, i) => (
              <div key={i} className={`w-10 h-10 flex items-center justify-center rounded-lg border font-bold text-sm
                ${i === currentIndex ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-gray-200 text-gray-400'}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Area Pertanyaan */}
        <div className="w-3/4 flex flex-col gap-6">
          <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm min-h-[300px]">
            <h2 className="text-xl font-semibold mb-8 text-[#151515]" dangerouslySetInnerHTML={{ __html: currentQ.question }} />
            <div className="grid gap-4">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all font-medium flex items-center gap-4 group"
                >
                  <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs group-hover:border-blue-600 group-hover:text-blue-600">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: opt }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;