import { useState, useEffect } from "react";

const AllData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postdata, setPostData] = useState([]);
  const [userdata, setUserData] = useState([]);
  const API1 = "https://jsonplaceholder.typicode.com/posts";
  const API2 = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async (url, setDataCallback) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const jsonData = await res.json();
      setDataCallback(jsonData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(API1, setPostData);
  }, [API1]);

  useEffect(() => {
    fetchData(API2, setUserData);
  }, [API2]);

  if (isLoading) {
    return (
      <div className="container mt-4">
        <h1>Loading......</h1>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      {postdata.map((post) => {
       
        const user = userdata.find((u) => u.id === post.userId);

        return (
          <div key={`post-${post.id}`} className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">Name: {user.name}</h2>
              <p className="card-text">Email: {user.email}</p>
              <h2 className="card-title">Post Title: {post.title}</h2>
              <p className="card-text">Post Body: {post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllData;
