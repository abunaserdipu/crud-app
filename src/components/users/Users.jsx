import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../Navbar";
import Form from "./forms/Form";
import Table from "./Table";

function Users() {
  return (
    <>
      <Navbar />
      <div className="container">
        <p className="text-center fs-5">
          <FontAwesomeIcon icon={faUsers} /> User Management
        </p>
        <Form />
        <Table />
      </div>
    </>
  );
}

export default Users;
