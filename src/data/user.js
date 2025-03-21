import vib from "../assets/icons/project/vib-logo.png";
import onstro from "../assets/icons/project/onstro-logo.svg";
import goto from "../assets/icons/project/goto-icon.jpg";
import netzsch from "../assets/icons/project/netzsch-icon.jpg";
import mechgiri from "../assets/icons/project/mechgiri-icon.jpg";
import gaihct from "../assets/icons/project/gaihct-icon.jpg";
import eas from "../assets/icons/project/eas-icon.jpeg";
import litebulb from "../assets/icons/project/litebulb-icon.png";
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
		title: "I’m Tharindu N. I live in Sri Lanka, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "VIB projects - VIB, Belgium",
			description:
				"Led the development of multiple modules, including: Vib-Form: Enabled web publishers to create dynamic, embeddable forms for campaign management and result tracking via a dashboard. Vib-Home: A configurable micro-frontend showcasing research work, featuring advanced filters for displaying posts and news.Empowered web publishers to create posts using CKEditor, where I developed custom plugins for diagrams, attachments, and a new text viewer.",
			logo: vib,
			techStack: ["restAPI","typescript"],
			linkText: "VIB",
			link: "https://vib.be/",
		},

		{
			title: "Onstro - Workplace",
			description:
				"Led core development efforts for Onstro, an enterprise agility SaaS platform for project management. Designed and implemented a booking module, enabling real-time booking data management in a React-based web application and a React Native TV app functioning as a kiosk.",
			logo: onstro,
			linkText: "Workplace by Onstro",
			link: "https://workplace.onstro.com/",
		},

		{
			title: "GoTo Checkout Flow & Trial Forms - GoTo, USA",
			description:
				"Spearheaded the maintenance and migration of payment checkout forms to a unified, config-driven checkout system. Redesigned user trial forms as dynamic, embeddable micro-frontends, seamlessly integrated across multiple product marketing websites. Improved user interaction and conversion rates by leveraging modern frontend technologies.",
			logo: goto,
			linkText: "GoTo Meeting",
			link: "https://www.goto.com/meeting",
		},

		{
			title: "Netzsch CRM - Netzsch, Germany",
			description:
				"Developed a CRM web application to facilitate spare parts management, pump sales, and sales personnel operations. Enhanced sales acceleration, organized contacts, and streamlined the lead management process.",
			logo: netzsch,
			linkText: "Netzsch Group",
			link: "https://www.netzsch.com/en",
		},

		{
			title: "Mechgiri Car Service and Parts - MechGiri, India",
			description:
				"Developed and delivered a client-facing website and a customized CMS for a spare parts provider. Implemented an inventory management system, streamlining spare parts cataloguing and reducing manual errors. Optimized operational workflows and reduced content management errors by 30%, ensuring smoother service delivery.",
			logo: mechgiri,
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Guardian Angel Institute of Hotel Management and Catering Technology - GAIHM, India",
			description:
				"Designed and developed a comprehensive web panel and website with features such as role-based access control, online leave applications, academic fee payments via Razorpay, sharing of learning materials, attendance notifications, and management modules for students, staff, and alumni.",
			logo: gaihct,
			linkText: "GAIHM Website",
			link: "https://gaihm.edu.in/",
		},

		{
			title: "Effective Architectural Services Portal, India",
			description:
				"Designed and developed a dynamic web portal for architectural services, leveraging third-party libraries like Chart.js and Syncfusion to create interactive charts and graphs. This enhanced project visualization, streamlined timeline tracking, and improved client engagement by providing intuitive data representation and real-time insights.",
			logo: eas,
			linkText: "GAIHM Website",
			link: "http://effectivearchitecturalservices.com/",
		},


		{
			title: "LiteBulb Entertainment, India",
			description:
				"Developed a comprehensive web platform for talent hiring and engagement, featuring a custom CMS for managing advertising data, opening audition positions, and facilitating user applications. The platform enables users to create profiles and apply for opportunities in modeling, dancing, acting, and advertising roles.",
			logo: litebulb,
			linkText: "litebulb Website",
			link: "https://litebulb.in/",
		},
	],
};

export default INFO;
