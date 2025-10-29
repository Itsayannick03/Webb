import subprocess
import os
import platform

# Paths
base_dir = os.getcwd()
system = platform.system()
if platform.system() == "Windows":
    frontend = subprocess.Popen('cmd /c start cmd /k "cd Frontend && npm run dev"', shell=True)
    backend = subprocess.Popen('cmd /c start cmd /k "cd Backend && node server.js"', shell=True)
elif system in ("Linux", "Darwin"):
    frontend = subprocess.Popen(["npm", "run", "dev"], cwd="Frontend")
    backend = subprocess.Popen(["node", "server.js"], cwd="Backend")
else:
    print("OS not supported")
    exit()



frontend.wait()
backend.wait()
