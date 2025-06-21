import vib from "../assets/icons/project/vib-logo.png";
import onstro from "../assets/icons/project/onstro-logo.svg";
import goto from "../assets/icons/project/goto-icon.jpg";
import netzsch from "../assets/icons/project/netzsch-icon.jpg";
import mechgiri from "../assets/icons/project/mechgiri-icon.jpg";
import gaihct from "../assets/icons/project/gaihct-icon.jpg";
import eas from "../assets/icons/project/eas-icon.jpeg";
import litebulb from "../assets/icons/project/litebulb-icon.png";
import FMA from "../assets/icons/project/FMA-icon.png";
import accuride from "../assets/icons/company/accuride-logo.svg";
const INFO = {
	main: {
		title: "Jude's Porfolio",
		name: "Jude Baptista",
		email: "judebaptista18@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		// twitter: "",
		github: "https://github.com/judebaptista18/",
		linkedin: "https://www.linkedin.com/in/jude-baptista/",
		instagram: "https://www.instagram.com/_t_h_u_g_l_i_f_e/",
		// stackoverflow: "",
		// facebook: "",
	},

	homepage: {
		title: "Front-End developer, and passionate learner.",
		description:
			"Experienced Front End Software Engineer with over six years of expertise in building scalable, high-performance web applications using React, JavaScript, TypeScript, Next.js and Node.js. Adept at staying ahead of industry trends and leading frontend projects in a fast-paced, and high-pressure environment, delivering results efficiently with a focus on responsive and accessible design, UI development, SEO, performance optimization, maintainability, scalability, security and seamless API integrations. Possesses overall knowledge of the Software Development Lifecycle and a proven ability to collaborate actively within cross-functional Agile teams, delivering innovative, user-centric solutions.",
	},

	about: {
		title: "I’m Jude Baptista, a passionate Software engineer with enthusiasm to learn.",
		description:
			"I have worked on multiple projects, built dynamic and user-friendly web applications. I thrive in collaborative environments, constantly adapting and learning to tackle new challenges. My strong problem-solving skills, attention to detail, and effective communication allow me to contribute meaningfully to team success. Outside of work, I'm deeply committed to sports, especially football, and maintain a disciplined approach to my diet and gym routine. This commitment helps me stay consistent, confident, and focused in both my personal and professional life.",
	},

	projects: [
		{
			title: "Accuride Internation Europe, UK/EU",
			description:
				"Led the upgrade of a  B2B e-commerce platform for EU/UK and US, enabling customers from the UK, EU, and other regions to purchase industrial-grade hardware parts. Developed complex cart and quote workflows using Magento, Fourth Shift, and PIM systems, and integrated HubSpot via MakeWebBetter. Built a modern, high-performance frontend with Next.js and React. Also implemented Google Analytics 4 (GA4) and Google Tag Manager (GTM) for enhanced tracking and insights, contributing to noticeable improvements in system performance and user experience.",
			logo: accuride,
			techStack: [
				"nextjs",
				"i18next",
				"reactjs",
				"js",
				"typescript",
				"bootstrap5",
				"analytics",
				"graphql",
				"sass",
				"jira",
				"bitbucket",
				"aws"
			],
			linkText: "Accuride Europe",
			link: "https://www.accuride.com/en-us",
		},
		{
			title: "GoTo Checkout Flow & Trial Forms - GoTo, USA",
			description:
				"B2B SaaS e-commerce website : Checkout Flow: Led the maintenance and migration of payment checkout forms to a unified, config-driven system, reducing developer effort and providing a scalable, maintainable solution for future project integrations.User Trial Forms: Redesigned user trial forms as dynamic micro-frontends, seamlessly integrated across multiple product marketing websites. Enhanced user interaction, made the forms configurable to minimize frontend changes, and created a dynamic solution adaptable to various products.",
			logo: goto,
			techStack: [
				"reactjs",
				"js",
				"typescript",
				"reduxsaga",
				"vitejs",
				"sass",
				"storybook",
				"analytics",
				"jest",
				"playwright",
				"jira",
				"git",
			],
			linkText: "GoTo Meeting",
			link: "https://www.goto.com/meeting",
		},
		{
			title: "VIB Form - VIB, Belgium",
			description:
				"A enabled web publishers to create dynamic, embeddable forms for campaign management and result tracking through a dashboard. It simplified campaign creation and streamlined data collection and analysis, reducing manual effort and enhancing data accuracy.",
			logo: vib,
			techStack: [
				"reactjs",
				"js",
				"typescript",
				"redux",
				"webpack",
				"less",
				"antd",
				"azure",
				"docker",
				"datadog",
				"jira",
				"bitbucket",
			],
			linkText: "VIB",
			// link: "https://vib.be/",
		},
		{
			title: "VIB Home - VIB, Belgium",
			description:
				"Vib-Home: A configurable micro-frontend showcasing research work, featuring advanced filters for displaying posts and news. Enhanced content discoverability, boosting user engagement by 35%. Empowered web publishers to create posts using CKEditor, where I developed custom plugins for diagrams, attachments, and a new text viewer. Accelerated content creation by 50%, enabling richer and more interactive posts.",
			logo: vib,
			techStack: [
				"reactjs",
				"js",
				"typescript",
				"redux",
				"webpack",
				"less",
				"antd",
				"azure",
				"docker",
				"datadog",
				"jira",
				"bitbucket",
			],
			linkText: "VIB",
			link: "https://vib.be/",
		},
		{
			title: "VIB Services - VIB, Belgium",
			description:
				"Built a portal to showcase volunteers, staff, and scientists while implementing role-based access control. Improved staff management efficiency, cutting administrative overhead by 30% and ensuring secure user access.",
			logo: vib,
			techStack: [
				"reactjs",
				"js",
				"typescript",
				"redux",
				"webpack",
				"less",
				"antd",
				"azure",
				"docker",
				"datadog",
				"jira",
				"bitbucket",
			],
			linkText: "VIB",
			// link: "https://vib.be/",
		},
		{
			title: "Research Data Collection - VIB, Belgium",
			description:
				"Developed a React widget with a grid-like calendar embedded in the main website, tracking the growth of a newly developed mutated soybean. Volunteers would input daily growth data, helping to gather reach and progress information throughout the seed's development.",
			logo: vib,
			techStack: [
				"reactjs",
				"js",
				"vitejs",
				"less",
				"antd",
				"azure",
				"docker",
				"datadog",
				"jira",
				"bitbucket",
			],
			linkText: "VIB",
			// link: "https://vib.be/",
		},
		{
			title: "Onstro - Workplace",
			description:
				"Led core development efforts for Onstro, an enterprise agility SaaS platform for project management. Designed and implemented a booking module, enabling real-time booking data management in a React-based web application and a React Native TV app functioning as a kiosk.",
			logo: onstro,
			techStack: [
				"reactjs",
				"nextjs",
				"js",
				"typescript",
				"redux",
				"webpack",
				"vitejs",
				"less",
				"antd",
				"jest",
			],
			linkText: "Workplace by Onstro",
			link: "https://workplace.onstro.com/",
		},

		{
			title: "Netzsch CRM - Netzsch, Germany",
			description:
				"Developed a CRM web application to facilitate spare parts management, pump sales, and sales personnel operations. Enhanced sales acceleration, organized contacts, and streamlined the lead management process.",
			logo: netzsch,
			techStack: [
				"reactjs",
				"codeigniter",
				"php",
				"js",
				"css3",
				"bootstrap4",
				"mysql",
				"aws",
			],
			linkText: "Netzsch Group",
			link: "https://www.netzsch.com/en",
		},
		{
			title: "Mechgiri Car Service and Parts, India",
			description:
				"Developed and delivered a client-facing website and a customized CMS for a spare parts provider. Implemented an inventory management system, streamlining spare parts cataloguing and reducing manual errors. Optimized operational workflows and reduced content management errors by 30%, ensuring smoother service delivery.",
			logo: mechgiri,
			techStack: [
				"reactjs",
				"typescript",
				"chakraui",
				"nodejs",
				"mysql",
				"aws",
			],
			linkText: "View Project",
			// link: "https://github.com",
		},
		{
			title: "Guardian Angel Institute of Hotel Management and Catering Technology - GAIHM, India",
			description:
				"Designed and developed a comprehensive web panel with features such as role-based access control, online leave applications, academic fee payments via Razorpay, sharing of learning materials, attendance notifications, and management modules for students, staff, and alumni.",
			logo: gaihct,
			techStack: [
				"codeigniter",
				"jquery",
				"php",
				"js",
				"css3",
				"bootstrap4",
				"mysql",
				"aws",
			],
			linkText: "GAIHM Website",
			link: "https://gaihm.edu.in/",
		},
		{
			title: "Effective Architectural Services Portal, India",
			description:
				"Designed and developed a dynamic web portal for architectural services, leveraging third-party libraries like Chart.js and Syncfusion to create interactive charts and graphs. This enhanced project visualization, streamlined timeline tracking, and improved client engagement by providing intuitive data representation and real-time insights.",
			logo: eas,
			techStack: ["php", "js", "css3", "bootstrap4", "mysql", "aws"],
			linkText: "GAIHM Website",
			link: "http://effectivearchitecturalservices.com/",
		},
		{
			title: "LiteBulb Entertainment, India",
			description:
				"Developed a comprehensive web platform for talent hiring and engagement, featuring a custom CMS for managing advertising data, opening audition positions, and facilitating user applications. The platform enables users to create profiles and apply for opportunities in modeling, dancing, acting, and advertising roles.",
			logo: litebulb,
			techStack: ["reactjs", "php", "js", "tailwindcss", "mysql", "aws"],
			linkText: "litebulb Website",
			link: "https://litebulb.in/",
		},
		{
			title: "Real Time flood-monitoring Tool",
			description:
				"Developed a website that allows users to search and view flood readings from the past 24 hours across multiple UK locations, presented in both graphical and tabular formats.",
			logo: FMA,
			techStack: ["reactjs", "js", "css3"],
			linkText: "FMT Website",
			link: "https://flood-monitoring-tool.vercel.app/",
		},
	],
};

export default INFO;
