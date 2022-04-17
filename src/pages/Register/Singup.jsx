import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Shared/Loading/Loading";

const Singup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [error, serError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error2] =
    useCreateUserWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }

  let element;
  if (error || error2) {
    element = <p className="text-danger">{error}</p>;
  } else {
    element = "";
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      return serError("Password Do not match");
    } else {
      createUserWithEmailAndPassword(email, password);
      serError("");
    }
  };

  return (
    <div className="w-50 mx-auto my-5 shadow-lg p-5">
      <h1 className="text-primary text-center">Please Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Button
          className="border rounded fs-4 w-100  my-2 mx-auto d-block"
          variant="success"
          type="submit"
        >
          Register
        </Button>
      </Form>
      {element}
      <p className="py-2">
        Already have an account?{" "}
        <Link to="/login" className="text-danger text-decoration-none">
          Please Login.
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Singup;
