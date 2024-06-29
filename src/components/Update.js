import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

//function handleSubmit() {}

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
console.log("1")
  useEffect(() => {
    console.log("2")
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://6634c9b39bb0df2359a2bd83.mockapi.io/utube/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  console.log("3")
  return (
    <form>
      {console.log("4")}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button>
    </form>
  );
};

export default Update;
