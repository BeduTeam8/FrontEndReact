import { Button } from "@mui/material";
import { display } from "@mui/system";
import { generatePath } from "react-router-dom";

const ReturnComponent = ({}) => {
    return (
      <div className="returnComponent">
        <Button style={{
            "color": "#fff", 
            "fontWeight": "bold",
            "display": "flex",
            "justifyContent": "flex-start",
            "marginBottom": "1rem",
            "marginLeft": "20%",

        }}>RETURN</Button>
      </div>
    );
  };
  
  export default ReturnComponent;