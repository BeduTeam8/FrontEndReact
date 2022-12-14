import React from "react";

import theme from "../../utils/Theme";
import { ThemeProvider  } from "@mui/material/styles";
import { ListItem, Button, TextField , Box, InputAdornment, IconButton ,FormControl,InputLabel, OutlinedInput  } from "@mui/material";
import { Link,} from "react-router-dom";
import { Visibility , VisibilityOff  } from "@mui/icons-material/";



 export default function SignUpNav() {
	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	  });
  
	  const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	  };
	
	  const handleClickShowPassword = () => {
		setValues({
		  ...values,
		  showPassword: !values.showPassword,
		});
	  };
	
	  const handleMouseDownPassword = (event) => {
		event.preventDefault();
	  };
    return (
        <ThemeProvider theme={theme}>
             <ListItem className="Nav-Buttons">
				<Box className="TextBox">
					
						<TextField
						required
						helperText="Please enter your username"
						id="demo-helper-text-aligned"
						label="User Name"
						autoComplete="username"
						className="TextField"
					/>
					<FormControl variant="outlined" className="TextField">
						<InputLabel 		htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							endAdornment={
							<InputAdornment position="end">
								<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
								>
							{values.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
							}
							label="Password"
						/>
						</FormControl>
					</Box>
				</ListItem>
			<ListItem className="Nav-Buttons">
			<Link to="/signup">
							<Button variant="outlined">Signup</Button>
						</Link>
						<Link to="/login">
							<Button variant="contained" className="Login-Button">
								Login
							</Button>
						</Link>
			</ListItem>
	</ThemeProvider>
    );
}
