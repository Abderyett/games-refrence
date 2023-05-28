import { List, ListItem, Image, HStack, Link } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import getCroppedImage from './imageUrl';
import GenreSkaleton from './GenreSkaleton';

interface Props {
	selectGenreHandler: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, selectGenreHandler }: Props) => {
	const { data: genres, error, isLoading } = useGenre();

	const skeletons = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
	];
	if (error) return null;
	return (
		<List>
			{isLoading &&
				skeletons.map((skeleton) => <GenreSkaleton key={skeleton} />)}
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY='5px'>
					<HStack>
						<Image
							src={getCroppedImage(genre.image_background)}
							boxSize='32px'
							borderRadius={8}
						/>
						<Link
							fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
							fontSize='lg'
							onClick={() => selectGenreHandler(genre)}>
							{genre.name}
						</Link>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
