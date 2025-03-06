import { CellLayout } from './CellLayout';
import PropTypes from 'prop-types';
import { store } from './../../store';
import { getWinIndex } from './../../Utils';
import { useEffect, useState } from 'react';

export const CellContainer = ({ item, index }) => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const clickHandler = () => {
		if (state.field[index] || state.status !== 0) return;

		const newField = [...state.field];
		newField[index] = state.currentPlayer;
		store.dispatch({ type: 'SET_FIELD', payload: newField });

		const winIndex = getWinIndex(newField);
		if (winIndex !== null) {
			store.dispatch({ type: 'SET_WIN_INDEX', payload: winIndex });
			return;
		}
		if (!newField.includes('')) {
			store.dispatch({ type: 'SET_DRAW' });
			return;
		}
		store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: state.currentPlayer === 'X' ? 'O' : 'X',
		});
	};

	return <CellLayout clickHandler={clickHandler} item={item} status={state.status} />;
};

CellContainer.propTypes = {
	item: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};
