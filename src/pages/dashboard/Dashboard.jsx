import React from "react";
import PageHeader from "../../components/PageHeader";
import DashboardHeader from "../../components/DashboardHeader.jsx";
import ListDashboard from "../dashboard/ListDashboard";

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
  }

  createProject() {
    fetch("http://localhost:3001/Projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "myproject" }).then(
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
      ),
    });
  }

  getProjectsList() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3001/Projects")
        .then((res) => res.json())
        .then((result) => this.setState({ loading: false, alldata: result }))
        .catch(console.log);
    });
  }

  render() {
    return (
      <section className="dashboardTitle">
        <PageHeader title="Dashboard" />
        <DashboardHeader />
        <div className="d-flex flex-row flex-wrap py-4 justify-content-center align-items-center">
          <button className="btn mx-4" onClick={this.getProjectsList}>
            Update les données
          </button>
          <button className="btn mx-4 fa-add"></button>
        </div>
        <ListDashboard alldata={this.state.alldata} />
      </section>
    );
  }
}
