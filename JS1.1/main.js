// 1.Попросите пользователя ввести любое число и сохраните его в переменную.
let number = prompt("Введите число:");

// 2.Создайте калькулятор, который будет выполнять все арифметические операции над любыми введенными пользователем двумя числами.
let num1 = prompt("Ведите первое число:");
let num2 = prompt("Ведите второе число:");

let addition = Number(num1) + Number(num2);
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

console.log(addition, subtraction, multiplication, division, modulus)

// 3.Необходимо попросить  пользователя задумать число. Затем он должен  умножить это число  на 2 и прибавить к полученному результату 7. То, что вышло в итоге, нужно ввести в диалоговом окне prompt(). Вы должны выдать пользователю, какое число он задумал.
let num = prompt("задумать число,  Затем он должен  умножить это число  на 2 и прибавить к полученному результату 7. Введите ваш результат:");

let originalNumber = (num - 7) / 2;
alert(`Ваше число: ${originalNumber}.`);

// 4.С помощью метода prompt() получите сначала имя пользователя, затем год его рождения и сохраните в 2 переменные. Вычислите возраст пользователя, и выведите его в абзаце с помощью document.write() в таком формате "Антон: 24".
let username = prompt("Введите имя пользователя:");
let yearOfBirth = prompt("Введите свой год рождения:");

let age = new Date().getFullYear() - yearOfBirth;
document.write(`${username}: ${age}`);

// 5.Сохраните калькулятор и отправьте на GitHub в репозиторий Student, используя формат в названии Фамилия(латинскими буквами)_1.
// git add .
// git commit -m "LastName_1.js"
// git push
