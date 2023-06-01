import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
	heading: GameQuery;
}
const GameHeading = ({ heading }: Props) => {
	return (
		<Heading
			as='h1'
			fontSize='4xl'
			fontWeight='bold'
			textTransform='capitalize'
			marginBottom={5}>
			{`${heading.genre?.name || ''}  ${heading.platform?.name || ''} Games`}
		</Heading>
	);
};

export default GameHeading;
