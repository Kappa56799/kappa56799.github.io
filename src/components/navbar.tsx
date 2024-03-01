import { useLocation, Link } from 'react-router-dom';
import '../index.css';
import '../App.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between items-center NavbarBackground p-4">
      <Link to="/" className="text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl NavbarHome">Home</Link>

      <div className="flex items-center NavbarOthers">
        <Link to="/blog" className={`text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl mr-4 ${location.pathname === '/blog' ? 'opacity-50' : ''} ${location.pathname === '/blog' ? 'after:bg-white after:absolute after:h-1 after:w-full after:bottom-0 after:left-0' : ''}`}>Blog</Link>
        <Link to="/about" className={`text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl mr-4 ${location.pathname === '/about' ? 'opacity-50' : ''} ${location.pathname === '/about' ? 'after:bg-white after:absolute after:h-1 after:w-full after:bottom-0 after:left-0' : ''}`}>About</Link>
        <Link to="/contact" className={`text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl mr-4 ${location.pathname === '/contact' ? 'opacity-50' : ''} ${location.pathname === '/contact' ? 'after:bg-white after:absolute after:h-1 after:w-full after:bottom-0 after:left-0' : ''}`}>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
