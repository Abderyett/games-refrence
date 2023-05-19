import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main" "footer"`,
				lg: `"nav nav" "aside main" "footer footer"`,
			}}>
			<GridItem area={'nav'}>
				<Navbar />
			</GridItem>

			<Show above='lg'>
				<GridItem pl='2' area={'aside'}>
					aside
				</GridItem>
			</Show>
			<GridItem pl='2' area={'main'}>
				<GameGrid />
			</GridItem>
			<GridItem pl='2' area={'footer'}>
				Footer
			</GridItem>
		</Grid>
	);
}

export default App;
