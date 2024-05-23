// ! Onclick Audio
const art = new Audio();
art.src = "/assets/audio vocabulary english/art.mp3";

const bird = new Audio();
bird.src = "/assets/audio vocabulary english/bird.mp3";

const computer = new Audio();
computer.src = "/assets/audio vocabulary english/computer.mp3";

const control = new Audio();
control.src = "/assets/audio vocabulary english/control.mp3";

const data = new Audio();
data.src = "/assets/audio vocabulary english/data.mp3";

const family = new Audio();
family.src = "/assets/audio vocabulary english/family.mp3";

const food = new Audio();
food.src = "/assets/audio vocabulary english/food.mp3";

const government = new Audio();
government.src = "/assets/audio vocabulary english/government.mp3";

const health = new Audio();
health.src = "/assets/audio vocabulary english/health.mp3";

const information = new Audio();
information.src = "/assets/audio vocabulary english/information.mp3";

const knowledge = new Audio();
knowledge.src = "/assets/audio vocabulary english/knowledge.mp3";

const law = new Audio();
law.src = "/assets/audio vocabulary english/law.mp3";

const map = new Audio();
map.src = "/assets/audio vocabulary english/map.mp3";

const meat = new Audio();
meat.src = "/assets/audio vocabulary english/meat.mp3";

const method = new Audio();
method.src = "/assets/audio vocabulary english/method.mp3";

const music = new Audio();
music.src = "/assets/audio vocabulary english/music.mp3";

const person = new Audio();
person.src = "/assets/audio vocabulary english/person.mp3";

const problem = new Audio();
problem.src = "/assets/audio vocabulary english/problem.mp3";

const reading = new Audio();
reading.src = "/assets/audio vocabulary english/reading.mp3";

const software = new Audio();
software.src = "/assets/audio vocabulary english/software.mp3";

const system = new Audio();
system.src = "/assets/audio vocabulary english/system.mp3";

const thanks = new Audio();
thanks.src = "/assets/audio vocabulary english/thanks.mp3";

const theony = new Audio();
theony.src = "/assets/audio vocabulary english/theony.mp3";

const understanding = new Audio();
understanding.src = "/assets/audio vocabulary english/understanding.mp3";

const way = new Audio();
way.src = "/assets/audio vocabulary english/way.mp3";

const world = new Audio();
world.src = "/assets/audio vocabulary english/world.mp3";

const year = new Audio();
year.src = "/assets/audio vocabulary english/year.mp3";

// ! Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
