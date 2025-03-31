# juliakocevasV2

This is a rework for my sisters website. I will redo it with React (Vite), Express, NodeJs &amp; Tailwind CSS.

# Table of Contents

- [Frontend Setup](#frontend-setup)
  - [Create the Vite React Project](#create-the-vite-react-project)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Project Locally](#running-the-project-locally)
- [DevOps](#devops)

---

### Frontend Setup

I created a new repo on my github.
Inside the new repo I created a **frontend** folder. For now that will suffice, I might add a backend folder later, depending on the need for the project.

Before we begin we need to check if we have Node.js installed.

**What is Node.js?**

Node.js is a runtime environment that allows you to execute JavaScript on the server-side. Unlike JavaScript running in the browser, Node.js provides a way to build scalable network applications using the same language you use for frontend development. It’s important to note that Node.js isn’t part of JavaScript—it’s a separate installation that brings server capabilities to JavaScript. You can download it from the official Node.js website.

Verify the installation with:

```bash
node -v
npm -v
```

#### Create the Vite React Project

To create a React project with Vite (https://vite.dev/guide/).

Cd into the frontend folder, open a terminal and type:

```bash
npm create vite@latest .
```

Options that I chose: **JavaScript** and **React**.

---

#### Installing Dependencies

Let us now take a look at all the dependencies we will need for the project.

(More dependencies might be added later but for now we start with these).

We will use:

```
Express (https://expressjs.com/)
TailwindCSS (https://tailwindcss.com/)
```

To install Express:

```bash
npm install express
```

To install TailwindCSS (please follow the official guide if things change):

```bash
npm install tailwindcss @tailwindcss/vite
```

I am also using Tailwind Plus and it depends on:

```bash
npm install @headlessui/react @heroicons/react
```

Configure the Vite plugin (**_vite.config.ts_**):

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Import Tailwind CSS:

Add an `@import` to your CSS file that imports Tailwinds CSS.

```bash
@import "tailwindcss";
```

---

#### Running the Project Locally

Cd into **frontend** folder and:

```
npm run dev
```

---

### DevOps

#### 🧠 TLDR: What is DevOps?

**DevOps** is a combination of **Development** and **Operations**. It’s a cultural and technical approach to software development that aims to:

- 🚀 Deliver software **faster** and **more reliably**
- 🔁 Automate the **build → test → deploy** lifecycle
- 🤝 Improve collaboration between devs and sysadmins
- 📦 Use tools like **Docker**, **Kubernetes**, **CI/CD**, and **cloud platforms** like GCP or AWS

In this project, DevOps plays a key role in:

- Creating **Docker images** for deployment
- Pushing images to **Docker Hub**
- Using **Docker Compose** for local service orchestration
- Preparing the project for **cloud deployment (GCP + Kubernetes)**

---

#### 🐳 Pushing Our Docker Image to Docker Hub

We use **Docker** to containerize our frontend project, which lets us build and run the website consistently across environments.

##### Step 1: Log in to Docker Hub

```bash
docker login
```
