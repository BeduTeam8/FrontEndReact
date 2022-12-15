import React from "react";

import theme from "../../utils/Theme";
import { ThemeProvider  } from "@mui/material/styles";
import { ListItem, Button, TextField , Box, InputAdornment, IconButton ,FormControl,InputLabel, OutlinedInput  } from "@mui/material";
import { Link,} from "react-router-dom";
import { Visibility , VisibilityOff  } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import URLimport from "../../api/api"

const base_URL=URLimport;
//const URL="http://localhost:4000/"
const endPoint="/users/signup"
const URL=base_URL+endPoint
console.log("URL",URL)

const postCredentials = (username, userpass, firstname, lastname, email) => {
	console.log("postCredentials",username,userpass, firstname, lastname, email)
	return fetch(URL, {

		method: "POST",
		withCredentials: true,

        //credentials: 'include',
        mode: "cors",
        headers: {
            'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
		body: JSON.stringify({
			username: username,
			userpass: userpass,
			firstname: firstname,
			lastname: lastname,
			email: email,
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


 export default function SignUpNav() {

	const [alert, setAlert] = React.useState(false);

	const [username, setUsername] = React.useState();
    const [userpass, setUserPass] = React.useState();  
    const [firstname, setFirstname] = React.useState();
    const [lastname, setLastname] = React.useState();
    const [email, setEmail] = React.useState();  


	const handleSubmit = (e) => {
		e.preventDefault();
		postCredentials(username, userpass, firstname, lastname, email).then((data) => {
			console.log( "hndl submit data error",data.error)
			if (data.error) {
				setAlert(false);
			}
			else {
				setAlert(true);
			}
		}
		);

	};

	const renderAlert = () => {
		switch (alert) {
			case false:
				setTimeout(() => {
					setAlert(null);
				  }, 3000); // 3 seconds
				return <Alert severity="error"> 
					We might be missing some information or your user might exist
				</Alert>;
			case true:
				setTimeout(() => {
				  setAlert(null);
				}, 3000); // 3 seconds
				// after time out redirect to home
				return <Alert severity="success">You have successfully signed up! 
					<small>You will be redirected to the home page shortly.</small>
				</Alert> ;
			  default:
				return null;
		}
	  };


	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	  });
  
	  const handleChange = (prop) => (event) => {
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
						helperText=" "
						id="demo-helper-text-aligned"
						label="First Name"
						className="TextField"
						onChange={e => setFirstname(e.target.value)}
					/>
						<TextField
						helperText=" "
						id="demo-helper-text-aligned"
						label="Last Name"
						className="TextField"
						onChange={e => setLastname(e.target.value)}
					/>
						<TextField
						required
						helperText="Please enter your username"
						id="demo-helper-text-aligned"
						label="User Name"
						autoComplete="username"
						className="TextField"
						onChange={e => setUsername(e.target.value)}
					/>
					<TextField
					required
						helperText=" Please enter your email"
						id="demo-helper-text-aligned"
						label="Email"
						type="email"
						autoComplete="email"
						className="TextField"
						onChange={e => setEmail(e.target.value)}
						onKeyPress={handleKeyPress}
					/>
					<FormControl variant="outlined" className="TextField">
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
						<Button variant="contained" className="Login-Button"
						onClick={handleSubmit}>SignUp</Button>
					</Link>
					<Link to="/login">
						<Button variant="outlined" >
							Login
						</Button>
					</Link>
			</ListItem>
	</ThemeProvider>
    );
}
