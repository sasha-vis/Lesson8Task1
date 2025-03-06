import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ status, currentPlayer }) => {
	return (
		<div
			className={`${styles.info} ${status === 2 ? styles.drawColor : status === 1 ? styles.winColor : ''}`.trim()}
		>
			{status === 2
				? 'Ничья'
				: status === 1
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</div>
	);
};

InformationLayout.propTypes = {
	status: PropTypes.number.isRequired,
	currentPlayer: PropTypes.string.isRequired,
};
