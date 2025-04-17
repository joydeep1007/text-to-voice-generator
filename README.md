# Text-to-Speech Converter

A simple and elegant web application that converts text input into speech using Flask and Web Speech API.

## Features

- Clean and modern glass-morphism UI design
- Real-time text-to-speech conversion
- Responsive layout that works on all devices
- Smooth animations and transitions
- Easy to use interface

## Technologies Used

- Python (Flask)
- HTML5
- CSS3 (with modern features like backdrop-filter)
- JavaScript (Web Speech API)
- Google Fonts (Poppins)

## Setup

1. Clone the repository
2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install flask
   ```
4. Run the Flask application:
   ```
   python app.py
   ```
5. Open http://localhost:5000 in your browser

## Usage

1. Enter your text in the textarea
2. Click the "Speak Text" button to hear the text spoken aloud
3. To stop the current speech, simply click the button again with new text

## Browser Support

This application works best in:
- Google Chrome
- Microsoft Edge
- Safari
- Firefox

## Project Structure

```
├── app.py           # Flask application
├── static/          # Static assets
│   ├── css/         # Stylesheets
│   ├── js/         # JavaScript files
│   └── images/     # Image assets
├── templates/       # HTML templates
│   └── index.html
├── requirements.txt # Python dependencies
└── .gitignore      # Git ignore configuration
```

## Notes

- The Web Speech API requires an internet connection
- Speech quality may vary depending on the browser and system settings
- Flask development server should not be used in production

## License

MIT License - feel free to use this project for personal or commercial purposes.
