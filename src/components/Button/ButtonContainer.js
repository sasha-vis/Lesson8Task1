import React from 'react';
import { ButtonLayout } from './ButtonLayout';
import { store } from './../../store';

export const ButtonContainer = () => {
	const clearHandler = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return <ButtonLayout clearHandler={clearHandler} />;
};
