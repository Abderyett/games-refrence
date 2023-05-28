import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { Platform } from '../components/GameCard';
import UseData from './useData';
import { Genre } from './useGenre';

export interface Games {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
	UseData<Games>('/games', { params: { genres: selectedGenre?.id } }, [
		selectedGenre?.id,
	]);

export default useGames;
