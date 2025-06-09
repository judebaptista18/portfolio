import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import Persistent from "../../assets/icons/company/persistent-logo.jpg"
import Teknorix from "../../assets/icons/company/teknorix-logo.png"
import Androcid from "../../assets/icons/company/androcid-logo.jpeg"
import Apexuara from "../../assets/icons/company/apexuara-logo.png"
import Freelance from "../../assets/icons/company/freelance-logo.png"
import accuride from "../../assets/icons/company/accuride-logo.svg"

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
							<div className="work">
							<img
								src={accuride}
								alt="Persistent System"
								className="work-image"
							/>
							<div className="work-title">Accuride International</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2025 - present</div>
						</div>
						<div className="work">
							<img
								src={Persistent}
								alt="Persistent System"
								className="work-image"
							/>
							<div className="work-title">Persistent Systems</div>
							<div className="work-subtitle">
								Lead Frontend Engineer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src={Teknorix}
								alt="Teknorix Technologies Private Limited"
								className="work-image"
							/>
							<div className="work-title">Teknorix Technologies Private Ltd.</div>
							<div className="work-subtitle">
							Senior Software Engineer, Frontend 
							</div>
							<div className="work-duration">2021 - 2023</div>
						</div>
						<div className="work">
							<img
								src={Androcid}
								alt="Androcid Media Private limited"
								className="work-image"
							/>
							<div className="work-title">Androcid Media Private Ltd.</div>
							<div className="work-subtitle">
							Web Software Developer 
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>
						<div className="work">
							<img
								src={Apexuara}
								alt="Apexuara Systems Private Limited"
								className="work-image"
							/>
							<div className="work-title">Apexuara Systems Private Ltd.</div>
							<div className="work-subtitle">
								Software Project Engineer
							</div>
							<div className="work-duration">2018 - 2020</div>
						</div>
						<div className="work">
							<img
								src={Freelance}
								alt="Freelancing"
								className="work-image"
							/>
							<div className="work-title">Freelancer</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2017 - 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
