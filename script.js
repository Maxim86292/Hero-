let alive = true;
let key = false;
let shield = false;
let potion = false;
let treasure = false;

let heroName = prompt(`Привіт герою, як тебе звати?`);
alert(`${heroName}, 23:47 в Код-Сіті згасли всі екрани. Вірус «Глюк» зашифрував головний сервер.`);

let heroClass = prompt(`${heroName}, вибери клас: воїн, маг або хакер`).toLowerCase();

if (heroClass === 'воїн') {
potion = true;
alert(`${heroName}, ти обрав клас воїна. У тебе є зілля життя.`);
} else if (heroClass === 'маг') {
shield = true;
alert(`${heroName}, ти обрав клас мага. У тебе є щит-фаєрвол.`);
} else if (heroClass === 'хакер') {
alert(`${heroName}, ти обрав клас хакера. Твоя зброя — розум.`);
} else {
alert(`${heroName}, такого класу немає. Ти залишився без предметів.`);
}

let direction = prompt(`${heroName}, вибери напрямок: ліворуч, прямо або праворуч`).toLowerCase();

if (direction === 'ліворуч') {
alert(`${heroName}, ти пішов ліворуч у темний ліс.`);

let action = prompt(`${heroName}, що робиш? бій, втеча або переговори`).toLowerCase();

if (action === 'бій') {
if (heroClass === 'воїн') {
treasure = true;
alert(`${heroName}, воїн переміг монстра і забрав його скарб.`);
} else if (shield === true) {
shield = false;
alert(`${heroName}, щит захистив тебе, але зламався.`);
} else {
alive = false;
alert(`${heroName}, монстр сильніший за тебе. Ти загинув.`);
}
} else if (action === 'втеча') {
if (shield === true) {
shield = false;
alert(`${heroName}, ти втік, але щит зруйнувався.`);
} else if (potion === true) {
potion = false;
alert(`${heroName}, ти втік пораненим і випив зілля.`);
} else {
alive = false;
alert(`${heroName}, втеча не вдалася. Монстр наздогнав тебе.`);
}
} else if (action === 'переговори') {
if (heroClass === 'хакер') {
treasure = true;
alert(`${heroName}, ти зламав монстра і отримав скарб.`);
} else if (heroClass === 'воїн') {
alert(`${heroName}, монстр сміється і проганяє тебе.`);
} else {
alert(`${heroName}, монстр пропускає тебе далі.`);
}
} else {
alert(`${heroName}, ти розгубився, і монстр забрав твій скарб.`);
treasure = false;
}
} else if (direction === 'прямо') {
alert(`${heroName}, прямо на дорозі стоїть пастка.`);

let coin = prompt(`${heroName}, кинь монетку. Орел або решка?`).toLowerCase();

if (coin === 'орел') {
if (shield === true) {
shield = false;
alert(`${heroName}, щит прийняв удар, але зламався.`);
} else if (potion === true) {
potion = false;
alert(`${heroName}, зілля врятувало тебе.`);
} else {
alive = false;
alert(`${heroName}, пастка спрацювала. Ти загинув.`);
}
} else if (coin === 'решка') {
treasure = true;
alert(`${heroName}, ти знайшов прихований скарб.`);
} else {
alert(`${heroName}, монета котиться і ти нічого не здобув.`);
}
} else if (direction === 'праворуч') {
alert(`${heroName}, ти пішов праворуч на гірську стежку.`);

if (potion === true) {
potion = false;
alert(`${heroName}, провідник забрав у тебе зілля, але провів безпечно.`);
} else {
alert(`${heroName}, провідник веде тебе безкоштовно.`);
}
} else {
alert(`${heroName}, такого шляху немає. Ти залишився на місці.`);
}

let chest = prompt(`${heroName}, під руїнами стоять три скрині: золота, срібна або дерев’яна. Яку відкриваєш?`).toLowerCase();

if (chest === 'золота') {
if (heroClass === 'хакер') {
treasure = true;
alert(`${heroName}, хакер знешкодив міну і забрав скарб.`);
} else {
let coin = prompt(`${heroName}, кинь монетку. Орел або решка?`).toLowerCase();

if (coin === 'орел') {
treasure = true;
alert(`${heroName}, мина не спрацювала. Ти забираєш скарб.`);
} else if (coin === 'решка') {
if (shield === true) {
shield = false;
alert(`${heroName}, вибух вдарив по щиту, але ти живий.`);
} else {
alive = false;
alert(`${heroName}, вибух підірвав тебе. Ти загинув.`);
}
} else {
alert(`${heroName}, монета котиться і нічого не міняється.`);
}
}
} else if (chest === 'срібна') {
key = true;
alert(`${heroName}, у срібній скрині лежить Ключ Доступу.`);
} else if (chest === 'дерев’яна') {
potion = true;
alert(`${heroName}, в дерев’яній скрині були їжа і вода. Ти отримав зілля.`);
} else {
alert(`${heroName}, ти не наважився відкрити жодну скриню.`);
}

let answer = 'клавіатура';
let firstTry = prompt(`${heroName}, сейф питає: Що має багато клавіш, але не відкриває дверей?`).toLowerCase();

if (firstTry === answer) {
shield = true;
alert(`${heroName}, правильно! Сейф відкрився, і в ньому лежить щит.`);
} else {
let secondTry = prompt(`${heroName}, не вгадав. Спробуй ще раз: Що має багато клавіш, але не відкриває дверей?`).toLowerCase();

if (secondTry === answer) {
shield = true;
alert(`${heroName}, правильно! Сейф відкрився.`);
} else {
let thirdTry = prompt(`${heroName}, остання спроба: Що має багато клавіш, але не відкриває дверей?`).toLowerCase();

if (thirdTry === answer) {
shield = true;
alert(`${heroName}, правильно! Сейф відкрився.`);
} else {
key = false;
alert(`${heroName}, сигналізація спрацювала. Ключ заблоковано.`);
}
}
}

let exitColor = prompt(`${heroName}, в лабіринті три виходи: червоний, зелений або синій. Який обираєш?`).toLowerCase();

if (exitColor === 'червоний') {
if (shield === true) {
shield = false;
alert(`${heroName}, щит поглинув удар, але зламався.`);
} else if (potion === true) {
potion = false;
alert(`${heroName}, зілля врятувало тебе в останню мить.`);
} else {
alive = false;
alert(`${heroName}, червоний вихід виявився смертельним.`);
}
} else if (exitColor === 'зелений') {
alert(`${heroName}, зелений вихід був довгим, але безпечним.`);
} else if (exitColor === 'синій') {
let coin = prompt(`${heroName}, кинь монетку: орел або решка?`).toLowerCase();

if (coin === 'орел') {
treasure = true;
alert(`${heroName}, таємний коридор відкрився. Ти знайшов скарб.`);
} else if (coin === 'решка') {
treasure = false;
alert(`${heroName}, глухий кут. Ти загубив скарб.`);
} else {
alert(`${heroName}, монета котиться в темряві. Нічого не змінюється.`);
}
} else {
alert(`${heroName}, ти заблукав, але живий.`);
}

let inventory = '';

if (key === true) {
if (inventory !== '') {
inventory = inventory + ', ';
}
inventory = inventory + 'ключ';
}

if (shield === true) {
if (inventory !== '') {
inventory = inventory + ', ';
}
inventory = inventory + 'щит';
}

if (potion === true) {
if (inventory !== '') {
inventory = inventory + ', ';
}
inventory = inventory + 'зілля';
}

if (treasure === true) {
if (inventory !== '') {
inventory = inventory + ', ';
}
inventory = inventory + 'скарб';
}

if (inventory !== '') {
alert(`${heroName}, у тебе залишилося: ${inventory}.`);
} else {
alert(`${heroName}, у тебе нічого не залишилося.`);
}

if (alive === false) {
alert(`${heroName}, фінал: Ціною життя.`);
} else if (key === true && treasure === true) {
alert(`${heroName}, фінал: Легенда міста.`);
} else if (key === true) {
alert(`${heroName}, фінал: Рятівник.`);
} else if (treasure === true) {
alert(`${heroName}, фінал: Багатий утікач.`);
} else {
alert(`${heroName}, фінал: Темне місто.`);
}

alert(`Гра закінчена, ${heroName}.`);