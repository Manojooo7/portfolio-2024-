
export const Header = () => {

  return (
  <div className="w-full flex justify-center items-center fixed top-3">
    <nav className="flex gap-1.5 py-0.5 px-1 border border-white/15 rounded-full backdrop-blur">
      <a href="#" className= 'nav-item'>Home</a>
      <a href="#" className= 'nav-item'>Project</a>
      <a href="#" className= 'nav-item'>About</a>
      <a href="#" className= 'nav-item bg-white text-black'>Contact</a>
    </nav>
  </div>
  );
};
