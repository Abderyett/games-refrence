import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import { GameGridSkeleton } from './GameGridSkeleton';
import GameCardContainer from './GameCardContainer';

import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { error, data: games, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	return (
		<>
			{error && <Text>{error}</Text>}

			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={6}
				padding='10px'
				marginRight='20px'>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameGridSkeleton />
						</GameCardContainer>
					))}
				{games.map((game) => {
					return (
						<GameCardContainer key={game.id}>
							<GameCard game={game} />
						</GameCardContainer>
					);
				})}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
