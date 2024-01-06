import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar";

const RoleManagement = () => {
  return (
    <div>
   
      <br />
      <br />
      <br />
      <Sidebar>
      <h3 className="text-center">Role Management Page </h3>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <table className="table table-hover">
          <thead className="table-primary ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col"> Current Role</th>
              <th scope="col " className="m-5">      Role Management</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> 1</th>
              <td>User Name</td>
              <td>Email</td>
              <td>Admin</td>
              <td>
                <Button variant="outline-secondary" className="btn mx-2 my-1">
                  Admin
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn "
                  // onClick={() => handleDelete(application._id)}
                >
                  User
                </Button>
                <Link>
                  <Button variant="outline-info" className="btn m-2 ">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <th> 1</th>
              <td>User Name</td>
              <td>Email</td>
              <td>Admin</td>
              <td>
                <Button variant="outline-secondary" className="btn mx-2 my-1">
                  Admin
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn "
                  // onClick={() => handleDelete(application._id)}
                >
                  User
                </Button>
                <Link>
                  <Button variant="outline-info" className="btn m-2 ">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <th> 1</th>
              <td>User Name</td>
              <td>Email</td>
              <td>Admin</td>
              <td>
                <Button variant="outline-secondary" className="btn mx-2 my-1">
                  Admin
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn "
                  // onClick={() => handleDelete(application._id)}
                >
                  User
                </Button>
                <Link>
                  <Button variant="outline-info" className="btn m-2 ">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <th> 1</th>
              <td>User Name</td>
              <td>Email</td>
              <td>Admin</td>
              <td>
                <Button variant="outline-secondary" className="btn mx-2 my-1">
                  Admin
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn "
                  // onClick={() => handleDelete(application._id)}
                >
                  User
                </Button>
                <Link>
                  <Button variant="outline-info" className="btn m-2 ">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <th> 1</th>
              <td>User Name</td>
              <td>Email</td>
              <td>Admin</td>
              <td>
                <Button variant="outline-secondary" className="btn mx-2 my-1">
                  Admin
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn "
                  // onClick={() => handleDelete(application._id)}
                >
                  User
                </Button>
                <Link>
                  <Button variant="outline-info" className="btn m-2 ">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </Sidebar>
    </div>
  );
};

export default RoleManagement;
