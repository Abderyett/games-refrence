import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { Platform } from '../components/GameCard';

export interface Games {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

interface FetchGamesResponse {
	results: Games[];
}

const useGames = () => {
	const [games, setGames] = useState<Games[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		setIsLoading(true);
		apiClient
			.get<FetchGamesResponse>('/games', { signal })
			.then((res) => {
				setGames(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => {
			controller.abort();
		};
	}, []);

	return { error, games, isLoading };
};

export default useGames;
