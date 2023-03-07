import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

function Feedbackitem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button onClick={() => deleteFeedback(item.id)} className='close'>
				<FaTimes color='purple' />
			</button>
			<button onClick={() => editFeedback(item)} className='edit'>
				<FaEdit color='purple' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	);
}

// Checks to make sure the props are a specific data type
// if not, throws error in console
Feedbackitem.propTypes = {
	item: PropTypes.object.isRequired
};

export default Feedbackitem;
