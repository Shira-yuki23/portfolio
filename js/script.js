const nav = document.querySelector('.site-nav');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

const updateNavigation = () => nav.classList.toggle('scrolled', window.scrollY > 18);
updateNavigation();
window.addEventListener('scroll', updateNavigation, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach((section) => revealObserver.observe(section));
document.getElementById('year').textContent = new Date().getFullYear();

const chatbot = document.querySelector('.chatbot');
const chatTriggers = document.querySelectorAll('.chat-trigger');
const closeChat = document.querySelector('.chat-close');
const chatMessages = document.querySelector('.chat-messages');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('#chat-input');
const quickPrompts = document.querySelectorAll('.quick-prompts button');

const openChat = () => {
  chatbot.classList.add('open');
  chatbot.setAttribute('aria-hidden', 'false');
  window.setTimeout(() => chatInput.focus(), 100);
};
const hideChat = () => {
  chatbot.classList.remove('open');
  chatbot.setAttribute('aria-hidden', 'true');
};
chatTriggers.forEach((trigger) => trigger.addEventListener('click', openChat));
closeChat.addEventListener('click', hideChat);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && chatbot.classList.contains('open')) hideChat();
});

const responses = [
  { match: /skill|tool|java|c\+\+|web|html|css|javascript|program/i, text: 'Fariha works with Java (including JavaFX and JDBC), C++, and front-end web tools: HTML, CSS, and JavaScript. Her everyday toolkit also includes Git, GitHub, VS Code, and MySQL.' },
  { match: /melofocus|timer|productivity|study/i, text: 'MeloFocus is a gamified productivity timer that makes study sessions more enjoyable. There’s a JavaFX version and a web version—both are linked in the Projects section.' },
  { match: /theme|chrome|cinnamoroll|kurumi|hello kitty/i, text: 'Fariha has published six pastel Chrome themes, from Cinnamoroll Baby Blue to Kawaii Lavender Dream. You can browse them in the Themes section and open each one in the Chrome Web Store.' },
  { match: /project|work|portfolio|made|build/i, text: 'Her work includes a Chrome theme collection, MeloFocus, this portfolio, a C++ game engine, a Candidate Key Finder, and a cache simulation. The Projects section has the highlights and links.' },
  { match: /contact|email|hire|linkedin|github|connect/i, text: 'The easiest way to reach Fariha is by email at farihamusfirat@gmail.com. Her GitHub and LinkedIn are also linked in the Contact section.' },
  { match: /about|who|fariha|shifa/i, text: 'Fariha Musfirat Shifa is a Computer Science undergraduate who enjoys thoughtful software, creative coding, browser customization, UI design, and turning ideas into real applications.' }
];

function answerFor(question) {
  const found = responses.find(({ match }) => match.test(question));
  return found ? found.text : 'I can help with Fariha’s skills, projects, Chrome themes, or contact details. Try asking about MeloFocus or how to get in touch!';
}

function addMessage(text, type) {
  const message = document.createElement('div');
  message.className = `message ${type}-message`;
  if (type === 'assistant') {
    const avatar = document.createElement('span');
    avatar.className = 'message-avatar';
    avatar.textContent = '✿';
    message.appendChild(avatar);
  }
  const bubble = document.createElement('div');
  const copy = document.createElement('p');
  copy.textContent = text;
  bubble.appendChild(copy);
  message.appendChild(bubble);
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

function sendMessage(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  addMessage(cleanQuestion, 'user');
  chatInput.value = '';
  const typing = addMessage('Growing an answer…', 'typing');
  window.setTimeout(() => {
    typing.remove();
    addMessage(answerFor(cleanQuestion), 'assistant');
  }, 480);
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage(chatInput.value);
});
quickPrompts.forEach((button) => button.addEventListener('click', () => sendMessage(button.textContent)));

const cornerPet = document.querySelector('.corner-pet');
const cornerPetStatus = document.querySelector('.corner-pet-status');
cornerPetStatus.textContent = 'hi!';
cornerPet.addEventListener('click', () => {
  cornerPet.dataset.state = 'idle';
  cornerPetStatus.textContent = 'hi!';
});
