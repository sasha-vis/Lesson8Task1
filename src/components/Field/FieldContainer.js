import { FieldLayout } from './FieldLayout';
import { store } from './../../store';
import { useEffect, useState } from 'react';

export const FieldContainer = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	return <FieldLayout field={state.field} winIndex={state.winIndex} />;
};
