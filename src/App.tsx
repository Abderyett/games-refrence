import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import { Platform } from './components/GameCard';
import PlatformSelector from './components/PlatformSelector';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main" "footer"`,
				lg: `"nav nav" "aside main" "footer footer"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}>
			<GridItem area={'nav'}>
				<Navbar />
			</GridItem>

			<Show above='lg'>
				<GridItem pl='2' area={'aside'} paddingX={5}>
					<GenreList
						selectedGenre={selectedGenre}
						selectGenreHandler={(genre) => setSelectedGenre(genre)}
					/>
				</GridItem>
			</Show>
			<GridItem pl='2' area={'main'}>
				<PlatformSelector
					onSelectPlatform={(platform) => setSelectedPlatform(platform)}
					selectedPlatform={selectedPlatform}
				/>
				<GameGrid
					selectedPlatform={selectedPlatform}
					selectedGenre={selectedGenre}
				/>
			</GridItem>
			<GridItem pl='2' area={'footer'}>
				Footer
			</GridItem>
		</Grid>
	);
}

export default App;
