import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);
	// Calculate avg ratings
	const average = feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;

	return (
		<div className='feedback-stats'>
			<h4>
				{feedback.length} {feedback.length === 1 ? 'Review' : 'Reviews'}
			</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
		</div>
	);
}

export default FeedbackStats;
