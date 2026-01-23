import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button/Button";

const QuizRulesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter']">
      {/* Header */}
      <header className="flex items-center h-[88.67px] px-8 py-4 bg-white border-b border-gray-200 gap-4">
        <button onClick={() => navigate(-1)} className="text-2xl font-bold hover:text-gray-600 transition-colors">
          ←
        </button>
        {/* Judul dibuat lebih umum karena topiknya random */}
        <h1 className="text-xl font-bold text-[#151515]">Random Quiz Challenge</h1>
      </header>

      {/* Content */}
      <main className="max-w-4xl px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-[#151515]">Aturan Kuis</h2>
        
        {/* Deskripsi disesuaikan untuk menjelaskan sifat dinamis kuis */}
        <p className="text-gray-700 leading-relaxed mb-4">
          Kuis ini dirancang untuk menguji wawasan Anda dengan pertanyaan yang 
          <strong> dihasilkan secara acak</strong> (random generated) dari server. 
          Setiap sesi akan menyajikan tantangan yang berbeda.
        </p>
        
        <ul className="list-disc ml-6 mb-8 text-gray-700 space-y-2">
          <li>Topik pertanyaan: <strong>Acak / Bervariasi</strong></li>
          <li>Sifat soal: Pilihan Ganda (Multiple Choice)</li>
          <li>Syarat nilai kelulusan: 75%</li>
          {/* Anda bisa menyesuaikan durasi jika API memberikan banyak soal */}
          <li>Durasi pengerjaan: 5 menit</li> 
        </ul>

        <p className="text-gray-700 mb-8">
          Jika skor belum memenuhi syarat, Anda dapat langsung mencoba lagi. 
          Ingat, karena soal diambil secara acak, kemungkinan besar Anda akan 
          mendapatkan pertanyaan baru pada percobaan berikutnya.
        </p>

        {/* Info Box / Tips */}
        <div className="bg-[#EBF5FF] border-l-4 border-[#1C6EA4] p-5 rounded-r-lg flex gap-4 mb-8">
          <span className="text-[#1C6EA4] font-bold text-xl">ℹ</span>
          <div>
            <h4 className="font-bold text-[#1C6EA4]">Tips & Trik</h4>
            <p className="text-sm text-gray-600 mb-1">
              Karena soal bersifat acak, pastikan untuk membaca setiap pertanyaan dengan teliti.
            </p>
            <p className="text-sm text-gray-600">
              Koneksi internet yang stabil sangat disarankan agar proses pengambilan soal berjalan lancar.
            </p>
          </div>
        </div>

        <p className="mb-8 italic text-gray-600">✨ Siap menguji keberuntungan dan wawasanmu?</p>

        <Button 
          className="px-10 py-3 rounded-xl flex items-center gap-2 transition-transform active:scale-95"
          onClick={() => navigate("/quiz")}
        >
          Mulai Quiz <span className="text-lg">›</span>
        </Button>
      </main>
    </div>
  );
};

export default QuizRulesPage;