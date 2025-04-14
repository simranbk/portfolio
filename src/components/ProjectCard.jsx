import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, bullets }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`${title} screenshot`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {bullets && (
            <ul >
              {bullets.map((point, i) => (
                <li key={i} >{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Col>
  );
};
