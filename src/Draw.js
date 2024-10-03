export default function Draw({ action }) {
  function getRandomCard() {
    let cardNumber = Math.floor(Math.random() * 57) + 1;
    action(cardNumber);
  }
  return (
    <section class="draw-button-container">
      <button
        class="draw-card-button"
        onClick={getRandomCard}
        type="button"
        aria-label="Draw a random tarot card"
      >
        Draw a Card
      </button>
    </section>
  );
}
