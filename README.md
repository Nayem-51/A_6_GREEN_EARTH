# 🌱 Plant a Tree – Campaign Website

A responsive website for promoting tree plantation campaigns.  
Built using **HTML, Tailwind CSS (with DaisyUI)**, and **Vanilla JavaScript**.

---

## ✅ Main Features

### 1) Navbar
- Website **logo/name** on the left  
- **Menu items** in the center  
- **Plant a Tree button** on the right  

### 2) Banner
- Background image  
- Title and Subtitle  
- Centered Call-to-Action button  

### 3) About Campaign
- Section heading  
- **Image on the left**, **Text on the right**  

### 4) Our Impact Section
- 3 responsive **cards** showing campaign statistics  

### 5) Plant a Tree Today Section
- A **form** with fields: Name, Email, Number of Trees  

### 6) Footer
- Copyright info  

### 7) Responsiveness
- Fully **mobile responsive**  

---

## ⚙️ Functionalities

1. **Category Loading**  
   - Load Tree Categories dynamically on the left side.

2. **Category Click → Tree Data**  
   - On clicking a category, load trees of that category.  
   - Display them in a **3-column card layout**.

3. **Card Contents**  
   Each card includes:  
   - Image  
   - Name  
   - Short description  
   - Category  
   - Price  
   - Add to Cart button  

4. **Modal on Card Click**  
   - Clicking a tree name opens a modal with full tree details.  

---

## 🧪 Challenges

1. **Add to Cart**  
   - Clicking "Add to Cart" adds the tree to the Cart List.  
   - Shows tree name in the cart.  

2. **Total Calculation**  
   - Calculate total price of trees in cart.  

3. **Remove from Cart**  
   - Clicking ❌ removes tree and deducts its price from total.  

4. **Loading Spinner**  
   - Show spinner while tree data is loading.  

5. **Active Button State**  
   - Highlight active category button when selected.  

---

## 📘 ES6 Questions & Answers

### 1) What is the difference between `var`, `let`, and `const`?
- **var**
  - Function-scoped  
  - Hoisted (initialized to `undefined`)  
  - Can be re-declared  
- **let**
  - Block-scoped  
  - Hoisted but not initialized (TDZ applies)  
  - Can be re-assigned but not re-declared in the same scope  
- **const**
  - Block-scoped  
  - Must be initialized once  
  - Cannot be re-assigned  
  - For objects/arrays → binding is constant, but internal values can change  

---

### 2) What is the difference between `map()`, `forEach()`, and `filter()`?
- **forEach**
  - Iterates through array  
  - Executes callback for side effects  
  - Always returns `undefined`  
- **map**
  - Transforms each element  
  - Returns a **new array** of the same length  
- **filter**
  - Selects elements where callback returns truthy  
  - Returns a **new array** (possibly shorter)  

---

### 3) What are arrow functions in ES6?
- Concise syntax for writing functions  
- Lexical `this` (does not bind its own `this`, `arguments`, `super`, or `new.target`)  
- Cannot be used as constructors  
- Supports **implicit return** when using expression body  

---

### 4) How does destructuring assignment work in ES6?
- Extracts values from arrays/objects into variables using pattern matching  
- Supports:  
  - Default values  
  - Variable renaming  
  - Nested patterns  
  - Rest operator (`...rest`)  
- Works in **function parameters**  

---

### 5) Explain template literals in ES6. How are they different from string concatenation?
- Written with backticks (`` ` ``)  
- Allow **multi-line strings**  
- Allow **interpolation** with `${expression}`  
- Easier to read than `'a' + x + 'b'`  
- Support **tagged templates** for advanced use cases  

---

## 🧰 Technology Stack

- **HTML**  
- **CSS (Tailwind + DaisyUI)**  
- **JavaScript (Vanilla JS)**  

---