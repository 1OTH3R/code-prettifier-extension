<img src="https://i.ibb.co/VYQNN1G4/icon.png"  alt="Icon" width="200" height="200" style="vertical-align: middle; margin-right: 10px;">
<h1 style="font-size: 32px; font-weight: bold; vertical-align: middle;"> Code Prettifier Chrome Extension </h1>

A sleek, dark-mode Chrome extension that lets you **prettify and format code** right from your browser popup using [Prettier v3.5.3](https://prettier.io/). Supports JavaScript, HTML, CSS, and JSON — with a modern UI built for simplicity.

---

<h2>✨ Features</h2>

- ✅ Supports **JavaScript**, **HTML**, **CSS**, and **JSON**
- 🎨 Modern, clean **dark mode** with deep blue vibes (similar to this, now that I notice)
- ⚙️ Uses **Prettier v3.5.3** under the hood (fully offline)
- 🧠 Easy-to-use dropdown & real-time formatting
- 📦 No external internet requests — secure & local

---

<h2>🚀 How to Install</h2>

1. **Clone or download this repo, then...**
   - Click the green `Code` button → `Download ZIP`
   - Or clone via terminal:
     ```bash
     git clone https://github.com/1OTH3R/code-prettifier-extension.git
     ```
   - Make sure to extract it anywhere on your device that you know you can keep it safe.

2. **Go to** `chrome://extensions` in your browser

3. Toggle **Developer mode** (top-right)

4. Click **Load unpacked** and select the folder you just downloaded

5. You’ll now see the Code Prettifier icon in your toolbar 💫

---

<h2>🛠️ How to Use</h2>

1. Click the extension icon 🧼
2. Choose your **code type** (JavaScript, HTML, etc.)
3. Paste your messy code into the first box
4. Hit the **“Prettify”** button
5. Copy the clean, formatted result from the output area

---

<h2>📁 Project Structure</h2>

├── manifest.json<br>
├── popup.html<br>
├── popup.js<br>
<details><summary>├── prettier/<br></summary>
|   ├── standalone.js │<br>
|   ├── parser-html.js │<br>
|   ├── parser-babel.js │<br>
|   ├── parser-postcss.js │<br>
|   └── parser-estree.js<br></details>
└── icon.png
</details>

---

## 📸 Screenshots

> (You can add these later by taking a few screenshots of your extension in use!)

---

## 🧠 Tech Stack

- Vanilla JS + HTML/CSS
- Prettier 3.5.3 (via standalone + plugins)
- Dark Mode UI (custom styled)

---

## 🤝 Contributing

Pull requests welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📝 License

MIT

---

Made with 💙 by [1OTH3R](https://github.com/1OTH3R)
