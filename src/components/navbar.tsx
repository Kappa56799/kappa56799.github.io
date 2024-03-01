import { useLocation } from 'react-router-dom';
import '../index.css';
import '../App.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between items-center NavbarBackground p-4">
      <a href="/" className="text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl NavbarHome">Home</a>

      <div className="flex items-center NavbarOthers">
        <a href="/blog" className={`text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl mr-4 ${location.pathname === '/blog' ? 'opacity-50' : ''} ${location.pathname === '/blog' ? 'after:bg-white after:absolute after:h-1 after:w-full after:bottom-0 after:left-0' : ''}`}>Blog</a>
        <a href="/about" className={`text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl mr-4 ${location.pathname === '/about' ? 'opacity-50' : ''} ${location.pathname === '/about' ? 'after:bg-white after:absolute after:h-1 after:w-full after:bottom-0 after:left-0' : ''}`}>About</a>
        <a href="/contact" className={`text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl mr-4 ${location.pathname === '/contact' ? 'opacity-50' : ''} ${location.pathname === '/contact' ? 'after:bg-white after:absolute after:h-1 after:w-full after:bottom-0 after:left-0' : ''}`}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
