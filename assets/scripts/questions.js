const questions = [
	{
		questionText: 'Как сражаешься?',
		answers: [
			{
				answerText: 'на диване',
				value: 0
			},
			{
				answerText: 'дальний бой',
				value: 1
			},
			{
				answerText: 'ближний бой',
				value: 2
			},
			{
				answerText: 'никак лол',
				value: 3
			}
		]
	},
	{
		questionText: 'Чем сражаешься?',
		answers: [
			{
				answerText: 'телефон',
				value: 0
			},
			{
				answerText: 'огнестрел',
				value: 1
			},
			{
				answerText: 'клинки',
				value: 2
			},
			{
				answerText: 'ничем лол',
				value: 3
			}
		]
	},
	{
		questionText: 'Какое у тя оружия?',
		answers: [
			{
				answerText: 'двуручное',
				value: 0
			},
			{
				answerText: 'одиночное',
				value: 1
			},
			{
				answerText: 'парное',
				value: 2
			},
			{
				answerText: 'никакое лол',
				value: 3
			}
		]
	},
	{
		questionText: 'Используешь магию?',
		answers: [
			{
				answerText: 'огненную',
				value: 0
			},
			{
				answerText: 'ледяную',
				value: 1
			},
			{
				answerText: 'пустотную',
				value: 2
			},
			{
				answerText: 'никакую лол',
				value: 3
			}
		]
	},
	{
		questionText: 'Какой у тя компаньён?',
		answers: [
			{
				answerText: 'адская гончая',
				value: 0
			},
			{
				answerText: 'плюшевый мишка',
				value: 1
			},
			{
				answerText: 'кошкодевочка',
				value: 2
			},
			{
				answerText: 'никакой лол',
				value: 3
			}
		]
	},
	{
		questionText: 'Твоя цель?',
		answers: [
			{
				answerText: 'прославиться',
				value: 0
			},
			{
				answerText: 'стать важной шишкой',
				value: 1
			},
			{
				answerText: 'выполнять контракты',
				value: 2
			},
			{
				answerText: 'никакая лол',
				value: 3
			}
		]
	},
]

// ---тест---
// какой у тебя класс в ММО?
// 1: как сражаешься?
// а) ближний бой
// б) дальний бой
// в) на диване
// г) никак лол

// 2: чем сражаешься?
// а) клинки
// б) магия
// в) телефон
// г) ничем лол

// ответы:
// а+а танцор клинка
// а+б маг мечник
// а+в ты вроде хакера, но что ты будешь взламывать в средневековом фэнтази?
// а+г поздравляю, ты пушечное мясо
// б+а кидать мечи - не лучший вариант
// б+б маг-арта
// б+в ты вроде хакера, но что ты будешь взламывать в средневековом фэнтази?
// б+г ладно, постой в сторонке
// в+а молодец, соблюдаешь соц дистанцию
// в+б кастуй заклинание из дома ачё
// в+в я
// в+г хотя бы с дивана встань
// г+а ладно
// г+б ладно
// г+в хватит играть в тел играть
// г+г никто лол