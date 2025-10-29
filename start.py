import subprocess
import os

# Paths
base_dir = os.getcwd()
frontend_dir = os.path.join(base_dir, "Webb")
backend_dir = os.path.join(base_dir, "Backend")

frontend = subprocess.Popen(["npm", "run", "dev"], cwd="Frontend")
backend = subprocess.Popen(["node", "server.js"], cwd="Backend")

frontend.wait()
backend.wait()
