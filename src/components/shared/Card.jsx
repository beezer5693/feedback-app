import PropTypes from 'prop-types';

function Card({ children, reverse }) {
	return (
		<div
			className='card'
			style={{ backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse ? '#fff' : '#000' }}
		>
			{children}
		</div>
	);
}

// Specifies default value of each prop if non are passed in
Card.defaultProps = {
	reverse: false
};

// Checks to make sure the props are a specific data type
// if not, throws error in console
Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool
};

export default Card;
