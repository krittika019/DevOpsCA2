# Task 2 – Configuration Management with Ansible

Configures a server's runtime environment: packages, users/groups, files/templates, nginx service.

| File | Purpose |
|---|---|
| `site.yml` | Playbook |
| `inventory.ini` | Inventory (host group `appservers`) |
| `group_vars/all.yml` | Variables (user, paths, packages, `.env` values) |
| `templates/` | Jinja2 templates for `.env` and the nginx reverse proxy |
| `lab/` | Docker lab: `control` (Ansible) + `appserver` (Ubuntu 24.04 + SSH) |

## Run

```bash
cd devops/ansible/lab
docker compose up -d --build
docker compose exec control ansible-playbook site.yml   # 1st run: changes applied
docker compose exec control ansible-playbook site.yml   # 2nd run: changed=0 (idempotent)
```

Verify on the target:

```bash
docker compose exec appserver bash -c 'id deploy; ls -la /opt/symbiconnect; cat /opt/symbiconnect/.env; nginx -v'
```

Note: the lab uses a root password for SSH; use SSH keys and `ansible-vault` for real hosts.
