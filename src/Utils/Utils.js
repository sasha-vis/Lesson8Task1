const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const getWinIndex = (newField) => {
	for (let index = 0; index < WIN_PATTERNS.length; index++) {
		const [a, b, c] = WIN_PATTERNS[index];
		if (newField[a] && newField[a] === newField[b] && newField[a] === newField[c]) {
			return index;
		}
	}
	return null;
};
