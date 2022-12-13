import { Button } from "@mui/material";
import { display } from "@mui/system";
import { generatePath } from "react-router-dom";

const BuildReviews = ({ user, profileImage, review }) => {
    return (
      <div className="Reviews" >
        <div  className="userInfo" style={{
            "width": "55%",
            "backgroundColor": "#425357", 
            "margin": "1rem auto",
            "color": "#fff",
            "display": "flex",
            "padding": "10px",
            "borderRadius": "15px"
            }}>
            <div className="imageAndUser" style={{"width": "15%"}}>
                <img src={profileImage} alt="" style={{
                    "width": "60px", 
                    "height": "60px",
                    "borderRadius": "50%",
                    "margin": "3px"
                    }}/>
                <p style={{"fontWeight": "bold", "margin": "3px"}}>{user}</p>
            </div>
            <div className="review" style={{
                "width": "85%"
            }}>
                <h3  style={{"color": "#9CC9C9", "fontSize": ".8rem"}}>REVIEW</h3>
                <p style={{"fontSize": "1.1rem"}}>{review}</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default BuildReviews;