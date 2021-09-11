import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Axios from "axios";

function Edit() {
  const [users, setUsers] = useState({});
  const { userFirstName, userLastName, userName, userEmail, userPassword } =
    users;
  const { id } = useParams();
  let history = useHistory();

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    Axios.get(`https://thawing-beyond-07847.herokuapp.com/${id}`).then(
      (response) => {
        setUsers(response.data);
      }
    );
  }, [id]);

  const editUser = (event) => {
    event.preventDefault();
    Axios.put(`https://thawing-beyond-07847.herokuapp.com/${id}`, users);
    history.push("/users");
  };
  return (
    <>
      <div className="container">
        <div className="mt-5 pt-5">
          <h2 className="text-center p-3 fw-bold">
            Update <span style={{ color: "#0d6efd" }}>U</span>ser Information
          </h2>
          <form className="mx-auto" style={{ width: "500px" }}>
            <div className="mb-2">
              <input
                onChange={(event) => handleChange(event)}
                type="text"
                name="userFirstName"
                className="form-control input"
                defaultValue={userFirstName}
                placeholder="First Name"
              />
            </div>
            <div className="mb-2">
              <input
                onChange={(event) => handleChange(event)}
                type="text"
                name="userLastName"
                className="form-control input"
                defaultValue={userLastName}
                placeholder="Last Name"
              />
            </div>
            <div className="mb-2">
              <input
                onChange={(event) => handleChange(event)}
                type="text"
                name="userName"
                className="form-control input"
                defaultValue={userName}
                placeholder="User Name"
              />
            </div>
            <div className="mb-2">
              <input
                onChange={(event) => handleChange(event)}
                type="email"
                name="userEmail"
                className="form-control input"
                defaultValue={userEmail}
                placeholder="Email"
              />
            </div>
            <div className="mb-2">
              <input
                onChange={(event) => handleChange(event)}
                type="userPassword"
                name="password"
                className="form-control input"
                defaultValue={userPassword}
                placeholder="Password"
              />
            </div>
            <input
              onClick={(event) => editUser(event)}
              type="submit"
              value="Update User"
              className="btn btn-primary form-control btn-style"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
