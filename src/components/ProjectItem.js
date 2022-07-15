import React from "react";

function ProjectItem({ name, about, technologies }) {

  const projectItems = technologies.map((listvalue) => {
    return <span key={listvalue}>{listvalue}</span>;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <div>{projectItems}</div>
      </div>
    </div>
  );
}

export default ProjectItem;
