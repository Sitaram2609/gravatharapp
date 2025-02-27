# Gravatar Profile App

A Node.js web application that allows users to create a profile, fetch their Gravatar details, and display them in a structured card-style UI.

## Features

### ✅ Multi-field profile form:
- **Email** (fetches Gravatar details)
- **Full Name**, **Username**, **Phone Number**, **Location**
- **Personal Website** or **Social Profile URL**
- **Bio/Short Description**

### ✅ Gravatar Integration
- Fetches user’s Gravatar image, username, location, and bio
- Falls back to user-provided details if Gravatar data is unavailable

### ✅ Profile Card UI
- Displays profile image, personal details, contact info, bio, and website link
- Clean and modern design

### ✅ Robust Validations & Error Handling

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (running locally or via a cloud service)
- Git (optional but recommended)

### Steps to Run the Project

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/gravatar-profile-app.git
    cd gravatar-profile-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start MongoDB (if not running already):**

    ```sh
    mongod --dbpath /your/mongodb/data/path
    ```

4. **Start the application:**

    ```sh
    npm start
    ```

5. **Open your browser and visit:**

    ```arduino
    http://localhost:3000
    ```

## Usage
- Fill in the profile form with your email and details.
- The app fetches and displays your Gravatar profile.
- If you update your Gravatar profile, the app reflects changes automatically.

## Tech Stack Used
- **Node.js & Express.js** – Backend framework
- **MongoDB & Mongoose** – Database for storing user profiles
- **EJS** – Templating engine
- **Gravatar API** – Fetching user profile details
- **CSS** – Styling

## Project Folder Structure

    ```bash
    /Gravatar-Profile-App
    │── /public          # Static files (CSS, JS, images)
    │── /routes          # Route handling
    │── /views           # EJS templates (index.ejs, profile.ejs)
    │── app.js           # Main application file
    │── package.json     # Dependencies & scripts
    │── utils/           # Helper functions
    │── README.md        # Documentation
    ```

## Future Enhancements
🔹 Add user authentication (login & signup)  
🔹 Support additional integrations (LinkedIn, GitHub, etc.)  
🔹 Improve UI with animations and responsiveness  
