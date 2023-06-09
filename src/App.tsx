import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import { Platform } from './components/GameCard';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	search: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
				<Navbar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
			</GridItem>

			<Show above='lg'>
				<GridItem pl='2' area={'aside'} paddingX={5}>
					<GenreList
						selectedGenre={gameQuery.genre}
						selectGenreHandler={(genre) =>
							setGameQuery({ ...gameQuery, genre })
						}
					/>
				</GridItem>
			</Show>
			<GridItem pl='2' area={'main'}>
				<Box paddingLeft={2}>
					<GameHeading heading={gameQuery} />
					<Flex marginBottom={3}>
						<Box marginRight={5}>
							<PlatformSelector
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
								selectedPlatform={gameQuery.platform}
							/>
						</Box>
						<SortSelector
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
							sortOrder={gameQuery.sortOrder}
						/>
					</Flex>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
			<GridItem pl='2' area={'footer'}>
				Footer
			</GridItem>
		</Grid>
	);
}

export default App;
