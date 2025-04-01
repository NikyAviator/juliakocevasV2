# juliakocevasV2

This is a rework of my sister’s website. I will rebuild it using **React (Vite)**, **Express**, **Node.js**, and **Tailwind CSS**.

---

## Table of Contents

- [Frontend Setup](#frontend-setup)
  - [What is Node.js?](#what-is-nodejs)
  - [Create the Vite React Project](#create-the-vite-react-project)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Project Locally](#running-the-project-locally)
- [DevOps](#devops)
  - [Docker Quick Reference](#docker-quick-reference)
  - [Creating and Pushing Images to Docker Hub](#creating-and-pushing-images-to-docker-hub)
  - [Docker Compose Integration](#docker-compose-integration)

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
Express (https://expressjs.com/) 🚅
TailwindCSS (https://tailwindcss.com/)🌬️✈️
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
- 📦 Use tools like **Docker**, **Kubernetes**, **CI/CD**, and **cloud platforms** like GCP or AWS. We will use GCP.

In this project, DevOps plays a key role in:

- Creating **Docker images** for deployment
- Pushing images to **Docker Hub**
- Using **Docker Compose** for local service orchestration
- Preparing the project for **cloud deployment (GCP + Kubernetes)**

#### Docker Quick Reference:

🐋 Docker Quick Reference
Here's a list of useful Docker commands (great for refreshing your memory):

| Command                             | Description                                               |
| ----------------------------------- | --------------------------------------------------------- |
| `docker build -t name .`            | Build image from Dockerfile                               |
| `docker images`                     | List all local Docker images                              |
| `docker ps`                         | List running containers                                   |
| `docker ps -a`                      | List all containers (running & stopped)                   |
| `docker run -p 8080:80 image-name`  | Run a container and map ports                             |
| `docker run --rm -it image-name sh` | Run container interactively (with shell) + --rm           |
| `docker stop container-name`        | Stop a running container                                  |
| `docker rm container-name`          | Remove a stopped container                                |
| `docker rmi image-name`             | Delete an image                                           |
| `docker system prune`               | Delete all stopped containers, dangling images, and cache |

---

### Creating and Pushing Images to Docker Hub

We use **Docker** to containerize our frontend project, which lets us build and run the website consistently across environments.

#### 👉 Step 0: Log in to Docker Hub

```bash
docker login
```

You’ll be prompted to enter your Docker Hub username and password (or personal access token).

---

#### 👉 Step 1: Build the Image from Latest Source Code

To build a Docker image based on your current project files and Dockerfile:

```bash
docker build -t jksite-frontend .
```

🧠 This command:

```md
- Uses the `Dockerfile` in the current directory (`.`)
- Tags the image as **`jksite-frontend`** locally.
```

---

#### 👉 Step 2: Tag the Image

Docker Hub images must follow this format:

```php
<your-username>/<repo-name>:<tag>
```

```bash
docker tag jksite-frontend <your-username>/juliakocevasv2-frontend:v1
```

**OR**

```bash
docker tag jksite-frontend <your-username>/juliakocevasv2-frontend:latest
```

I am doing the latter, with **:latest** tag.

📝 My Docker Hub repo name is the same as my project repo name on GitHub.

---

#### 👉 Step 3: Push the Image to Docker Hub

```bash
docker push <your-username>/juliakocevasv2-frontend:latest
```

After pushing, you can verify and find your image at:
👉 https://hub.docker.com/repositories

---

### Docker Compose Integration

To interact with the **docker-compose-yaml** file, here are some useful commands:

```bash
docker compose up
```

🟢 Builds (if needed) and starts all services (in foreground)

```bash
docker compose up -d
```

🟢 Same as above, but runs in detached (background) mode

```bash
docker compose up --build
```

🔁 Forces a rebuild before starting

```bash
docker compose down
```

🛑 Stops and removes containers, networks, and volumes created

```bash
docker compose stop
```

🛑 Gracefully stops running services, but keeps containers for later

```bash
docker compose start
```

▶️ Restarts previously stopped containers

```bash
docker compose restart
```

🔄 Restarts containers (stop + start in one)

```bash
docker compose logs
```

📜 Shows logs from all containers
