import { React, useEffect, useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faStepBackward,
  faStepForward,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import _ from "lodash";

const pageSize = 3;
function Table() {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState(false);
  const [id, setId] = useState("");
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (passId) => {
    setId(passId);
    !password && setPassword(true);
    password && setPassword(false);
  };

  useEffect(() => {
    Axios.get("https://thawing-beyond-07847.herokuapp.com/read").then((response) => {
      setUsers(response.data);
      setPaginatedPosts(_(response.data).slice(0).take(pageSize).value());
    });
  }, [users]);

  const pageCount = users ? Math.ceil(users.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(users).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPost);
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      Axios.delete(`https://thawing-beyond-07847.herokuapp.com/${id}`);
    }
  };
  return (
    <>
      <div className="justify-content-center align-items-center text-center">
        <table className="table mt-3 table_width">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPosts.map((user) => (
              <tr key={user._id}>
                <td className="count"></td>
                <td>{user.userFirstName}</td>
                <td>{user.userLastName}</td>
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>
                <td>
                  {id === user._id && password ? user.userPassword : "******"}{" "}
                  <FontAwesomeIcon
                    className="table_icon_style"
                    icon={faEye}
                    onClick={() => handleClick(user._id)}
                  />
                </td>
                <td>
                  <Link to={`/edit/${user._id}`}>
                    <button className="btn btn-success btn-sm rounded-circle table_icon_style">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </Link>{" "}
                  <button
                    className="btn btn-danger btn-sm rounded-circle table_icon_style"
                    onClick={() => deleteUser(user._id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <p className="page-link pagination_icon_style">
                <FontAwesomeIcon icon={faStepBackward} color="black" />
              </p>
            </li>
            {pages.map((page, index) => (
              <li
                key={index}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p
                  className="page-link pagination_number_style mx-1"
                  onClick={() => pagination(page)}
                  href="#"
                >
                  {page}
                </p>
              </li>
            ))}
            <li className="page-item">
              <p className="page-link pagination_icon_style">
                <FontAwesomeIcon icon={faStepForward} color="black" />
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Table;
