import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button/Button";

const QuizRulesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter']">
      {/* Header */}
      <header className="flex items-center h-[88.67px] px-8 py-4 bg-white border-b border-gray-200 gap-4">
        <button onClick={() => navigate(-1)} className="text-2xl font-bold">←</button>
        <h1 className="text-xl font-bold text-[#151515]">Junior Web Developer</h1>
      </header>

      {/* Content */}
      <main className="max-w-4xl px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-[#151515]">Aturan Kuis</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Kuis ini bertujuan untuk menguji pemahaman Anda mengenai konsep dasar Flexbox dan penerapannya dalam membuat layout yang responsif. Terdapat 4 pertanyaan yang harus dikerjakan. Beberapa ketentuannya sebagai berikut:
        </p>
        <ul className="list-disc ml-6 mb-8 text-gray-700 space-y-2">
          <li>Syarat nilai kelulusan: 75%</li>
          <li>Durasi ujian: 5 menit</li>
        </ul>
        <p className="text-gray-700 mb-8">
          Jika tidak memenuhi syarat kelulusan, Anda harus menunggu selama 1 menit sebelum dapat mengulang kuis kembali. Gunakan waktu tunggu tersebut untuk meninjau kembali materi dan contoh praktik sebelumnya.
        </p>

        {/* Info Box / Tips */}
        <div className="bg-[#EBF5FF] border-l-4 border-[#1C6EA4] p-5 rounded-r-lg flex gap-4 mb-8">
          <span className="text-[#1C6EA4] font-bold">ℹ</span>
          <div>
            <h4 className="font-bold text-[#1C6EA4]">Tips & Trik</h4>
            <p className="text-sm text-gray-600">Kuis ini sebaiknya dikerjakan melalui komputer/laptop agar tampilan dan interaksi dapat berjalan optimal.</p>
          </div>
        </div>

        <p className="mb-8 italic text-gray-600">✨ Selamat mengerjakan dan buktikan kemampuan Flexbox-mu!</p>

        <Button 
          className="px-10 py-3 rounded-xl flex items-center gap-2"
          onClick={() => navigate("/quiz")}
        >
          Mulai <span className="text-lg">›</span>
        </Button>
      </main>
    </div>
  );
};

export default QuizRulesPage;