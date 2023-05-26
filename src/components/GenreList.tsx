import { List, ListItem, Image, Text, HStack } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import getCroppedImage from './imageUrl';
import GenreSkaleton from './GenreSkaleton';

const GenreList = () => {
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
						<Text fontSize='lg'>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
