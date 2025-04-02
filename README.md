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
  - [Kubernetes / K8s](#kubernetes--k8s)

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

---

# Kubernetes / K8s

Now we have dockerized our project, let us take things to the next level by orchestrating and taking full control over our project by diving deep together into the world of K8s!

The official website:

```
https://kubernetes.io/
```

## What is Kubernetes / K8s?

The TLDR is: An open-source system for orchestrating container deployments.
It handles things like:

1. Automatic Deployment
2. Scaling & Load Balancing
3. Management (Monitoring and replacement of containers)

We can and we later will write a **Kubernetes Configuration** that Any Cloud provider or Self Hosted can understand and deploy your end state.

Let us now explain a few **key K8s concepts** that can clarify how all this works:

### 1. Cluster

A **Kubernetes cluster** is a collection of machines (physical or virtual) that work together to run and manage containerized applications. It usually consists of:

- One or more Master Nodes (the control plane).
- One or more Worker Nodes (where your workloads run).

All these nodes communicate with each other, ensuring your applications run as expected, can scale, and are kept in a desired state.

### 2. Nodes

A **node** is a single machine (whether physical server or virtual machine) within a Kubernetes cluster. There are generally two types of nodes:

- Master Node – Responsible for managing and controlling the cluster (the control plane).
- Worker Node – Responsible for running your workloads (the containerized applications).

Nodes have specific Kubernetes processes installed (like the kubelet, container runtime, etc.) that allow them to communicate with the cluster and host containers.

### 3. Master Node

The **Master Node** (also referred to as the Control Plane) controls and manages the entire Kubernetes cluster. It makes decisions about scheduling, scaling, and how workloads are orchestrated. Key components on the master node include:

- **API Server**: The front-end to the Kubernetes control plane. It handles requests from users and tools (CLI, dashboard, etc.) and exposes the Kubernetes API.
- **etcd**: A consistent and highly available key-value store where Kubernetes stores all cluster data.
- **Scheduler**: Determines which node a new pod will be assigned to, based on resource availability and other constraints.
- **Controller Manager**: Runs background processes that handle routine tasks (e.g., ensuring the correct number of pods, dealing with node failures, etc.).

### 4. Worker Node

A **Worker Node** actually runs the applications (containers) defined by your Kubernetes configuration. Key components on each worker node include:

- **kubelet**: An agent that ensures containers run in a pod. It communicates with the API Server, receives instructions, and reports back on pod health and status.
- **Container Runtime**: Responsible for running containers (e.g., Docker, containerd, CRI-O).
- **kube-proxy**: Manages network rules on each node, allowing network communication to and from pods (e.g., load balancing, forwarding requests to correct pods).

### 5. Pods

A **Pod** is the smallest deployable unit in Kubernetes. You can think of it as a wrapper around one or more containers that share:

- A network namespace (they share the same IP address).
- Storage volumes (if configured).
- Configuration such as environment variables.

In most cases, you’ll have **one application container per pod**, but you can also have “sidecar” containers that complement the main container (e.g., a logging or monitoring agent).

### 6. Containers

**Containers** are the actual packages of software that contain your application code and all its dependencies. Kubernetes itself doesn’t create containers; instead, it relies on a **container runtime** (such as Docker or containerd) to run them.

You define container images (e.g., with a Dockerfile).
Kubernetes schedules and manages how many container instances (pods) should run and on which worker nodes.

### 7. Services

A Service in Kubernetes is an abstraction that provides a stable endpoint (IP or DNS name) and load-balancing across a set of pods. Because pods are ephemeral—they can come and go, and their IP addresses can change—Services allow you to expose and communicate with your applications reliably.

- ClusterIP: Exposes the Service internally to the cluster.
- NodePort: Exposes the Service on each node’s IP at a static port.
- LoadBalancer: Exposes the Service externally using a cloud provider’s load balancer.

The primary goal is to decouple where pods are running from how other services or external clients find and access them.

### Putting it All Together

1. You (or your CI/CD system) define container images and specify how many replicas (pods) you need.
2. The **Master Node** (control plane) schedules these pods to run on the **Worker Nodes**.
3. Each **Pod** runs one or more **Containers**.
4. You create a **Service** to provide a stable network endpoint to these pods and to load-balance traffic among them.

---

# Installing Kubernetes locally

When learning Kubernetes, it’s often easiest to run everything locally on your computer. On Arch Linux (or EndeavourOS, Manjaro, etc.), there are multiple ways to spin up a local K8s cluster. Below are a few popular options:

1. Minikube – The most commonly used local K8s setup.
2. k3s – A lightweight Kubernetes distribution from Rancher.
3. MicroK8s – A Canonical-developed lightweight K8s option.

We will use Minikube to host the website locally on a cluster on your computer before we host it on any Cloud Provider (GCP in this case).

Always refer to the Arch Wiki & Minikube docs when in doubt about the installation etc:

```
https://wiki.archlinux.org/title/Kubernetes
```

```
https://minikube.sigs.k8s.io/docs/
```

Kubernetes Distributions (Alternatives):

```
https://github.com/mikucat0309/awesome-kubernetes-distro
```

```
https://nubenetes.com/matrix-table/
```

---
