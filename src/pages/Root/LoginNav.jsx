import React from "react";

import theme from "../../utils/Theme";
import { ThemeProvider  } from "@mui/material/styles";
import { ListItem, Button, TextField , Box, InputAdornment, IconButton ,FormControl,InputLabel, OutlinedInput  } from "@mui/material";
import { Link, } from "react-router-dom";
import { Visibility , VisibilityOff  } from "@mui/icons-material/";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';


const base_URL="https://libroverse-production.up.railway.app/";
//const URL="http://localhost:4000"
const endPoint="users/logIn"
const URL=base_URL+endPoint
console.log("URL",URL)

const postCredentials = (username, userpass) => {
	console.log("postCredentials",username,userpass)
	return fetch(URL, {
        method: 'POST',
        withCredentials: true,
        //credentials: 'include',
        mode: "cors",
        headers: {
            'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Origin': 'https://639a7fa9878d176c0991cab7--extraordinary-baklava-b8b002.netlify.app/',
            'Content-Type': 'application/json',
            },
		body: JSON.stringify({
			username: username,
			userpass: userpass,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log("data",data)
			return data;
		}
		)
		.catch((err) => console.log(err));

  };

  

 export default function LoginNav({setToken}) {
	const [alert, setAlert] = React.useState(false);

	const [username, setUsername] = React.useState();
    const [userpass, setUserPass] = React.useState();  

	const handleSubmit = (e) => {
		e.preventDefault();
		postCredentials(username, userpass).then((data) => {
		  setToken(data.token);
		  if (data.token) {
			setAlert(true);
		  }
		  if (data.error) {
			setAlert(data.error);
		  }
		}).catch((err) => {
		  setAlert("Error: Could not connect to server");
		});
	  };
	  

	  const renderAlert = () => {
		switch (alert) {
			// if empty username field
		  case "Error: Username is required":
			return <Alert severity="error">Username is required</Alert>;
			// if empty password field
		case "Error: Password is required":
			return <Alert severity="error">Password is required</Alert>;
		  case "Error: Invalid username or password":
			return <Alert severity="error">test</Alert>;
		  case "Error: Could not connect to server":
			setTimeout(() => {
				setAlert(null);
			  }, 3000); // 3 seconds
			return <Alert severity="error"> Wrong Password or Login id</Alert>;
			case true:
				setTimeout(() => {
				  setAlert(null);
				}, 3000); // 3 seconds
				// after time out redirect to home
				return <Alert severity="success">Login successful</Alert> ;
			  default:
				return null;
		}
	  };

	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	  });
  
	  const handleChange = (prop) => (event) => {
		// save userpass
		setUserPass(event.target.value)
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

	//   after sucessfull login redirect to home
	const navigate = useNavigate();
	if (alert === true) {
		setTimeout(() => {
		  navigate("/");
		}, 3000); // 3 seconds
	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
		  handleSubmit(e);
		}
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
						onKeyPress={handleKeyPress}

						onChange={(e) => setUsername(e.target.value)}
					/>
					<FormControl variant="outlined" className="TextField" >
						<InputLabel 		htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							onKeyPress={handleKeyPress}

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
						{renderAlert()}
					</Box>
				</ListItem>
			<ListItem className="Nav-Buttons">
	

			<Link to="/signup">
			<Button
					variant="outlined"
					color="primary"
					className="Button"
			
				>
					SignUp
				</Button>
				</Link>
				<Link to="/login">
				<Button
				className="Login-Button"
					variant="contained"
					onClick={handleSubmit}
				>
					Login
				</Button>
				</Link>
			</ListItem>


	
	</ThemeProvider>
    );
}

LoginNav.propTypes={
    setToken: PropTypes.func.isRequired
}