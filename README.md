# 🧑‍💻 Product Management Web App (CRUD with JSON Server)

This project is a simple web application that lets you **Create**, **Read**, **Update**, and **Delete** products using a fake server called **JSON Server**.

🗂️ The app uses:
- **HTML** to build the page.
- **CSS** to add a clean and modern design.
- **JavaScript** to connect with the server and manage logic.

---

## ✅ What can you do?

- ✅ Add a new product (name + price)
- ✅ See a list of all products
- ✅ Edit any product (name and price)
- ✅ Delete a product
- ✅ Prevent adding **duplicate products** (even if uppercase/lowercase is different)
- ✅ Enjoy a responsive and styled layout with a **background image**

---

## 🔧 How to use the project

### 1. Install JSON Server

You need **Node.js** installed.

Then, open a terminal and run:

```bash
npm install -g json-server
```

### 2. Create the `db.json` file

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

In the same folder where `db.json` is located, run:

```bash
json-server --watch db.json
```

This will start a fake API at `http://localhost:3000`.

### 4. Open the app

Open the file `index.html` in your browser.

You can now:
- ✅ Add products using the form
- ✏️ Edit them with the button
- 🗑️ Delete them easily
- 🚫 Get a warning if you try to add the same product again (even with different letter case)

---

## 📁 Files

- `index.html` – Main page with the structure
- `frontend.js` – JavaScript with all the logic
- `public/style.css` – Styled layout with background image
- `db.json` – Fake product database

---

## 🧠 Learn and Practice

This project helps you learn and practice:

- Using **HTML forms**
- Making API calls with the **Fetch API**
- Implementing full **CRUD functionality**
- Validating user input
- Handling duplicate data
- Writing clean **JavaScript functions**
- Organizing files for a real project structure

---

Made for learning and practice with 💻 & ❤️
