import { FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaCode, FaProjectDiagram } from "react-icons/fa6";

import { SiSpringboot, SiOracle } from "react-icons/si";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  // Map skill names to icons
  const icons = {
    Java: <FaJava className="text-red-600" />,
    "Core Java": <FaCode className="text-gray-700" />,
    JavaScript: <FaJsSquare className="text-yellow-500" />,
    SQL: <FaDatabase className="text-blue-600" />,
    PLSQL: <SiOracle className="text-red-500" />,
    "Spring Boot": <SiSpringboot className="text-green-600" />,
    "React JS": <FaReact className="text-sky-500" />,
    HTML: <FaHtml5 className="text-orange-600" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    OOP: <FaProjectDiagram className="text-purple-600" />,
    "REST API": <FaCode className="text-indigo-500" />,
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/skills") // backend API
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12 bg-gray-50" id="skills">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      {/* Flat Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* Left: Icon + Name */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">{icons[skill.name] || <FaCode />}</span>
              <span className="font-medium">{skill.name}</span>
            </div>

            {/* Right: Proficiency */}
            <span className="text-sm text-gray-600 italic">
              {skill.proficiency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
