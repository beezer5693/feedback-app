import { v4 as uuidv4 } from 'uuid';

const FeedbackData = [
	{
		id: uuidv4(),
		rating: 10,
		text: 'This is Item 1'
	},
	{
		id: uuidv4(),
		rating: 4,
		text: 'This is Item 2'
	},
	{
		id: uuidv4(),
		rating: 7,
		text: 'This is Item 3'
	}
];

export default FeedbackData;
