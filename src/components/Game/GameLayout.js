import { InformationContainer } from '../Information/InformationContainer';
import { FieldContainer } from '../Field/FieldContainer';
import { ButtonContainer } from '../Button/ButtonContainer';
import styles from './game.module.css';

export const GameLayout = () => {
	return (
		<div className={styles.game}>
			<h1 className={styles.title}>Крестики Нолики</h1>
			<InformationContainer />
			<FieldContainer />
			<ButtonContainer />
		</div>
	);
};
