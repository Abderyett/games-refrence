import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
	return (
		<>
			<Grid
				gridTemplateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav " "aside main" "footer footer" `,
				}}>
				<GridItem pl='2' bg='orange.300' area={'nav'}>
					Nav
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
