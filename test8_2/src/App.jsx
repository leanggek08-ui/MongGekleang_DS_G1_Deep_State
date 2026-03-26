import React, { useState } from "react";
import Joke from "./Joke";

export default function App() {
  const jokes = [
    { id: 1, text: "Why was the math book sad? Because it had too many problems" },
    { id: 2, text: "Why was the computer cold? Because it left its Windows open" },
    { id: 3, text: "Why did the banana go to the doctor? Because it wasn't peeling well!" },
  ];

  // Track which joke is selected
  const [selectedJokeId, setSelectedJokeId] = useState(null);

  return (
    <div>
      <h1>Vietnamese Jokes</h1>

      {jokes.map((joke) => (
        <div
          key={joke.id}
          style={{
            backgroundColor: joke.id === selectedJokeId ? "lightblue" : "white",
            padding: "10px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedJokeId(joke.id)}
        >
          <Joke id={joke.id} text={joke.text} />
        </div>
      ))}
    </div>
  );
}