import { useState, useEffect } from "react";
import Draw from "./Draw";
import Title from "./Title";
import Card from "./Card";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState({});
  function fetchCardInfo() {
    const url =
      "https://raw.githubusercontent.com/KalifByrd/Tarot-Deck-API/main/tarot-images.json";
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r));
  }

  useEffect(fetchCardInfo);
  return (
    <div className="App">
      <header>
        <Title name="Book O' Tarot" />
      </header>
      <main>
        <section className="parent-container">
          <section
            className="tarot-container"
            aria-labelledby="card-section-title"
          >
            <Card info={data} number={number} />
          </section>
        </section>

        <section className="draw-section">
          <Draw action={setNumber} aria-label="Draw a random tarot card" />
        </section>
      </main>
    </div>
  );
}
