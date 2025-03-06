import styles from './cell.module.css';
import PropTypes from 'prop-types';

export const CellLayout = ({ clickHandler, item, status }) => {
	return (
		<button
			className={`${styles.cell} ${styles[item === 'X' ? 'red' : 'blue']} ${status !== 0 ? styles.disabled : ''}`.trim()}
			onClick={clickHandler}
		>
			{item}
		</button>
	);
};

CellLayout.propTypes = {
	status: PropTypes.number.isRequired,
	clickHandler: PropTypes.func.isRequired,
	item: PropTypes.string.isRequired,
};
