import '../index.css';
import '../App.css';

const Page404: React.FC = () => {
  return (
    <div className="Page404background">
      <h1 className="text-white text-center text-9xl font-bold">404</h1>
      <h2 className="text-white text-4xl">Nothing Here 😢!</h2>
      <a href="/" className="text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-2xl md:text-3xl">Go back</a>
    </div>
  );
}

export default Page404;
