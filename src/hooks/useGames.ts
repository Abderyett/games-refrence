import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { Platform } from '../components/GameCard';
import UseData from './useData';

export interface Games {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = () => UseData<Games>('/games');

export default useGames;
