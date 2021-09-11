import { React, useState } from "react";
import Validation from "./Validation";
import Axios from "axios";

const uservalue = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
};

function Form() {
  const [users, setUsers] = useState(uservalue);
  const { firstName, lastName, userName, email, password } = users;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && userName && email && password) {
      Axios.post("https://thawing-beyond-07847.herokuapp.com/insert", {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
      });
      document.getElementById("first_name").value = "";
      document.getElementById("last_name").value = "";
      document.getElementById("user_name").value = "";
      document.getElementById("e_mail").value = "";
      document.getElementById("pass_word").value = "";
    } else {
      setErrors(Validation(users));
    }
  };
  return (
    <>
      <div className="justify-content-center align-item-center">
        <form className="mx-auto form-width">
          <div className="mb-2">
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              id="first_name"
              value={users.firstName}
              className="form-control input"
              placeholder="First Name"
            />
            {errors.firstName && (
              <small className="err-txt">{errors.firstName}</small>
            )}
          </div>
          <div className="mb-2">
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              id="last_name"
              value={users.lastName}
              className="form-control input"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <small className="err-txt">{errors.lastName}</small>
            )}
          </div>
          <div className="mb-2">
            <input
              onChange={handleChange}
              type="text"
              name="userName"
              id="user_name"
              value={users.userName}
              className="form-control input"
              placeholder="User Name"
            />
            {errors.userName && (
              <small className="err-txt">{errors.userName}</small>
            )}
          </div>
          <div className="mb-2">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="e_mail"
              value={users.email}
              className="form-control input"
              placeholder="Email"
            />
            {errors.email && <small className="err-txt">{errors.email}</small>}
          </div>
          <div className="mb-2">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="pass_word"
              value={users.password}
              className="form-control input"
              placeholder="Password"
            />
            {errors.password && (
              <small className="err-txt">{errors.password}</small>
            )}
          </div>
          <input
            onClick={handleSubmit}
            type="submit"
            value="Create User"
            className="btn btn-primary form-control btn-style"
          />
        </form>
      </div>
    </>
  );
}

export default Form;
