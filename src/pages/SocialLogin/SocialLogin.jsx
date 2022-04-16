import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  return (
    <div>
      <div className="d-flex aling-items-center">
        <div style={{ height: "2px" }} className="w-50 mt-2 bg-primary"></div>
        <p className="px-3">or</p>
        <div style={{ height: "2px" }} className="w-50 mt-2 bg-primary"></div>
      </div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className=" btn btn-light border rounded fs-4 w-100 my-2"
        >
          <FcGoogle className="mx-3" />
          Google Login
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="btn btn-primary border rounded fs-4 w-100  my-2"
        >
          <FaFacebookF className="mx-3" />
          Facebook Login
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark border rounded fs-4 w-100  my-2"
        >
          <FaGithub className="mx-3" />
          GitHub Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
