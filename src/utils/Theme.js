import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: "#fe6055",
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			light: "#f5c972",
			main: "#f5b941",
			// dark: will be calculated from palette.secondary.main,
			contrastText: "#ffcc00",
		},
		contrastThreshold: 3,

		tonalOffset: 0.2,
	},
});

export default theme;
