import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
import { Games } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import ScoreCritic from './ScoreCritic';
import getCroppedImage from './imageUrl';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
interface Props {
	game: Games;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card width='300px' borderRadius={10} overflow='hidden'>
			<Image src={getCroppedImage(game.background_image)} />
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
				<HStack justifyContent='space-between'>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<ScoreCritic score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
