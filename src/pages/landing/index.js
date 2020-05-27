import React from "react";
import "./index.css";
import Header from "../../components/header";
export default class Landing extends React.Component {
  render() {
    return (
      <div className="bg-blue-900">
        <div className="container mx-auto">
          <Header />
        </div>
      </div>
    );
  }
}
