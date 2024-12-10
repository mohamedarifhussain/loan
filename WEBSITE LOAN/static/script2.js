
const aboutButton = document.getElementById('ABOUT');
const aboutSection = document.getElementById('about');

aboutButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const TechnologyButton = document.getElementById('TECHNOLOGY');
const TechnologySection = document.getElementById('technology');

TechnologyButton.addEventListener('click', () => {
  TechnologySection.scrollIntoView({ behavior: 'smooth' });
});



