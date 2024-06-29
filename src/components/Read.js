import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://6634c9b39bb0df2359a2bd83.mockapi.io/utube")
      .then((res) => {
        //console.log(res.data);
        setData(res.data);
      });
  }
  // useEffect(() => {
  //   console.log("first");
  //   if (data.length === 0) {
  //     getData();
  //   }
  // }, [data]);

  function handleDelete(id) {
    axios
      .delete(`https://6634c9b39bb0df2359a2bd83.mockapi.io/utube/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      {data.map((eachData) => {
        return (
          <tbody key={eachData.id}>
            <tr>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn-success"
                    onClick={() => {
                      setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                      );
                    }}
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Read;
