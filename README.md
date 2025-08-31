# Word Helper

Word Helper is a full-stack web application that provides intelligent word autocorrection using a custom dictionary stored in MongoDB. It leverages edit distance algorithms to suggest the closest matching word from a large dictionary.

## Features

- **Autocorrect API:** Suggests the most likely correct word for a given input using edit distance.
- **Custom Dictionary:** Uses a MongoDB collection of words (e.g., Oxford 5000) as the source for suggestions.
- **Efficient Filtering:** Only compares with relevant candidate words to ensure fast responses.
- **Frontend & Backend:** Built with React (frontend) and Node.js/Express (backend).

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB (local or cloud)

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/word-helper.git
cd Word-Helper-main
```

#### 2. Backend Setup

```sh
cd backend
npm install
```

- Create a `.env` file in the `backend` directory with your MongoDB URI:
  ```
  MONGO_URI=mongodb://localhost:27017/wordhelper
  ```

- Seed the database with dictionary words:
  - Place your word list (e.g., `Oxford 5000.txt`) in `backend/txt/`.
  - Run the seeder:
    ```sh
    node seedWords.js
    ```

- Start the backend server:
  ```sh
  npm start
  ```
  The backend runs on [http://localhost:8080](http://localhost:8080).

#### 3. Frontend Setup

```sh
cd ../frontend
npm install
npm run dev
```
The frontend runs on [http://localhost:5173](http://localhost:5173).

## API Usage

- **POST** `/api/autocorrect`
  - **Body:** `{ "word": "appl" }`
  - **Response:** `{ "suggestion": "apple" }`

## Project Structure

```
Word-Helper-main/
  backend/
    models/
    routes/
    services/
    config/
    txt/
    seedWords.js
    .env
    index.js
  frontend/
    src/
    public/
```

## Technologies Used

- **Backend:** Node.js, Express, Mongoose, MongoDB
- **Frontend:** React, Vite
- **Other:** dotenv

## License

MIT

---

*Made with ❤️ for word lovers and language learners!*