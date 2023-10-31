import React, { useState } from "react";
// import Wrapper from "../assets/wrappers/";
// import { Form } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const newsLetterUrl = "https://www.course-api.com/cocktails-newsletter";

const NewsLetter = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name && !lastName && !email) {
      return;
    }
    if (name && lastName && email) {
      setIsLoading(true);
      let body = {
        name: name,
        lastName: lastName,
        email: email,
      };
      try {
        const res = await axios.post(newsLetterUrl, body);
        toast.success(res.data.msg);
        navigate("/");
      } catch (error) {
        toast.error(error.response.data.msg);
        setName("");
        setLastName("");
        setEmail("");
        setIsLoading(false);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>NewsLetter</h4>{" "}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: ".5rem" }}
        disabled={isLoading}
      >
        Submit
      </button>
    </form>
  );
};

export default NewsLetter;
