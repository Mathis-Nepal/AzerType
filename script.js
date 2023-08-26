var listeDeMots = [
	"pomme",
	"orange",
	"banane",
	"fraise",
	"cerise",
	"kiwi",
	"ananas",
	"raisin",
	"poire",
	"abricot",
	"mangue",
	"peche",
	"pasteque",
	"citron",
	"framboise",
	"avocat",
	"cassis",
	"datte",
	"figue",
	"grenade",
	"guoyave",
	"groseille",
	"mandarine",
	"noisette",
	"noix",
	"pamplemousse",
	"pastèque",
	"prune",
	"citron vert",
	"canneberge",
	"myrtille",
	"papaye",
	"melon",
	"mûre",
	"kaki",
	"mirabelle",
	"nectarine",
	"anis",
	"abricot",
	"artichaut",
	"aubergine",
	"avocat",
	"betterave",
	"brocoli",
	"carotte",
	"céleri",
	"champignon",
	"chou",
	"concombre",
	"courge",
	"courgette",
	"épinard",
	"fenouil",
	"haricot",
	"laitue",
	"maïs",
	"navet",
	"oignon",
	"panais",
	"patate douce",
	"piment",
	"poireau",
	"pois",
	"pomme de terre",
	"radis",
	"tomate",
	"topinambour",
	"fraise",
	"framboise",
	"mûre",
	"myrtille",
	"cerise",
	"abricot",
	"pêche",
	"ananas",
	"mangue",
	"kiwi",
];

let ContainerGenerateWord = document.querySelector(".container-word p");
let Input = document.querySelector(".enter-word .input");
const ButtonValidate = document.querySelector(".enter-word .button");
let viewScoreSpan = document.querySelector(".score");
const viewErorsSpan = document.querySelector(".error");
const viewNumberErorsSpan = document.querySelector(".error-number");
let score = 0;
let NumberErors = 0;

function uPdateScore() {
	viewScoreSpan.textContent = score.toString();
}

function uPdateErors() {
	viewNumberErorsSpan.textContent = NumberErors.toString();
}

function generateWord() {
	let generateWord = listeDeMots[Math.floor(Math.random() * listeDeMots.length)];
	ContainerGenerateWord.textContent = generateWord;
	Input.placeholder = generateWord;
}

function incrementScore() {
	score++;
	uPdateScore();
}

function incrementErors() {
	NumberErors++;
	uPdateErors();
}

function testValue() {
	if (Input.value.toLowerCase() === ContainerGenerateWord.textContent.toLowerCase()) {
		Input.focus();
		incrementScore();
		generateWord();
		Input.value = "";
	} else {
		Input.focus();
		incrementErors();
	}
}

ButtonValidate.addEventListener("click", testValue);

Input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		testValue();
		e.preventDefault();
	}
});
generateWord();
Input.focus();
uPdateScore();
uPdateErors();
