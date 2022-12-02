import currencyFormatter from "./currencyFormatter";

const DataRow = ({ house }) => {
    return (
      <tr>
        <td>{house.address}</td>
        <td>{house.country}</td>
        <td>{currencyFormatter.format(house.price)}</td>
      </tr>
    );
  };
  
  export default DataRow;