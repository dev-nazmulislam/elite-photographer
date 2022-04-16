import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h1 className="text-primary text-center">Please login</h1>
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

        <Button
          className="border rounded fs-4 w-100  my-2 mx-auto d-block"
          variant="success"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className="pt-2">
        New to genus car?{" "}
        <Link to="/register" className="text-danger text-decoration-none">
          Pleasse Register.
        </Link>
      </p>
      <p>
        Forget your password?{" "}
        <button
          onClick={async () => {
            await sendPasswordResetEmail(emailRef.current.value);
            alert("Sent email");
          }}
          className="text-primary border-0 bg-white"
        >
          Reset Password
        </button>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
