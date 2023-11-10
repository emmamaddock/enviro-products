const Table = ({ tableData }) => {
  return (
    <div className="dataTable">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Environmental Impact</th>
          </tr>
        </thead>
        {tableData.map((val, key) => {
          return (
            <tbody>
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.impact}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
