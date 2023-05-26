import { Box, HStack, Skeleton, SkeletonCircle, Stack } from '@chakra-ui/react';

const GenreSkaleton = () => {
	return (
		<Box>
			<HStack paddingY={1}>
				<SkeletonCircle />
				<Stack>
					<Skeleton width='80px' height='10px' borderRadius={3} />
				</Stack>
			</HStack>
		</Box>
	);
};

export default GenreSkaleton;
