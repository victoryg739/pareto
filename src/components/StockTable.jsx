import React, { useState } from "react";

function StockTable() {
  const [stocks, setStocks] = useState([
    { name: "Apple", price: 200 },
    { name: "Google", price: 150 },
    { name: "Facebook", price: 100 }
  ]);

  return (
    <table class="cardBox rounded table table-striped">
    <thead class="thead-dark">
    <tr>
        <th scope="col">Symbol</th>
        <th scope="col">Price</th>
        <th scope="col">Units</th>
        <th scope="col">Value</th>
        <th scope="col">Avg Cost</th>
        <th scope="col">P/L</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  );
}

export default StockTable;