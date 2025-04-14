import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      tools: ["C", "Python", "Java"],
    },
    {
      category: "Web Technologies",
      tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
    },
    {
      category: "Database Systems",
      tools: ["Firebase RTDB", "Firestore", "MySQL", "SQLite", "Supabase"],
    },
    {
      category: "Data Science & ML",
      tools: ["Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
    },
    {
      category: "NLP & LLMs",
      tools: ["Langchain", "LLMs", "Neural Networks", "Groq API"],
    },
    {
      category: "Frameworks",
      tools: ["Django", "DRF", "Bootstrap", "Vite"],
    },
    {
      category: "DevOps & Tools",
      tools: ["GitHub", "Android Studio"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-content">
              <h2>Skills</h2>
              <p>Here's a neat overview of the tools and tech I'm comfortable with.</p>
              <div className="skills-grid">
                {skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <h5>{skill.category}</h5>
                    <ul>
                      {skill.tools.map((tool, i) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
