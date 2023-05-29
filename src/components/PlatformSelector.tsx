import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';

const PlatformSelector = () => {
	const { data: platforms, error } = usePlatform();

	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Actions
			</MenuButton>
			<MenuList>
				{platforms.map((platform) => (
					<MenuItem key={platform.id}>{platform.name}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
