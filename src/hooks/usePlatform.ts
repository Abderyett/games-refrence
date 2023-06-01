import platforms from '../data/platforms';

export interface Platform {
	id: number;
	name: string;
}

const usePlatform = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatform;
