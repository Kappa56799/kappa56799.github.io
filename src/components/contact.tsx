import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';
import '../index.css';
import '../App.css';

const Contact: React.FC = () => {
  return (
      <div className="CBackground">
      <Navbar />
      <div className="xl:flex xl:flex-col ContactMe">
        <h1 className="text-white text-4xl md:text-6xl text-center BoldFont">Contact Me</h1>
        <div className="flex justify-center gap-5 icons">
          <a href="https://github.com/Kappa56799"><FontAwesomeIcon className="text-white text-8xl animated hover:text-orange-600" icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/kacper-palka-042a88256/"><FontAwesomeIcon className="text-white text-8xl animated hover:text-blue-600" icon={faLinkedin} /></a>
          <a href="mailto:palka@kacper.boo"><FontAwesomeIcon className="text-white text-8xl animated hover:text-gray-500" icon={faEnvelope} /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
