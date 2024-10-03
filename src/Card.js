export default function Card({ info, number }) {
  if (info && info.cards && Array.isArray(info.cards)) {
    const selectedCard = info.cards[number];

    const imageUrl = `https://res.cloudinary.com/dl3igr9lc/image/upload/v1727737532/Tarot%20Cards/${selectedCard.img}.jpg`;

    return (
      <article className="pages" aria-labelledby={`card-name-${number}`}>
        <section className="card-section">
          <h1 id={`card-name-${number}`} className="card-name">
            {selectedCard.name}
          </h1>
          <figure>
            <img
              className="tarot-display-img"
              src={imageUrl}
              alt={selectedCard.name || "Tarot card image"}
            />
          </figure>
        </section>
        <section className="fortune-section">
          {selectedCard.fortune_telling &&
          Array.isArray(selectedCard.fortune_telling) ? (
            <ul>
              {selectedCard.fortune_telling.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          ) : (
            <p role="alert">Fortune-telling information not available.</p>
          )}
        </section>
      </article>
    );
  } else {
    console.error("info or info.cards is not defined.");
    return <p>Data not available.</p>;
  }
}
