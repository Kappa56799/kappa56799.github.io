import Navbar from './navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.css';
import '../App.css';

const About: React.FC = () => {
  return (
    <div className="ABackground">
      <Navbar />
      <div className="xl:flex xl:flex-col AboutMe">
        <h1 className="text-white text-4xl md:text-6xl BoldFont">About Me</h1>
        <p className="text-white text-xl md:text-2xl font-sans">Hello, I'm Kacper 👋 <br/><br/>
          Currently a 2nd year Computer Science Student at TU Dublin.<br/><br/>
          I have a passion for technology and love to learn new things. 
          I'm always looking for new <br/> opportunities to expand my knowledge and skills and
          I'm hugely interested in Cyber-Security, <br/> Reverse Engineering and playing in CTF 
          events with Ireland without the RE.<br/><br/>
          I'm also a candidate for the Irish Cyber-Security Team, which will compete
          in the <br/> European Cyber-Security Challenge (ECSC) in Italy 2024.
          I have also competed in the ECSC <br/> of 2023 hosted in Hamar, Norway representing Team Ireland! 
          and have experience <br/> in working with a team and under pressure to solve complex problems.
          <br/><br/>
          You can find me on LinkedIn and GitHub, where I post my projects and work on my contact page. <br/>
        </p>
      </div>
    </div>
  );
}

export default About;
