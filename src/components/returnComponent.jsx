import { Button } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate} from "react-router-dom";



const ReturnComponent = () => {
  let navigate = useNavigate()
    return (
      <div className="returnComponent">
					<Button
						variant="contained"
            onClick={() => navigate(-1)}
						style={{
							backgroundColor: "#425357",
							color: "white",
							margin: "1rem",
						}}
					>
						<ArrowBackIcon style={{ marginRight: ".5rem" }} />
						back
					</Button>

      </div>
    );
  };
  
  export default ReturnComponent;