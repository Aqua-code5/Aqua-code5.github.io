const portfolioData = {
	projects: [
		{ category: 'RedM development / 2023-2026', title: 'RedM Resources', description: 'Custom resources and server systems built for smoother, more immersive roleplay experiences.', link: 'redm-ashfall-resources.html' },
		{ category: 'Roblox development / Ongoing', title: 'Roblox Projects', description: 'Gameplay systems, interfaces, and interactive features built for engaging Roblox experiences.', link: 'roblox-gameplay-systems.html' },
		{ category: 'Python tools / Coming soon', title: 'Python Tools', description: 'Practical tools and automation projects are currently in development.', link: 'python-tools.html' }
	],
	experience: [
		{ role: 'RedM developer', company: 'Custom resources and server systems', period: '2023 - 2026', detail: 'Building scripts and systems that support roleplay communities and server owners.' },
		{ role: 'Roblox developer', company: 'Interactive experiences', period: 'Current', detail: 'Working on gameplay features, interface systems, and player-focused improvements.' }
	],
	workplaces: [
		{ name: 'Ashfall RP', type: 'RedM server development', period: 'JAN 2026 - AUG 2026' },
		{ name: 'Roblox projects', type: 'Game development', period: 'Current' }
	]
};

const projectGrid = document.querySelector('#projects-grid');
const experienceList = document.querySelector('#experience-list');
const workplaceList = document.querySelector('#workplace-list');
const copyDiscordButton = document.querySelector('#copy-discord');
const discordLabel = document.querySelector('#discord-label');

const canvas = document.querySelector('#space-canvas');
const context = canvas.getContext('2d');
const stars = [];

function resizeSpace() {
	const scale = window.devicePixelRatio || 1;
	canvas.width = window.innerWidth * scale;
	canvas.height = window.innerHeight * scale;
	context.setTransform(scale, 0, 0, scale, 0, 0);
}

function createStars() {
	const count = Math.min(180, Math.floor((window.innerWidth * window.innerHeight) / 8500));
	stars.length = 0;
	for (let index = 0; index < count; index += 1) {
		stars.push({
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			radius: Math.random() * 1.4 + 0.2,
			alpha: Math.random() * 0.7 + 0.2,
			twinkle: Math.random() * 0.02 + 0.005
		});
	}
}

function drawSpace() {
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	stars.forEach((star) => {
		star.alpha += star.twinkle;
		if (star.alpha > 0.95 || star.alpha < 0.2) star.twinkle *= -1;
		context.beginPath();
		context.fillStyle = `rgba(173, 203, 255, ${star.alpha})`;
		context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
		context.fill();
	});
	requestAnimationFrame(drawSpace);
}

resizeSpace();
createStars();
drawSpace();
window.addEventListener('resize', () => {
	resizeSpace();
	createStars();
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => {
	const current = sections.reduce((activeSection, section) => {
		return window.scrollY + 180 >= section.offsetTop ? section.id : activeSection;
	}, 'top');
	navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
});

if (copyDiscordButton) {
	copyDiscordButton.addEventListener('click', async () => {
		try {
			await navigator.clipboard.writeText('aqua_gaming.');
			discordLabel.textContent = 'Copied: aqua_gaming.';
			setTimeout(() => {
				discordLabel.textContent = 'Copy Discord: aqua_gaming.';
			}, 1800);
		} catch (error) {
			discordLabel.textContent = 'Username: aqua_gaming.';
		}
	});
}

portfolioData.projects.forEach((project) => {
	projectGrid.insertAdjacentHTML('beforeend', `
		<a class="project-card" href="${project.link}">
			<div>
				<div class="project-meta"><span>${project.category}</span><span>↗</span></div>
				<h3>${project.title}</h3>
				<p>${project.description}</p>
			</div>
			<span class="card-arrow" aria-hidden="true">↗</span>
		</a>
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
