import React from "react";

function Table({ data }) {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">RollNumber</th>
            <th scope="col">check-in-time</th>
            <th scope="col">check-out-time</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((e, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{e.name}</td>
                  <td>{e.roll}</td>
                  <td>{e.checkInTime}</td>
                  <td>{e.checkOutTime}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
