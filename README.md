<<<<<<< HEAD
# Notes App 📝

A clean, modern, and minimalist React Notes application built with **React 19**, **Vite**, and **Tailwind CSS v4**. It features a balanced responsive layout and a soft sage green, white, and neutral aesthetic designed for focus and productivity.

---

## ✨ Features

- **Create Notes**: Add notes quickly with a title and detailed description.
- **Edit Notes (Modal Component)**: Edit any existing note seamlessly via a dedicated popup modal (`EditModal.jsx`) pre-filled with the note's current title and details.
- **Delete Notes**: Remove unwanted notes instantly with a single click.
- **Modular Component Architecture**:
  - `NoteCard.jsx`: Isolated note card component with title, details, creation date badge, note index (`#1`, `#2`), and action buttons (Edit & Delete).
  - `EditModal.jsx`: Clean, dedicated modal for modifying and updating notes without cluttering the main layout.
- **Recent Notes Board**: View all saved notes organized in clean, responsive cards.
- **Empty State Display**: Displays a neat, user-friendly empty state when no notes have been created yet.
- **Top Navigation Bar**: Sticky header featuring clean branding and icon accents.
- **Modern Soft Green Theme**:
=======
# React Notes App
A responsive Notes App built with React.js and Tailwind CSS, featuring Add, Edit, and Delete functionality. Practicing React Hooks, Props, Component Reusability, State Management, and Conditional Rendering.

# ✨ Features

- Create Notes: Add notes quickly with a title and detailed description.
- Edit Notes (Modal Component): Edit any existing note seamlessly via a dedicated popup modal (`EditModal.jsx`) pre-filled with the note's current title and details.
- Delete Notes: Remove unwanted notes instantly with a single click.
- Modular Component Architecture:
  - `NoteCard.jsx`: Isolated note card component with title, details, creation date badge, note index (`#1`, `#2`), and action buttons (Edit & Delete).
  - `EditModal.jsx`: Clean, dedicated modal for modifying and updating notes without cluttering the main layout.
- Recent Notes Board: View all saved notes organized in clean, responsive cards.
- Empty State Display: Displays a neat, user-friendly empty state when no notes have been created yet.
- Top Navigation Bar: Sticky header featuring clean branding and icon accents.
- Modern Soft Green Theme:
>>>>>>> 653fccc02367f21fc71202c054e6a5e4ed6eb0ff
  - Primary Green: `#6B9B78` & `#527D5E`
  - Soft Accents: `#E8F1E9`
  - Crisp Cards & Page Background: `#FFFFFF` & `#F5F7F5`
  - Contrast Typography: `#343B36` & `#788078`
<<<<<<< HEAD
- **Responsive Layout**: Two-column layout on desktop screens with a sticky note-creation form, smoothly stacking vertically on tablets and mobile screens.
- **Fluid & Accessible Inputs**: Smooth focus rings, comfortable padding, and auto-wrapping text.

---

## 🛠️ Tech Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS v4**
- **Lucide React** (Icons)

---

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── EditModal.jsx    # Separate modal component for editing notes
│   └── NoteCard.jsx     # Reusable note item component with edit & delete actions
├── App.jsx              # Main app layout, state & handlers (Add, Delete, Edit)
├── index.css            # Tailwind CSS imports & theme definitions
└── main.jsx             # React root entry point
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```


---

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── EditModal.jsx    # Separate modal component for editing notes
│   └── NoteCard.jsx     # Reusable note item component with edit & delete actions
├── App.jsx              # Main app layout, state & handlers (Add, Delete, Edit)
├── index.css            # Tailwind CSS imports & theme definitions
└── main.jsx             # React root entry point
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
=======
- Responsive Layout: Two-column layout on desktop screens with a sticky note-creation form, smoothly stacking vertically on tablets and mobile screens.
- Fluid & Accessible Inputs: Smooth focus rings, comfortable padding, and auto-wrapping text.

---

# 🛠️ Tech Stack

- React 19
- Vite 8
- Tailwind CSS v4
- Lucide React (Icons)
>>>>>>> 653fccc02367f21fc71202c054e6a5e4ed6eb0ff
