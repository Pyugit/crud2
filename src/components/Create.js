import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
       e.preventDefault();
    
       //   // console.log("clicked");
    //   axios.post("https://6634c9b39bb0df2359a2bd83.mockapi.io/utube", {
    //     name: name,
    //     email: email,
    //     header,
    //   });
    //   history("/read");

    axios
      .post("https://6634c9b39bb0df2359a2bd83.mockapi.io/utube", {
        name: name,
        email: email,
        header,
      })
      .then(() => {history("/read")});
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
};

export default Create;
