import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Grid
				gridTemplateAreas={{
					base: `"nav" "main" "footer"`,
					lg: `"nav nav " "aside main" "footer footer" `,
				}}>
				<GridItem pl='2' area={'nav'}>
					<Navbar />
				</GridItem>

				<Show above='lg'>
					<GridItem pl='2' bg='pink.300' area={'aside'}>
						aside
					</GridItem>
				</Show>
				<GridItem pl='2' bg='green.300' area={'main'}>
					main
				</GridItem>
				<GridItem pl='2' bg='blue.300' area={'footer'}>
					footer
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
