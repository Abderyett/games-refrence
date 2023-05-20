import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Games {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Games[];
}

const useGames = () => {
	const [games, setGames] = useState<Games[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		apiClient
			.get<FetchGamesResponse>('/games', { signal })
			.then((res) => setGames(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => {
			controller.abort();
		};
	}, []);

	return { error, games };
};

export default useGames;