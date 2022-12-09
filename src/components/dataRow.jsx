const DataRow = ({ genre,description,createdAt,updatedAt}) => {
    return (
      <tr>
        <td>{genre}</td>
        <td>{description}</td>
        <td>{createdAt}</td>
        <td>{updatedAt}</td>

      </tr>
    );
  };
  
  export default DataRow;