
export const Header = () => {

  return (
  <div className="w-full flex justify-center items-center relative top-3">
    <nav className="flex gap-2 py-0.5 px-3 border border-white/15 rounded-full backdrop-blur">
      <a href="#"
      className= 'nav-item'>Home</a>
      <a href="#"
      className= 'nav-item'>Project</a>
      <a href="#"
      className= 'nav-item'>About</a>
      <a href="#"
      className= 'nav-item bg-white text-black'>Contact</a>
    </nav>
  </div>);
};
