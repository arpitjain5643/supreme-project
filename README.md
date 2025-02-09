# **Supreme Group Website \- Frontend Implementation**

🚀 **Live Demo:** `https://supreme-group.netlify.app/`  
🔗 **GitHub Repository:** `https://github.com/arpitjain5643/supreme-project.git`

---

## **📌 Table of Contents**

* 📖 Overview  
* 🛠 Tech Stack  
* 🚀 Project Setup  
* 🧩 Component-Based Architecture  
* ⚡ Lazy Loading Implementation  
* ♿ Accessibility (WCAG & ARIA)  
* 🚀 Performance Optimization  
* 📏 Coding Standards  
* 🧪 Testing Implementation  
* 📌 Challenges & Learnings  
* 🔮 Future Enhancements

---

## **📖 Overview**

This project is a **frontend implementation** of the **Supreme Group website**, based on the provided **Figma design**. The primary objective was to create a **performant, accessible, and maintainable** React-based application while following **modern best practices**.

### **✅ Key Features**

✔️ **Built using React & TypeScript** for type safety and maintainability.  
✔️ **Tailwind CSS** for efficient styling.  
✔️ **Lazy Loading** for performance optimization.  
✔️ **Component-Based Architecture** for modularity.  
✔️ **WCAG & ARIA** compliance for accessibility.  
✔️ **ESLint Rules** enforced for consistent coding practices.  
✔️ **Testing** implemented for reliability.  
✔️ **Responsive Design** for various screen sizes.

---

## **🛠 Tech Stack**

| Technology | Purpose |
| ----- | ----- |
| `React (with TypeScript)` | Frontend Framework |
| `Vite` | Build Tool for Fast Development |
| `Tailwind CSS` | Utility-First Styling |
| `ESLint` | Code Quality & Linting |
| `Jest & React Testing Library` | Unit Testing |
| `ARIA & WCAG Standards` | Accessibility Compliance |

---

## **🚀 Project Setup**

### **🔹 Prerequisites**

Ensure you have the following installed before starting:

* `Node.js` (v16+ recommended)  
* `npm` or `yarn`

### **🔹 Installation & Running the Project**


`# Clone the repository`  
`git clone [GitHub Repository Link]`

`# Navigate to the project directory`  
`cd supreme-group-frontend`

`# Install dependencies`  
`npm install   # or yarn install`

`# Start the development server`  
`npm run dev   # or yarn dev`

### **🔹 Testing and Linting **

`# Run test cases and code coverage`  
`npm run test   # or yarn dev`

`#run lint command `  
`npm run lint`

`# Fix lint issue(fixables)`  
`npm run lint:fix`
---

## **🧩 Component-Based Architecture**

This project follows a **modular component-based structure** to ensure **maintainability and scalability**.

### **📂 Folder Structure**

bash  
CopyEdit  
`📦 src`  
 `┣ 📂 components    # Reusable UI Components`  
 `┣ 📂 Tests         # Test cases for Componenets`  
 `┣ 📜 App.tsx       # Main Application Entry`  
 `┗ 📜 index.tsx     # Root File`

---

## **⚡ Lazy Loading Implementation**

To improve **performance** and **reduce initial load time**, **lazy loading** was implemented using `React.lazy` and `Suspense`.

### **📌 Example: Lazy Loading Components**

tsx  
CopyEdit  
`import React, { Suspense } from "react";`  
`import { LoadingScreen } from "./components/LoadingScreen";`

`const Navbar = React.lazy(() => import("./components/Navbar"));`  
`const HeroSection = React.lazy(() => import("./components/Hero"));`  
`const VehicleSection = React.lazy(() => import("./components/VehicleSection"));`  
`const ContactSection = React.lazy(() => import("./components/ContactSection"));`  
`const Footer = React.lazy(() => import("./components/Footer"));`

`function App() {`  
  `return (`  
    `<Suspense fallback={<LoadingScreen />}>`  
      `<div className="relative">`  
        `<Navbar />`  
        `<main id="main-content" aria-live="polite">`  
          `<HeroSection />`  
          `<VehicleSection />`  
          `<ContactSection />`  
        `</main>`  
        `<Footer />`  
      `</div>`  
    `</Suspense>`  
  `);`  
`}`

`export default App;`

---

## **♿ Accessibility (WCAG & ARIA)**

This project follows **Web Content Accessibility Guidelines (WCAG)** and **ARIA (Accessible Rich Internet Applications)** best practices to ensure inclusivity.

### **✅ Implemented Accessibility Features:**

* **Semantic HTML elements** for better screen reader support.  
* **ARIA attributes** for interactive elements.  
* **Keyboard navigation support** for a seamless user experience.

### **📌 Example: Accessible Contact Form**

tsx  
CopyEdit  
`<form`  
  `aria-labelledby="contact-form-heading"`  
  `className="flex flex-col space-y-4"`  
`>`  
  `<h2 id="contact-form-heading" className="sr-only">Contact Form</h2>`  
    
  `<label htmlFor="name" className="sr-only">Full Name</label>`  
  `<input id="name" type="text" name="name" required />`  
`</form>`

---

## **🚀 Performance Optimization**

### **✅ Optimizations Implemented:**

✔️ **Lazy Loading** with `React.lazy()`  
✔️ **Code Splitting** via dynamic imports  
✔️ **Optimized Images** with correct formats  
✔️ **Minified Tailwind CSS**  
✔️ **Fast Build Time** using Vite

---

## **📏 Coding Standards**

To maintain **code quality and consistency**, the following **ESLint rules** were enforced:  
✅ **Single Quotes (`'`) instead of Double Quotes (`"`).**  
✅ **Strict Equality (`===` instead of `==`).**  
✅ **No Trailing Spaces.**  
✅ **No Unused Variables.**

### **📌 ESLint Configuration Sample**

js  
CopyEdit  
`rules: {`  
  `"quotes": ["error", "single"],`  
  `"eqeqeq": "error",`  
  `"no-trailing-spaces": "error",`  
  `"no-unused-vars": "warn"`  
`}`

---

## **🧪 Testing Implementation**

### **✅ Testing Approach:**

* **Unit Tests** using `Jest` & `React Testing Library`.  
* **Component Testing** for UI validation.

### **📌 Example: Jest Test Case**

tsx  
CopyEdit  
`import { render, screen } from "@testing-library/react";`  
`import ContactSection from "../components/ContactSection";`

`test("renders Contact form correctly", () => {`  
  `render(<ContactSection />);`  
  `expect(screen.getByText(/Get in touch/i)).toBeInTheDocument();`  
`});`

---

## **📌 Challenges & Learnings**

### **Challenges Faced:**

* Implementing **pixel-perfect** responsiveness.  
* Ensuring **strict TypeScript typings**.  
* Managing **lazy-loaded components efficiently**.
* Animation **Adding Animations using Tailwind**.


### **Learnings & Takeaways:**

* **Tailwind CSS** significantly speeds up styling.  
* **Lazy Loading** improves performance without affecting UX.  
* **ESLint & Prettier** ensure **consistent code quality**.

---

## **🔮 Future Enhancements**

🔹 Add **Animations** using Framer Motion.  
🔹 Implement **Dark Mode**.  
🔹 Improve **SEO & Metadata Optimization**.  
🔹 Enhance **Form Validation** with better error handling.
🔹 Implement **Authentication & Security Best Practices**.
🔹 Add **Husky for Git Hooks** to enforce linting and formatting before commits.
🔹 Integrate **Telemetry & Analytics** for performance monitoring and user insights.
🔹 Introduce **Redux for State Management** to handle global application state efficiently.


---

## **📬 Contact & Contribution**

Contributions are welcome! 🎉 Feel free to submit pull requests or raise issues. 😊

### 📧 Email: arpitjain5643@gmail.com

