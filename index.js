module.exports = {
	rules: {
		'type-enum': [2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'test',
				'chore',
				'revert'
			]
		],
		'type-case': [2,
			'always',
			'lowerCase'
		],
		'type-empty': [2,
			'never'
		],
		'type-max-length': [0,
			'always',
			'Infinity'
		],
		'type-min-length': [0,
			'always',
			0
		],
		'scope-enum': [0,
			'always',
			[]
		],
		'scope-case': [2,
			'always',
			'lowerCase'
		],
		'scope-empty': [0,
			'never'
		],
		'scope-max-length': [0,
			'always',
			'Infinity'
		],
		'scope-min-length': [0,
			'always',
			0],
		'subject-case': [0,
			'always',
			'lowerCase'
		],
		'subject-empty': [2,
			'never'
		],
		'subject-max-length': [0,
			'always',
			'Infinity'
		],
		'subject-min-length': [0,
			'always',
			0
		],
		'subject-full-stop': [2,
			'never',
			'.'
		],
		'body-case': [2,
			'always',
			'lowerCase'
		],
		'body-empty': [0,
			'never'
		],
		'body-leading-blank': [1,
			'always'
		],
		'body-max-length': [0,
			'always',
			'Infinity'
		],
		'body-min-length': [0,
			'always',
			0
		],
		'header-max-length': [2,
			'always',
			80
		],
		'header-min-length': [0,
			'always',
			0
		],
		'lang': [1,
			'always',
			'en'
		]
	},
	wildcards: {
		merge: [
			'/^(Merge pull request)|(Merge (.*?) into (.*?)$)/'
		],
		release: [
			'/^\\d.\\d.\\d$/'
		],
		revert: [
			'revert: (.*)'
		]
	}
};
