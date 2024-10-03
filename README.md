# Tarot Card App - Book O' Tarot

Welcome to **Book O' Tarot**, a web-based tarot card reading app that allows users to randomly draw a tarot card and receive insight into their fortune. This project demonstrates a basic React app with a focus on delivering tarot card reading functionality. Each card provides a name, an image, and a fortune-telling message associated with it.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Accessibility Considerations](#accessibility-considerations)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**Book O' Tarot** is a fun, interactive web app that simulates the experience of drawing a tarot card and discovering a fortune based on the card's meaning. It can be used for entertainment purposes or as a tool to learn about different tarot cards and their significance. The app uses React to render components and update the UI dynamically based on user interaction.

## Features

- **Random Tarot Card Draw**: Users can randomly draw a tarot card and see its name, image, and a fortune-telling message.
- **Fortune Telling**: Each tarot card contains an array of possible fortunes, providing a variety of readings.
- **Responsive Design**: The app is responsive and works across various devices, including desktop, tablet, and mobile.
- **Dynamic Content Rendering**: The app fetches tarot card information and dynamically updates the card display based on user interaction.
- **Accessible**: Efforts have been made to improve accessibility for screen readers and keyboard users (detailed below).

## Usage

You can try the app live by visiting the following link:

**[Live Demo of Book O' Tarot](https://codesandbox.io/p/sandbox/tarot-card-draw-l5zpqg)**

Once the app is running:
1. Click the "Draw a Card" button to randomly select a tarot card from the deck.
2. The card's name, image, and fortune will be displayed.
3. You can click the button again to draw a different card.

## Technologies Used

- **React**: Front-end JavaScript framework for building user interfaces.
- **HTML5 & CSS3**: For basic structure and styling.
- **JavaScript (ES6+)**: For app logic and interactivity.
- **Cloudinary**: Used for storing and serving tarot card images.
- **ARIA & Semantic HTML**: To improve accessibility for screen readers and assistive technologies.

## Accessibility Considerations

Accessibility is important for this project, and here are the steps taken to improve it:

- **Semantic HTML**: The app uses semantic elements like `<header>`, `<main>`, `<section>`, and `<h1>` to help screen reader users understand the structure of the page.
- **Alt Text for Images**: All tarot card images have `alt` attributes that describe the image content, allowing screen readers to convey the card's meaning to visually impaired users.
- **Keyboard Navigation**: The app ensures that all interactive elements (e.g., buttons) are focusable and usable via the keyboard.
- **ARIA Attributes**: When dynamic content changes, like when a card is drawn, we use ARIA attributes such as `aria-live="polite"` to notify screen readers about updates.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

Please ensure that your code follows our style guidelines and passes all tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
