import styles from './button.module.css';
import PropTypes from 'prop-types';

export const ButtonLayout = ({ clearHandler }) => {
	return (
		<button className={styles.button} onClick={clearHandler}>
			Начать заново
		</button>
	);
};

ButtonLayout.propTypes = {
	clearHandler: PropTypes.func.isRequired,
};
