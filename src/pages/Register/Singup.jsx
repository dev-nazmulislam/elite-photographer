import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Singup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      return;
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h1 className="text-primary text-center">Please Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
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
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
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
