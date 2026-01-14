import { Link } from "react-router-dom";
import IconProfile from "../../assets/icon.png";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex min-h-screen bg-white font-['Inter']">
      <div className="hidden lg:flex w-1/2 bg-[#F0F7FF] m-4 rounded-3xl flex-col p-12 relative overflow-hidden">
        <h1 className="text-4xl font-bold text-[#151515] leading-tight max-w-md">
          Halo, Selamat Datang Kembali di Cerebellum
        </h1>
        <div className="mt-auto relative z-10">
          <img
            src="/path-to-your-illustration.png"
            alt="Illustration"
            className="w-3/4"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16">
        <div className="flex justify-end items-center gap-4 mb-12">
          <p className="text-sm text-gray-600">
            {type === "login" ? "Belum punya akun?" : "Sudah punya akun?"}
          </p>
          <Link
            to={type === "login" ? "/register" : "/login"}
            className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-sm hover:bg-gray-50"
          >
            {type === "login" ? "Daftar" : "Masuk"}
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full flex flex-col justify-center flex-grow">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={IconProfile}
                alt="Profile Icon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-[#151515] mb-2">
            {type === "login" ? "Masuk ke Cerebellum" : "Daftar Akun Baru"}
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Akses perjalanan belajarmu yang sudah dimulai.
          </p>

          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">atau</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
