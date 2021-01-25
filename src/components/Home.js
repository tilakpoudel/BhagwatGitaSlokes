import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [phoneno, setPhoneno] = useState(
    "Hare Krishna Hare Krishna Krishna Krishna Hare Hare , Hare Ram Hare Ram Ram Ram Hare Hare"
  );
  const [chantTitle, setChantTitle] = useState("Chant And Be Happy");
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("  http://localhost:7500/bg")
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "OOps :( Could not fetch the data... Something went wrong.."
            );
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setisPending(false);
          setError(null);
        })
        .catch((error) => {
          setisPending(false);
          setError(error.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="homepage">
      <h2> {chantTitle} </h2>
      <div className="marqueDiv">
        <marquee
          width="100%"
          direction="left"
          height="100px"
          behaviour="scroll"
          scrollamount="5"
          height="50px"
        >
          <em>
            <b>{phoneno}</b>
          </em>
        </marquee>
      </div>

      <div>
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && (
          <BlogList
            blogs={blogs}
            title="Chapter 1 : Observing the Armies on the Battlefield of Kurukṣetra"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
