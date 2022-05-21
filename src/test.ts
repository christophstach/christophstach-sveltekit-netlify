import 'text';

interface Question {
	text: string;
	answers: Answer[];
}

interface Answer {
	text: string;
	subQuestions?: Question[];
}

const questions: Question[] = [
	{
		text: 'Wie alt bist du?',
		answers: [
			{
				text: '10 Jahre',
				subQuestions: [
					{
						text: 'Willst du einen Bausparvertrag',
						answers: [
							{
								text: 'Ja'
							},
							{
								text: 'Nein'
							}
						]
					}
				]
			}
		]
	},
	{
		text: 'Wo wohnst du?',
		answers: [
			{
				text: 'Berlin'
			}
		]
	}
];
