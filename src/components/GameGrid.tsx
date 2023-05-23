import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import { GameGridSkeleton } from './GameGridSkeleton';

const GameGrid = () => {
	const { error, games, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing={10}
				padding='10px'
				marginRight='50px'>
				{isLoading &&
					skeletons.map((skeleton) => <GameGridSkeleton key={skeleton} />)}
				{games.map((game) => {
					return <GameCard key={game.id} game={game} />;
				})}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
