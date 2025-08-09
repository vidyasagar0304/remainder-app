# Full-Stack Reminder App

This is a complete full-stack web application that allows users to register, log in, and manage their reminders.

## Features

-   🔐 **Authentication:** Secure user registration and login using JWT.
-   🧠 **Backend API:** A robust REST API built with Node.js and Express.
-   🎨 **Modern Frontend:** A responsive and clean user interface built with React and Tailwind CSS.
-   📝 **Reminder Management:** Users can create, view, and manage their own reminders.
-   🔒 **Protected Routes:** Dashboard and reminder routes are protected and only accessible to logged-in users.

## Tech Stack

-   **Backend:** Node.js, Express.js, MongoDB (with Mongoose), JWT, bcryptjs
-   **Frontend:** React, React Router, Axios, Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed on your system:
-   [Node.js](https://nodejs.org/) (which includes npm)
-   [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

## Setup and Installation

Follow these steps to get the application running locally.

### 1. Backend Setup

First, navigate to the backend directory and set up the server.

```bash
cd backend
```

**Create Environment File:**

Create a `.env` file in the `backend` directory and add your configuration.

```
ATLAS_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_jwt_key_here
```
-   `ATLAS_URI`: Your connection string for your local or cloud-hosted MongoDB database.
-   `JWT_SECRET`: A long, random string used to sign authentication tokens.

**Install Dependencies:**

```bash
npm install
```

**Run the Server:**

```bash
npm start
```
The backend server should now be running on `http://localhost:5000`.

### 2. Frontend Setup

In a new terminal, navigate to the frontend directory.

```bash
cd frontend
```

**Install Dependencies:**

```bash
npm install
```

**Run the React App:**

```bash
npm start
```
The frontend development server should now be running and will open automatically in your browser at `http://localhost:3000`.

---

You should now be able to register a new user, log in, and start adding reminders!
