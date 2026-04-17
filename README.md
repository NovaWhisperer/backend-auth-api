

# Backend Auth API

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/NovaWhisperer/backend-auth-api)


A Node.js backend API providing user authentication using Express and MongoDB.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration and login
- JWT-based authentication (token set as cookie)
- MongoDB integration via Mongoose
- Modular route and model structure
- Environment variable support
## Security Notice
Passwords are stored in plain text in this implementation. For any real-world or production use, implement password hashing (e.g., with bcrypt) and follow security best practices.


## Project Structure

```
backend-auth-api/
├── package.json
├── server.js
└── src/
    ├── app.js
    ├── db/
    │   └── db.js
    ├── models/
    │   └── user.models.js
    └── routes/
        └── auth.routes.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
  ```sh
  git clone https://github.com/NovaWhisperer/backend-auth-api.git
  cd backend-auth-api
  ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the required environment variables (see below).

### Running the Server
```sh
npm start
```

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## API Endpoints
| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| POST   | /api/auth/register    | Register a new user     |
| POST   | /api/auth/login       | Login and receive JWT   |

### Example Request Bodies

**Register:**
```
POST /api/auth/register
{
  "username": "yourUsername",
  "password": "yourPassword"
}
```

**Login:**
```
POST /api/auth/login
{
  "username": "yourUsername",
  "password": "yourPassword"
}
```

## Dependencies
- express
- mongoose
- jsonwebtoken
- cookie-parser
- dotenv

## License
This project is licensed under the [MIT License](LICENSE).
