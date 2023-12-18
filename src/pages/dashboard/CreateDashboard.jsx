import React from "react";

const CreateDashboard = (props) => {
  return (
    <>
      <div className="d-flex flex-column">
        <input
          type="text"
          placeholder="Titre"
          name="title"
          value={props.singledata.title}
          onChange={props.handleChange}
        />

        <input
          type="text"
          placeholder="Image Url"
          name="image"
          value={props.singledata.image}
          onChange={props.handleChange}
        />

        <input
          type="text"
          placeholder="Techno"
          name="technologies"
          value={props.singledata.technologies}
          onChange={props.handleChange}
        />

        <input
          type="text"
          placeholder="description"
          name="description"
          value={props.singledata.description}
          onChange={props.handleChange}
        />

        <input
          type="text"
          placeholder="github"
          name="github"
          value={props.singledata.github}
          onChange={props.handleChange}
        />
        <input
          type="text"
          placeholder="deployed"
          name="deployed"
          value={props.singledata.deployed}
          onChange={props.handleChange}
        />
        <input
          type="text"
          placeholder="bgcolor"
          name="bgcolor"
          value={props.singledata.bgcolor}
          onChange={props.handleChange}
        />
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn"
          onClick={() => props.createProject}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default CreateDashboard;
