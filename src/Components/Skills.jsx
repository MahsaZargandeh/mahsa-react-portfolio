const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "React Router",
  "Redux",
  "Tailwind CSS",
  "Sass",
  "Git",
  "GitHub",
  "REST API",
  "Node.js (Learning)"
];


export default function Skills() {

  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      <div className="skill-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}