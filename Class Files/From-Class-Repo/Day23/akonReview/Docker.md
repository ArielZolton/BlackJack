# 🚀 Guide: Create and Run a Colored Node.js Console App in Docker

---

## 📁 Step 1: Create Your Project Directory

```bash
mkdir docker-color-demo
cd docker-color-demo
```

---

## 📆 Step 2: Initialize Node.js Project

```bash
npm init -y
```

---

## 🎨 Step 3: Install `chalk` (v4 for CommonJS)

```bash
npm install chalk@4
```

> We use version 4 to support `require()` in CommonJS.

---

## 📝 Step 4: Create `index.js`

Create a file called `index.js`:

```js
// index.js
const chalk = require('chalk');
chalk.level = 3; // Force full color output

console.log(chalk.green('✅ Hello from Docker with colors!'));
console.log(chalk.blue.bold('This is a bold blue message.'));
console.log(chalk.bgMagenta.white('🎉 Docker + Node.js + Chalk!'));
```

---

## 📄 Step 5: Update `package.json` Script

In `package.json`, add a `start` script:

```json
"scripts": {
  "start": "node index.js"
}
```

---

## 📂 Step 6: Create `.dockerignore`

To prevent copying `node_modules` and unnecessary files into the Docker image, create a file named `.dockerignore`:

```
node_modules
Dockerfile
.dockerignore
```

---

## 🐳 Step 7: Create the `Dockerfile`

Create a file named `Dockerfile` (no extension):

```Dockerfile
# Use Node.js base image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Start app
CMD ["npm", "start"]
```

---

## 💠 Step 8: Build the Docker Image

In your terminal (same folder as the Dockerfile):

```bash
docker build -t docker-color-demo .
```

* `-t docker-color-demo`: tags the image with a name
* `.`: current directory as build context

---

## ▶️ Step 9: Run the Container

Run with a pseudo-TTY so colors are shown:

```bash
docker run -it --rm docker-color-demo
```

* `-it`: interactive terminal (needed for color output)
* `--rm`: remove container after it exits

Expected output:

```
✅ Hello from Docker with colors!
This is a bold blue message.
🎉 Docker + Node.js + Chalk!
```

---

## 🔍 Bonus: Name Your Container (Optional)

```bash
docker run --name my-colored-app -it docker-color-demo
```

To clean up:

```bash
docker rm my-colored-app
```

---

## 🐳 Extra: View Output in Docker Desktop

1. Run the container as above
2. Open **Docker Desktop**
3. Click on **Containers** tab
4. Click on your container (e.g., `my-colored-app`)
5. View **Logs** or open the **Terminal**

---

## 🧼 Clean Up

List and remove the image if needed:

```bash
docker images            # List images
docker rmi docker-color-demo  # Remove the image
```

---

Happy Dockering! 🌟
