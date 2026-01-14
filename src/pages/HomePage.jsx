// src/pages/Product.jsx
import Navbar from "../components/Fragments/Navbar";
import CardProduct from "../components/Fragments/CardProduct";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <main className="p-10">
        <h2 className="text-2xl font-bold text-[#151515] mb-8 font-['Inter']">Ayo Latihan Quiz</h2>
        <div className="flex flex-wrap gap-8">
          <CardProduct 
            title="Responsive Design dengan Flexbox" 
            image="https://placehold.co/600x400/003366/white?text=Flexbox+Course"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;