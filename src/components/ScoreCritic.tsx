import { Badge } from '@chakra-ui/react';

interface Props {
	score: number;
}

const ScoreCritic = ({ score }: Props) => {
	const color = score > 75 ? 'green' : score < 60 ? 'yellow' : 'red';

	return (
		<Badge colorScheme={color} paddingX={2} borderRadius='4px' fontSize='14px'>
			{score}
		</Badge>
	);
};

export default ScoreCritic;
