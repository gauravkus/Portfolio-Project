import { useEffect, useState } from "react";

function formatDate(dateStr) {
  if (!dateStr) return "Present";
  const [day, month, year] = dateStr.split("-");
  if (!day || !month || !year) return dateStr;
  try {
    const d = new Date(year, month - 1, day);
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return dateStr;
  }
}

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/experiences")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setExperiences(data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching experiences:", err);
        setError("Failed to load experiences.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading experiences...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  if (!experiences.length) {
    return <p className="text-center text-gray-600">No experience found.</p>;
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-gray-600 mb-2">
                {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
              </p>
             <ul className="list-disc list-inside text-gray-700">
               {exp.description
                 ? exp.description
                     .split('. ')
                     .filter(point => point.trim().length > 0)
                     .map((point, idx) => (
                       <li key={idx}>{point.trim()}{point.endsWith('.') ? '' : '.'}</li>
                     ))
                 : <li>No description provided.</li>}
             </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
