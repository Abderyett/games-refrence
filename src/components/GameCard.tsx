import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
import { Games } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import ScoreCritic from './ScoreCritic';
import getCroppedImage from './imageUrl';

export interface Platform {
	id: number;
	name: string;
}
interface Props {
	game: Games;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImage(game.background_image)} />
			<CardBody>
				<HStack justifyContent='space-between' marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<ScoreCritic score={game.metacritic} />
				</HStack>
				<Heading fontSize='2xl'>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
