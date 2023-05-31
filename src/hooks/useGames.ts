import { GameQuery } from '../App';
import { Platform } from '../components/GameCard';
import UseData from './useData';

export interface Games {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
	UseData<Games>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
			},
		},
		[gameQuery]
	);

export default useGames;
