import React, { useEffect, useState } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [loading, setLoading] = useState(false);
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error Fetching joke", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div className="container">
      <h1>Random jokes</h1>
      <div className="inner-container">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </>
        )}
      </div>
      <div>
        <button className="generate" onClick={fetchJoke}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default RandomJoke;
