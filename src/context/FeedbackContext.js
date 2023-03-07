import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

	// Add feedback
	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	// Delete feedback
	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete this card?')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	// Set item to be updated.
	// Does not actually edit the item.
	// Editing the item is handled by the FeedbackForm
	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true
		});
	};

	// Update feedback item
	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map(item => (item.id === id ? { ...item, ...updItem } : item)));
	};

	return (
		<FeedbackContext.Provider
			value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
