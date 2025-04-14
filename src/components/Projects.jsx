import { Container, Row, Col } from "react-bootstrap";
import compImg1 from "../assets/img/cat_theme/comp1.jpg";
import compImg2 from "../assets/img/cat_theme/comp2.jpg";
import compImg3 from "../assets/img/cat_theme/comp3.jpg";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Reality Check",
      description: `A fact-checking platform using fine-tuned LLMs. Tools: BeautifulSoup, Neo4j, Langchain, GroqAPI, Llama.`,
      bullets: [
        "Built domain-specific dataset for history and science; 49% boost in accuracy.",
        "Implemented RAG with LangChain + GroqAPI + Llama; 80% faster inference.",
        "Finetuned models like Llama, Gemma, Falcon.",
        "Upcoming: toolkit to automate domain-specific dataset creation.",
        "Jul 2024 – Present"
      ],
      imgUrl: compImg1,
    },
    {
      title: "HEAL IT",
      description: `Ambulance booking app using Maps and Firebase. Tools: Java, XML, Firebase, Google APIs.`,
      bullets: [
        "Used Google Maps API for routing and address display.",
        "Real-time location tracking with Firebase RTDB.",
        "Firestore and Cloud Storage for user and ambulance data.",
        "Integrated payment gateway.",
        "Oct 2023 – Mar 2024"
      ],
      imgUrl: compImg2,
    },
    {
      title: "Reverse Recipe Finder",
      description: `Web app for recipe recommendation by ingredients. Tools: React, Flask, Supabase.`,
      bullets: [
        "React frontend for inputting available ingredients.",
        "Flask backend processes data and queries Supabase.",
        "Schema design for scalable ingredient lookup.",
        "Planned: dietary filters, user reviews, recipe expansion.",
        "March 2025"
      ],
      imgUrl: compImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="equal-height-row">
          <Col>
            <h2>Projects</h2>
            <p>A showcase of some of the key software projects I've built across full-stack, ML, and mobile development domains.</p>
            <Row >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
