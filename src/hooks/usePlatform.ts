import UseData from './useData';

export interface Platform {
	id: number;
	name: string;
}

const usePlatform = () => UseData<Platform>('/platforms/lists/parents');

export default usePlatform;
