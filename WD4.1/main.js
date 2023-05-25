const names = ['Иван', 'Нина', 'Наталья', 'Петр', 'Андрей', 'Анастасия', 'Дмитрий',  'Евгения', 'Константин',  'Алевтина']
const numbers = [11, 23, 2, -3];

document.querySelectorAll('.badName').forEach((n, i) => n.textContent = names[i] + " " + i)

const goodNames = names.sort()

document.querySelectorAll('.goodName').forEach((n, i) => n.textContent = goodNames[i] + " " + i)


document.querySelectorAll('.bad__ul').forEach((n, i) => n.textContent = numbers[i])

const goodnumbers = numbers.sort()

document.querySelectorAll('.good__ul').forEach((n, i) => n.textContent = goodnumbers[i])