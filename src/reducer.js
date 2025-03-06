const initialState = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	status: 0,
	winIndex: null,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload };
		case 'SET_FIELD':
			return { ...state, field: [...payload] };
		case 'SET_WIN_INDEX':
			return { ...state, winIndex: payload, status: 1 };
		case 'SET_DRAW':
			return { ...state, status: 2 };
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
