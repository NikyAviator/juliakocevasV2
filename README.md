## Table of Contents

- [My Tech Stack](#my-tech-stack)
- [Running in Development](#running-in-development)
- [Scripts](#scripts)
- [DevOps](#devops)

---

### JKV2

**Front end:**

- React
- Tailwind CSS
- Vite

**DevOps**

- Bash
- Docker
- Kubernetes
- Tilt (K8s for local dev)
- Hosting via GCP (Google Cloud Platform with: Cloud - Triggers -> Build -> Run)

---

### Running in Development

For development environment we use a Tiltfile and Minikube for hosting of our K8s.

To start our cluster, make sure you meet the following prerequisites:

### Prerequisites:

| Tool                                                       | Purpose                                     | Check version              |
| ---------------------------------------------------------- | ------------------------------------------- | -------------------------- |
| [Docker Desktop](https://www.docker.com/) or Docker Engine | Container runtime used by Minikube and Tilt | `docker --version`         |
| [Minikube](https://minikube.sigs.k8s.io/docs/)             | Local single-node Kubernetes cluster        | `minikube version`         |
| [kubectl](https://kubernetes.io/docs/tasks/tools/)         | Kubernetes CLI                              | `kubectl version --client` |
| [Tilt](https://docs.tilt.dev/install.html)                 | Local dev orchestrator                      | `tilt version`             |

---

Before starting stuff, check current docker context & other nice commands:

```bash
docker context ls # To check
docker context use default # To switch (I prefer native dockerd (/run/docker.sock))
docker info # check the stuff you running
```

I recommend setting the following resources in your minikube VM:

```bash
minikube config set driver docker
minikube config set cpus 2
minikube config set memory 4096
minikube config set disk-size 20g
minikube config view # To check the set resources
minikube start
```

#### Known issue: ARP replies disabled inside the node (fix before `enable ingress`)

As of 2026-09, a fresh `minikube start` on this machine boots with
`net.ipv4.conf.all.arp_ignore = 2` inside the node. That setting makes the
kernel refuse to answer ARP requests unless the requester shares a subnet
with the interface being asked — but every pod's gateway is a `/32`
(single-address) interface by design (via `kindnet`, minikube's CNI), which
can never satisfy that check. Result: pods can't even resolve their
gateway's MAC address, so nothing — not `ingress`, not any pod-to-Service
traffic — can reach anywhere. `minikube addons enable ingress` will hang on
"Verifying ingress addon..." and eventually time out if this isn't fixed
first.

**Fix, every time after `minikube start`** (not yet persistent — resets on
every `minikube delete`/reboot):

```bash
minikube ssh -- "sudo sysctl -w net.ipv4.conf.all.arp_ignore=0"
```

Full root-cause writeup (packet captures, how this was actually found, and
why): `it-business/tools/k8s/k8s.md`, Case study 1.

---

Then enable ingress addons in minikube:

```bash
minikube addons enable ingress
```

Registry setup — required, any driver (containerd runtime)
This part is not optional and not specific to any one driver — minikube's node runtime is containerd (Kubernetes removed support for Docker as an in-cluster runtime a while back), and containerd cannot see images sitting in your host's own Docker daemon. Without this step, tilt up fails with docker push: ... denied: requested access to the resource is denied — it's silently trying to push to Docker Hub's reserved library/ namespace, since no registry is configured.

The fix is the officially-supported one, not a workaround: minikube ships its own in-cluster registry addon specifically for this, and Tilt has a built-in default_registry(...) function made to point at exactly this kind of registry.

minikube addons enable registry

Already wired into this project's Tiltfile:

default_registry('localhost:5000')

local_resource(
'registry-pf',
serve_cmd='kubectl -n kube-system port-forward svc/registry 5000:80',
allow_parallel=True,
)

Why localhost:5000 works identically for both the push (from your host) and the pull (from inside the cluster) despite being two different processes: your host's kubectl port-forward tunnels its own localhost:5000 straight to the registry Service; separately, the addon also runs a registry-proxy on the node itself, listening on that node's own localhost:5000, forwarding to the same registry. Same address, resolved locally and correctly on both ends. Full explanation: it-business/tools/k8s/k8s.md.
