import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
	onSelectSortOrder: (order: string) => void;
	sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
	];

	const currentSortOrder = sortOders.find((order) => order.value === sortOrder);
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSortOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOders.map((order, index) => (
					<MenuItem
						key={index}
						value={order.value}
						onClick={() => onSelectSortOrder(order.value)}>
						{' '}
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
