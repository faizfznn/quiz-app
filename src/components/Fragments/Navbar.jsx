import Button from "../Elements/Button/Button";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-200 bg-white">
      <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">🌀</div>
        Cerebellum.
      </div>
      <div className="flex items-center gap-6">
        <span className="text-gray-600 font-medium">Selamat Datang, User</span>
        <Button onClick={handleLogout} className="h-[40px] px-6">Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;