# 🎬 **Review Arena App** 🎬

The **Review Arena App** is a platform where users can submit, view, and manage movie reviews. Admins can handle users, reviews, and messages through the **Admin Dashboard**. Built with **React**, **Node.js**, and **MongoDB**, the app provides a seamless experience for both admins and users.

![Review Arena](https://img.shields.io/badge/Review%20Arena%20App-React%20%7C%20Node.js%20%7C%20)

---

## 🚀 Features

- **User Dashboard**: Users can submit movie reviews.
- **Admin Dashboard**: Admins can manage users, delete reviews, and handle messages.
- **Backend**: Mock data served using **json-server**.

---

## 🛠️ Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, json-server (for mock API)
- **Database**: Mock data with **db.json** for testing

---

## 🏁 Getting Started

To run this project locally, follow these steps:

### 1. Fork and Clone the Repository

- Fork this repository to your GitHub account.
- Clone the forked repository to your local machine:

```bash
git clone git@github.com:AshishS2407/Review-Arena.git

```

### 2.Install Dependencies for UI
- navigate to ui directory:

```bash
cd ui
```
- Install the necessary dependencies:

```bash
npm install
```
### 3. Run the Frontend
-Start the frontend development server:

```bash
npm run dev
```
### 4. Run the   Backend
-Open Terminal in new window:
-Navigate to the root project and start json-server.

```bash
npx json-server --watch db.json --port 5000
```



