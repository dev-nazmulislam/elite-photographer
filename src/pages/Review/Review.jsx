import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useReview from "../../Hooks/useReview";
import Cart from "../Cart/Cart";

const Review = () => {
  const [user] = useAuthState(auth);
  const [reviews] = useReview();
  const navigate = useNavigate();

  const handleComment = () => {
    if (!user) {
      navigate("/login");
    } else {
      alert("Comment Success");
    }
  };

  return (
    <div id="review" className="container">
      <div className="my-5">
        <hr />
        <hr />
        <h4>Add Your Comment!!</h4>
        <textarea name="" id="" rows="5" style={{ width: "75%" }}></textarea>
        <br />
        <button onClick={handleComment} className="btn btn-primary ms-2">
          Post Comment
        </button>
        <hr />
        <hr />
      </div>
      <div>
        {reviews.map((review) => (
          <Cart key={review.id} review={review}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Review;
