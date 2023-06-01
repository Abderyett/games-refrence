import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
	config,
	colors: {
		gray: {
			800: '#2d3748',
			900: '#1a202c',
			700: '#4a5568',
			600: '#718096',
			500: '#a0aec0',
			400: '#cbd5e0',
			300: '#e2e8f0',
			200: '#edf2f7',
			100: '#f7fafc',
			50: '#f0f4f8',
		},
	},
});

export default theme;
