import { CellContainer } from './../Cell/CellContainer';
import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, winIndex }) => {
	return (
		<div className={styles.field}>
			{field.map((item, index) => (
				<CellContainer key={index} item={item} index={index} />
			))}
			{winIndex && (
				<div className={`${styles.line} ${styles[`line-${winIndex}`]}`} />
			)}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	winIndex: PropTypes.number,
};
