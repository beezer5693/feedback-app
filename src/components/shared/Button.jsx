import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

// Specifies default value of each prop if non are passed in
Button.defaultProps = {
	version: 'primary',
	type: 'button',
	isDisabled: false
};

// Checks to make sure the props are a specific data type
// if not, throws error in console
Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool
};

export default Button;
