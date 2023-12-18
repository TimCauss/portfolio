import React from "react";
/* import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList"; */

function ListDashboard(props) {
  const rows = [];
  props.alldata.forEach((element) => {
    rows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>
          <img src={element.image} width={"150px"} />
        </td>
        <td>{element.technologies.substring(0, 20) + "..."}</td>
        <td>{element.description.substring(0, 25) + "..."}</td>
        <td
          className="list-project-color"
          style={{ backgroundColor: `${element.bgcolor}` }}
        >
          &nbsp;
        </td>
      </tr>
    );
  });
  return (
    <table className="pb-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Technologies</th>
          <th>Description</th>
          <th>bg</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ListDashboard;
