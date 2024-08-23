# RapidQuest Assignment

## Overview

RapidQuestAssignment is a MERN (MongoDB, Express, React, Node.js) full-stack application. This project demonstrates the integration of a backend with Node.js, Express, and MongoDB with a frontend developed using Vite and React.

## Project Structure

- `backend/`: Contains the Node.js and Express server with MongoDB integration.
- `frontend/`: Contains the Vite-based React application.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or a cloud instance)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**

   git clone git@github.com:Absar11/RapidQuest_Assignment.git
   cd RapidQuest_Assignment

2- Backend Setup

Navigate to the backend directory: cd backend
Install backend dependencies: npm install
Create a .env file in the backend directory with the following content:

env
MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the backend server: npm start


3- Frontend Setup

Navigate to the frontend directory: cd ../frontend

Install frontend dependencies: npm install

Start the frontend development server: npm run dev

The frontend should now be available at http://localhost:5173

Usage
Backend: The server listens on port 5000 (or another port specified in the .env file) and handles API requests, interacting with MongoDB.
Frontend: The Vite development server provides a React application that communicates with the backend API.


Ensure that your MONGO_URI and other environment variables are correctly configured on your deployment platform.

Contact
For any questions or feedback, please contact:

Email: siddiqui.mr10@gmail.com

