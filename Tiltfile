# Send built images to minikube's own in-cluster registry (enabled via
# `minikube addons enable registry`) instead of Docker Hub. Needed because
# the cluster's runtime is containerd, not docker — containerd can't see
# images sitting in the host's Docker daemon, so they have to actually be
# pulled from somewhere. See it-business/tools/k8s/k8s.md for the full
# explanation of why.
default_registry('localhost:5000')

allow_k8s_contexts('minikube')

# --- Docker Builds ---
docker_build(
    ref='frontend-image',
    context='.',
    dockerfile='infra/development/Docker/frontend.Dockerfile',
    # Only the frontend + dev infra matter; keeps local `npm run build`
    # output and node_modules from triggering pointless rebuilds.
    only=['frontend', 'infra/development/Docker'],
    ignore=['frontend/node_modules', 'frontend/dist'],
)

# --- K8s resources ---
k8s_yaml([
    'infra/development/K8s/frontend-deployment.yaml',
    'infra/development/K8s/frontend-service.yaml',
])

# --- Tilt UX ---
# Site at http://localhost:8080. Waits for the registry tunnel so the first
# image push doesn't race it.
k8s_resource(
    'frontend',
    port_forwards=['8080:8080'],
    resource_deps=['registry-pf'],
)

# Tunnels localhost:5000 (where `docker push` sends built images) to the
# in-cluster registry Service. The cluster's own containerd pulls the same
# `localhost:5000/...` reference via the registry-proxy DaemonSet, which
# listens on each node's own local port 5000 — same address, two different
# local processes, each valid from its own side. See k8s.md for why this
# works.
local_resource(
    'registry-pf',
    serve_cmd='kubectl -n kube-system port-forward svc/registry 5000:80',
    allow_parallel=True,
    readiness_probe=probe(
        period_secs=2,
        tcp_socket=tcp_socket_action(port=5000),
    ),
)
