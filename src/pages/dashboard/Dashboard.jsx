import React from "react";
import PageHeader from "../../components/PageHeader";
import DashboardHeader from "../../components/DashboardHeader.jsx";
import ListDashboard from "../dashboard/ListDashboard";
import CreateDashboard from "./CreateDashboard";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        image: "",
        technologies: "",
        description: "",
        github: "",
        deployed: "",
        bgcolor: "",
      },
    };
    this.getProjectsList = this.getProjectsList.bind(this);
    this.createProject = this.createProject.bind(this);
    this.getList = this.getList.bind(this);
  }

  createProject() {
    fetch("http://localhost:3001/Projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.singledata),
    }).then(
      this.setState({
        singledata: {
          title: "",
          image: "",
          technologies: "",
          description: "",
          github: "",
          deployed: "",
          bgcolor: "",
        },
      })
    );
  }

  handleChange = (e) => {
    let title = this.state.singledata.title;
    let image = this.state.singledata.image;
    let technologies = this.state.singledata.technologies;
    let description = this.state.singledata.description;
    let github = this.state.singledata.github;
    let deployed = this.state.singledata.deployed;
    let bgcolor = this.state.singledata.bgcolor;
    if (e.target.name === "title") title = e.target.value;
    if (e.target.name === "image") image = e.target.value;
    if (e.target.name === "technologies") technologies = e.target.value;
    if (e.target.name === "description") description = e.target.value;
    if (e.target.name === "github") github = e.target.value;
    if (e.target.name === "deployed") deployed = e.target.value;
    if (e.target.name === "bgcolor") bgcolor = e.target.value;

    this.setState({
      singledata: {
        title: title,
        image: image,
        technologies: technologies,
        description: description,
        github: github,
        deployed: deployed,
        bgcolor: bgcolor,
      },
    });
  };

  getProjectsList() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3001/Projects")
        .then((res) => res.json())
        .then((result) => this.setState({ loading: false, alldata: result }))
        .catch(console.log);
    });
  }

  getList(event, id) {
    this.setState(
      {
        singledata: {
          title: "Loading...",
          image: "Loading...",
          technologies: "Loading...",
          description: "Loading...",
          github: "Loading...",
          deployed: "Loading...",
          bgcolor: "Loading...",
        },
      },
      () => {
        fetch("https://localhost:3001/Projects" + id)
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              singledata: {
                title: result.title,
                image: result.image ? result.image : "",
                technologies: result.technologies,
                description: result.technologies,
                github: result.github ? result.github : "#",
                deployed: result.deployed ? result.deployed : "#",
                bgcolor: result.bgcolor ? result.bgcolor : "#FFF",
              },
            });
          });
      }
    );
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      <ListDashboard
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getList={this.getList}
        // updateList={this.updateList}
        // deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );
    return (
      <section className="dashboardTitle">
        <PageHeader title="Dashboard" />
        <DashboardHeader />
        <div className="d-flex flex-row flex-wrap py-4 justify-content-center align-items-center">
          <button className="btn mx-4" onClick={this.getProjectsList}>
            Update les données
          </button>
        </div>
        <CreateDashboard
          singledata={this.state.singledata}
          createProject={this.createProject}
          handleChange={this.handleChange}
        />
        <br />
        {listTable}
      </section>
    );
  }
}
