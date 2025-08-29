# Quiz Application

A dynamic and interactive quiz application that allows users to test their knowledge through timed questions. The application provides immediate feedback, tracks user progress, and displays a comprehensive summary of results at the end of the quiz.

## Technologies Used
- React 19
- Vite (Build Tool)
- JavaScript (ES6+)
- CSS for styling and creating responsive design
- ESLint for code quality

## Features
- Interactive quiz interface
- Timer for each question
- Real-time feedback on answers
- Progress tracking
- Final score summary
- Responsive design for all devices
- Clean and intuitive user interface

## Prerequisites
Before you begin, make sure you have the following installed:
- Node.js (version 14.0 or higher)
- npm (Node Package Manager, comes with Node.js)
- Git (for version control)

## Installation
1. Clone the repository
```bash
git clone https://github.com/MinhNhatLuong/quiz-app.git
```

2. Navigate to project directory
```bash
cd quiz-app
```

3. Install dependencies
```bash
npm install
```

## Running the Application
1. Start the development server
```bash
npm run dev
```

2. Open your web browser and visit:
```
http://localhost:5173
```

Additional commands:
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Run linting: `npm run lint`

## Project Structure
```
quiz-app/
├── public/               # Public assets
│   └── quiz-logo.png
├── src/                 # Source code
│   ├── assets/         # Images and static files
│   │   ├── quiz-complete.png
│   │   └── quiz-logo.png
│   ├── components/     # React components
│   │   ├── Answers.jsx        # Answer options component
│   │   ├── Header.jsx         # Application header
│   │   ├── Question.jsx       # Question display
│   │   ├── QuestionTimer.jsx  # Timer component
│   │   ├── Quiz.jsx          # Main quiz component
│   │   └── Summary.jsx        # Results summary
│   ├── App.jsx         # Root component
│   ├── index.css       # Global styles
│   ├── main.jsx        # Entry point
│   └── questions.js    # Quiz questions data
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration

```

## Contributing
We welcome contributions to improve the Quiz Application! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/YourAmazingFeature
```
3. Commit your changes
```bash
git commit -m 'Add some amazing feature'
```
4. Push to the branch
```bash
git push origin feature/YourAmazingFeature
```
5. Open a Pull Request

Please make sure your code follows the existing style and includes appropriate tests.

## Contact

MinhNhatLuong - [GitHub Profile](https://github.com/MinhNhatLuong)

Project Link: https://github.com/MinhNhatLuong/quiz-app
