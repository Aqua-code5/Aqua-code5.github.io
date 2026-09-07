const portfolioData = {
	projects: [
		{ category: 'Product design / 2026', title: 'Orbit Finance', description: 'A calmer way to understand and manage your money.', link: '#' },
		{ category: 'Branding / 2025', title: 'Northstar', description: 'A new identity for a studio building for tomorrow.', link: '#' },
		{ category: 'Web design / 2025', title: 'Form & Function', description: 'An editorial space for ideas, objects, and process.', link: '#' },
		{ category: 'Development / 2024', title: 'Tidepool', description: 'A tiny toolkit for making the web feel more human.', link: '#' }
	],
	experience: [
		{ role: 'Independent creative developer', company: 'Freelance / Remote', period: '2023 - Present', detail: 'Building digital products and identities with founders, studios, and teams.' },
		{ role: 'Digital designer', company: 'Studio Common', period: '2021 - 2023', detail: 'Led interface and brand work across culture, technology, and retail.' },
		{ role: 'Design intern', company: 'Good Works Co.', period: '2020 - 2021', detail: 'Learned the craft by helping turn early ideas into useful experiences.' }
	],
	workplaces: [
		{ name: 'Studio Common', type: 'Design studio', period: '2021 - 2023' },
		{ name: 'Good Works Co.', type: 'Creative technology', period: '2020 - 2021' },
		{ name: 'Openfield', type: 'Independent practice', period: '2019 - 2020' }
	]
};

const projectGrid = document.querySelector('#projects-grid');
const experienceList = document.querySelector('#experience-list');
const workplaceList = document.querySelector('#workplace-list');

portfolioData.projects.forEach((project) => {
	projectGrid.insertAdjacentHTML('beforeend', `
		<article class="project-card">
			<div>
				<div class="project-meta"><span>${project.category}</span><span>↗</span></div>
				<h3>${project.title}</h3>
				<p>${project.description}</p>
			</div>
			<a class="card-arrow" href="${project.link}" aria-label="View ${project.title}">↗</a>
		</article>
	`);
});

portfolioData.experience.forEach((job) => {
	experienceList.insertAdjacentHTML('beforeend', `
		<article class="experience-row">
			<div><h3>${job.role}</h3><p>${job.company}</p></div>
			<p>${job.detail}</p>
			<div class="experience-meta"><span>${job.period}</span></div>
		</article>
	`);
});

portfolioData.workplaces.forEach((workplace) => {
	workplaceList.insertAdjacentHTML('beforeend', `
		<article class="workplace-row">
			<h3>${workplace.name}</h3>
			<div class="workplace-meta"><span>${workplace.type}</span><span>${workplace.period}</span></div>
		</article>
	`);
});
