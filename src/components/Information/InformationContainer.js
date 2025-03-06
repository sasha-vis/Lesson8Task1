import { InformationLayout } from './InformationLayout';
import { store } from './../../store';
import { useEffect, useState } from 'react';

export const InformationContainer = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	return (
		<InformationLayout status={state.status} currentPlayer={state.currentPlayer} />
	);
};
