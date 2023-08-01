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
          <img src={element.image} width={"50px"} />
        </td>
        <td>{element.technologies.substring(0, 10) + "..."}</td>
        <td>{element.description.substring(0, 10) + "..."}</td>
        <td
          className="list-project-color"
          style={{ backgroundColor: `${element.bgcolor}` }}
        >
          &nbsp;
        </td>
        <td>
          {/*           <UpdateList
            elementId={element.id}
            singledata={props.singledata}
            getList={props.getList}
            updateList={props.updateList}
            handleChange={props.handleChange}
          ></UpdateList> */}
        </td>
        <td>
          {/*           <DeleteList
            elementId={element.id}
            singledata={props.singledata}
            getList={props.getList}
            deleteList={props.deleteList}
          ></DeleteList> */}
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Technologies</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ListDashboard;
