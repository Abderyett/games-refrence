import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Actions
			</MenuButton>
			<MenuList>
				<MenuItem>Item1</MenuItem>
				<MenuItem>Item2</MenuItem>
				<MenuItem>Item3</MenuItem>
				<MenuItem>Item4</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
