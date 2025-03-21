import React from "react";
import { Link } from "react-router-dom";



import "./style/article.css";

const Article = (props) => {
	const { img, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<img src={img} alt={img} />
				</div>

				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Article;
