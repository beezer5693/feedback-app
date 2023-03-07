import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor
	};

	return (
		<header style={headerStyles}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
}

// Specifies default value of each prop if non are passed in
Header.defaultProps = {
	text: 'Feedback UI',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95'
};

// Checks to make sure the props are a specific data type
// if not, throws error in console
Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string
};

export default Header;
