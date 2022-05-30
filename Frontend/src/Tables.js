import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const Tables = () => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    const res = await axios.get("http://localhost:7000/getUser");
    setData(res.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = (index) => {
    console.log(index);
    setData(data.filter((item) => item.name !== index));
  };

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={item._id}>
              <td>{id + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td> {item.phone}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(item.name)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
