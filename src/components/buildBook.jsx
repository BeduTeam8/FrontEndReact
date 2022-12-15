import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




const BuildBook = ({ image }) => {
  const location = useLocation().pathname;
    return (
      <div className="buildBook" style={{"width": "225px"}}>
        <div className="contenedorImagen" style={{
          "width": '100%', 
          "height": '300px', 
          "display": 'flex', 
          "justifyContent": "center"
          }}>
          <img src={image} alt="" style={{
            "width": '100%',
            "borderRadius": "10px"            
            }}/>
        </div>
        <div className="boton" style={{
          "display": "flex", 
          "justifyContent": "center"
        }}>
          <Link to={location + "/read"}>
          <Button style={{
              "color": "#fff",
              "backgroundColor": "#F5B841", 
              "marginTop": "-15px",
              "width": "40%",
              "padding": "2px",
              "fontWeight": "bold",
              "borderRadius": "15px",
              "fontSize": "15px"
            }}>Read</Button></Link>
        </div>
      </div>
    );
  };
  
  export default BuildBook;