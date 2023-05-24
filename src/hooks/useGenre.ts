import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { Platform } from '../components/GameCard';

export interface Genre {
	id: number;
	name: string;
}

interface FetchGenreResponse {
	count: number;
	results: Genre[];
}

const useGenre = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		setIsLoading(true);
		apiClient
			.get<FetchGenreResponse>('/genres', { signal })
			.then((res) => {
				setGenres(res.data.results);
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

	return { error, genres, isLoading };
};

export default useGenre;
