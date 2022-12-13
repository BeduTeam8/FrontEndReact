import { Button } from "@mui/material";
import { display } from "@mui/system";
import { generatePath } from "react-router-dom";

const BuildBookInformation = ({ title, author, genre, editorial, description }) => {
    return (
      <div className="BookInformation" style={{"color": "#fff", "width": "70%", "marginLeft": "4rem", "lineHeight": "1.5rem"}}>
        <p style={{"color": "#9CC9C9"}}>TITLE</p>
        <p style={{"fontSize": "2rem", "fontWeight": "bold"}}>{title}</p>
        <p style={{"color": "#9CC9C9"}}>AUTHOR</p>
        <p style={{"fontSize": "1.3rem"}}>{author}</p>
        <p style={{"color": "#9CC9C9"}}>GENRE</p>
        <p style={{"fontSize": "1.3rem"}}>{genre}</p>
        <p style={{"color": "#9CC9C9"}}>EDITORIAL</p>
        <p style={{"fontSize": "1.3rem"}}>{editorial}</p>
        <p style={{"color": "#9CC9C9"}}>DESCRIPTION</p>
        <p style={{"fontSize": "1.3rem"}}>{description}</p>
      </div>
    );
  };
  
  export default BuildBookInformation;