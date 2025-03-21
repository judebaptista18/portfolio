import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import StackIcon from "tech-stack-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, techStack } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-tech">
						{techStack &&
							techStack.map((tech) => <StackIcon key={tech} name={tech} className="project-tech-icon" />)}
					</div>
					{/* <div className="project-tech">{techStack}</div> */}
					{link && <div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>

						<div className="project-link-text">
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{linkText}
							</a>
						</div>
					</div>}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
