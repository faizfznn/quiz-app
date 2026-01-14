import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { title, image } = props;
  return (
    <Link to="/quiz-rules" className="block transition-transform hover:scale-[1.02]">
      <div className="w-full max-w-[300px] bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden font-['Inter']">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-5 flex flex-col gap-3">
          <h3 className="font-bold text-[#151515] text-lg">{title}</h3>
          <div className="text-sm text-gray-500 flex flex-col gap-2">
            <div className="flex items-center gap-2">🎬 3 Video</div>
            <div className="flex items-center gap-2">👥 28.560</div>
            <div className="flex items-center gap-2">⭐ 4,65/5</div>
          </div>
          <div className="mt-2">
            <div className="w-full bg-blue-50 h-2 rounded-full">
              <div className="bg-blue-600 h-full w-[0%]"></div>
            </div>
            <div className="flex justify-between text-[10px] mt-1 text-gray-400 font-bold">
              <span>5</span>
              <span>0%</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;