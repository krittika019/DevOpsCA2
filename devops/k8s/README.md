# Task 3 – Kubernetes (Docker Desktop cluster)

Image: `ghcr.io/krittika019/devopsca2-server` (built and pushed by the GitHub Actions pipeline; the GHCR package must be **public**).

```bash
kubectl apply -f devops/k8s/
kubectl -n symbiconnect rollout status deploy/symbiconnect-server
kubectl -n symbiconnect get pods,svc
kubectl -n symbiconnect port-forward svc/symbiconnect-server 3000:3000   # app on http://localhost:3000
# (the kind-based Docker Desktop cluster does not publish NodePorts to the host)
```

## Rolling update
```bash
kubectl -n symbiconnect set image deploy/symbiconnect-server server=ghcr.io/krittika019/devopsca2-server:<new-sha>
kubectl -n symbiconnect rollout status deploy/symbiconnect-server
kubectl -n symbiconnect rollout history deploy/symbiconnect-server
```

## Failed release and rollback
```bash
kubectl -n symbiconnect set image deploy/symbiconnect-server server=ghcr.io/krittika019/devopsca2-server:does-not-exist
kubectl -n symbiconnect get pods                 # new pod ImagePullBackOff, old pods still Running
kubectl -n symbiconnect rollout undo deploy/symbiconnect-server
kubectl -n symbiconnect rollout status deploy/symbiconnect-server
```
