import { List, ListItem, Image, Text, HStack } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import getCroppedImage from './imageUrl';

const GenreList = () => {
	const { data: genres, error, isLoading } = useGenre();
	return (
		<List>
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
