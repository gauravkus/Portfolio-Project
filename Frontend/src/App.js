import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skill";
import profilePic from "./asset/Gaurav.png";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo / Name */}
          <h1 className="text-xl font-bold text-blue-600">
            Gaurav Kushwaha
          </h1>

          {/* Nav Links */}
          <div className="flex items-center space-x-6">
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>

            {/* Resume Button */}
            <a
              href="/Gaurav.pdf"
              download="Gaurav.pdf"
              className="ml-4 flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition"
            >
              <FaDownload className="text-sm" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 pt-24"
      >
        {/* Left side: Text */}
        <div className="flex-1 text-center md:text-left md:pl-8">
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-blue-600">Gaurav Kushwaha</span>
          </h1>
          <p className="mt-4 text-lg">
            Software Developer | Java | Spring Boot | SQL | React.js |
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              View My Work
            </a>
          </div>
        </div>


        {/* Profile Picture */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={profilePic}
            alt="Gaurav Kushwaha"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-blue-500 hover:scale-105 transform transition duration-300"
          />
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            Feel free to reach out to me through the following platforms:
          </p>
          <div className="space-y-4 text-lg">
            {/* Gmail */}
            <p className="flex items-center justify-center">
              <MdEmail className="text-2xl text-red-600 mr-2" />
              <a
                href="mailto:gauravgzp114@gmail.com"
                className="text-blue-600 hover:underline"
              >
                gauravgzp114@gmail.com
              </a>
            </p>

            {/* LinkedIn */}
            <p className="flex items-center justify-center">
              <FaLinkedin className="text-2xl text-blue-700 mr-2" />
              <a
                href="https://www.linkedin.com/in/gkush/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/gkush/
              </a>
            </p>

            {/* GitHub */}
            <p className="text-lg flex items-center justify-center">
              <FaGithub className="text-2xl text-gray-800 mr-2" />
              <a
                href="https://github.com/gauravkus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/gauravkus
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Gaurav Kushwaha. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
