
import { Link } from "react-router-dom";

//search for an imge of the the genre and import img link



const DataRow = ({ genre,description}) => {
    return (
      <div item className="GenreCard">
         <Link to={`/category/id/${genre}`}>
        <h5 className=" GenreCard-Title | FF-Inter FS-24px T-Center T-Capitalize FW-600">{genre}</h5>
        <p className="GenreBody | FF-Inter FS-16px">{description}</p>
        </Link>
      </div>
    );
  };
  
  export default DataRow;