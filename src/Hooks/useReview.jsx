const { useState, useEffect } = require("react");

const useReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`../review.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return [reviews, setReviews];
};
export default useReview;
