
# 🧑‍💻 Product Management Web App (CRUD with JSON Server)

This project is a simple web application that lets you **Create**, **Read**, **Update**, and **Delete** products using a fake server called **JSON Server**.

🗂️ The app uses:
- **HTML** to build the page.
- **CSS** to add basic style.
- **JavaScript** to connect with the server.

---

## ✅ What can you do?

- Add a new product (name + price).
- See a list of all products.
- Edit any product.
- Delete a product.

---

## 🔧 How to use the project

### 1. Install JSON Server

You need **Node.js** installed.

Then, open a terminal and run:

```bash
npm install -g json-server
```

### 2. Create `db.json` file

Example content:

```json
{
  "productos": [
    { "id": 1, "nombre": "Laptop", "precio": 1200 },
    { "id": 2, "nombre": "Teclado", "precio": 45 }
  ]
}
```

### 3. Start the server

In the same folder as `db.json`, run:

```bash
json-server --watch db.json
```

This starts a fake API on `http://localhost:3000`.

### 4. Open the app

Just open `index.html` in your browser.

You can:
- Add a product
- Edit it (click ✏️)
- Delete it (click 🗑️)

---

## 📁 Files

- `index.html` – The main page
- `frontend.js` – The JavaScript logic
- `db.json` – The fake product database

---

## 🧠 Learn and Practice

This project helps you learn:

- How to use HTML forms
- How to use Fetch API in JavaScript
- How CRUD operations work
- How to work with fake APIs

---

Made for learning and practice with love ❤️
