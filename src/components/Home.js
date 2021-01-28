import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const [phoneno, setPhoneno] = useState(
    "Hare Krishna Hare Krishna Krishna Krishna Hare Hare , Hare Ram Hare Ram Ram Ram Hare Hare"
  );
  const [chantTitle, setChantTitle] = useState("Chant And Be Happy");
  const [open, setOpen] = useState(false);

  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:7500/bg"
  );

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
        {isPending && (
          <div>
            <CircularProgress />
            Loading....
          </div>
        )}

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
