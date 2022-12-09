import React from "react";

import { ListItem, Button } from "@mui/material";

import { Link,} from "react-router-dom";

import { Search, AutoStories } from "@mui/icons-material/";


 export default function BaseNav(props) {
    return (
        <>
             <ListItem className="Nav-Buttons">
						<Link to="/">
							<Button variant="outlined">
								<Search className="Icon" sx={{ width: "1.5rem" }} />
								Search
							</Button>
						</Link>
					</ListItem>
					<ListItem className="Nav-Buttons">
						<Link to="/about">
							<Button variant="outlined">
								<AutoStories sx={{ width: "1.2rem" }} />
								About
							</Button>
						</Link>
					</ListItem>
					<ListItem className="Nav-Buttons">
						<Link to="/genres">
							<Button variant="outlined">
								<AutoStories sx={{ width: "1.2rem" }} />
								Genres
							</Button>
						</Link>
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
        </>
    );
}
