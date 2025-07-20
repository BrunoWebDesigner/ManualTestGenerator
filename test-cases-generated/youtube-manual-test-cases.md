# 📋 Manual Test Cases for YouTube Homepage UI

Based on the `rich-analysis.json` file, these test cases validate form behavior, button and interactive element actions, input fields, and accessibility features for the YouTube homepage.

---

### Test Case ID: TC-001

**Title:** 🔍 Validate search input functionality  
**Priority:** High  
**Preconditions:**

- User has access to the YouTube homepage.
- Browser is opened and navigated to the URL.

**Test Steps:**

1. Locate the input field with `placeholder="Search"`.
2. Enter the text `"Test Search"`.
3. Press Enter or click the associated "Search" button.

**Expected Result:**

- The page navigates to a search results screen with results related to `"Test Search"`.

---

### Test Case ID: TC-002

**Title:** 🖱️ Check visibility and accessibility of all clickable buttons  
**Priority:** Medium  
**Preconditions:**

- User is on the YouTube homepage.
- All dynamic content has fully loaded.

**Test Steps:**

1. Identify all elements with `role="button"` or tag `button`.
2. Hover over each button and check for `aria-label` or `title` attribute.
3. Verify the button has a visible label or alternative text.

**Expected Result:**

- All interactive buttons are accessible with clear context and visual cues.

---

### Test Case ID: TC-003

**Title:** 🔑 Validate "Sign in" button navigation  
**Priority:** High  
**Preconditions:**

- User is on the YouTube homepage.
- User is not signed in.

**Test Steps:**

1. Locate the "Sign in" button (`aria-label="Sign in"`).
2. Click the "Sign in" button.

**Expected Result:**

- The user is redirected to the YouTube sign-in page.

---

### Test Case ID: TC-004

**Title:** 🏠 Validate navigation links in the header  
**Priority:** Medium  
**Preconditions:**

- User is on the YouTube homepage.

**Test Steps:**

1. Locate all navigation links in the header (e.g., "Home", "Shorts", "Subscriptions").
2. Click each link one by one.

**Expected Result:**

- Each link navigates to the correct section or page.

---

### Test Case ID: TC-005

**Title:** 🦾 Check accessibility attributes on interactive elements  
**Priority:** High  
**Preconditions:**

- User is on the YouTube homepage.

**Test Steps:**

1. Inspect all clickable elements for accessibility attributes (`aria-label`, `role`, `alt`).
2. Verify that each element has a meaningful attribute value.

**Expected Result:**

- All interactive elements have descriptive accessibility attributes for screen readers.

---

### Test Case ID: TC-006

**Title:** ✉️ Validate email/contact link functionality  
**Priority:** Medium  
**Preconditions:**

- User is on the YouTube homepage.

**Test Steps:**

1. Locate any clickable email or contact links (if present).
2. Click the link.

**Expected Result:**

- The default email client opens or the user is redirected to a contact form.

---

### Test Case ID: TC-007

**Title:** ⌨️ Validate keyboard accessibility for all interactive elements  
**Priority:** High  
**Preconditions:**

- User is on the YouTube homepage.

**Test Steps:**

1. Use the Tab key to navigate through all interactive elements.
2. Press Enter or Space to activate each element.

**Expected Result:**

- All interactive elements are reachable and operable via keyboard.

---

### Test Case ID: TC-008

**Title:** 🏷️ Validate logo image accessibility  
**Priority:** Medium  
**Preconditions:**

- User is on the YouTube homepage.

**Test Steps:**

1. Locate the YouTube logo image element.
2. Check for the presence of an `alt` attribute.

**Expected Result:**

- The logo image has a meaningful `alt` attribute for accessibility.

---

### Test Case ID: TC-009

**Title:** 📝 Validate presence and type of input fields  
**Priority:** Medium  
**Preconditions:**

- User is on the YouTube homepage.

**Test Steps:**

1. Inspect the page for any input fields (`input`, `textarea`, `select`).
2. Check their `type`, `placeholder`, and `name` attributes.

**Expected Result:**

- All input fields are visible, have appropriate types, and provide user guidance via placeholder or label.

---

### Test Case ID: TC-010

**Title:** 🖼️ Validate visibility and style of interactive elements  
**Priority:** Medium  
**Preconditions:**

- User is on the YouTube homepage.

**Test Steps:**

1. Inspect each clickable element for CSS styles (`display`, `visibility`, `color`, etc.).
2. Ensure each element is visible and styled appropriately.

**Expected Result:**

- All interactive elements are visible and styled according to the design.

---

## 🧾 Summary Table

| Test Case ID | Title                                         | Priority | Covered Elements      |
| ------------ | --------------------------------------------- | -------- | --------------------- |
| TC-001       | 🔍 Validate search input functionality        | High     | Input, Button         |
| TC-002       | 🖱️ Check visibility/accessibility of buttons  | Medium   | Buttons, Roles        |
| TC-003       | 🔑 Validate "Sign in" button navigation       | High     | Button, Link          |
| TC-004       | 🏠 Validate navigation links in the header    | Medium   | Links, Navigation     |
| TC-005       | 🦾 Check accessibility attributes             | High     | aria-label, role, alt |
| TC-006       | ✉️ Validate email/contact link functionality  | Medium   | Email/Contact Link    |
| TC-007       | ⌨️ Validate keyboard accessibility            | High     | All interactive       |
| TC-008       | 🏷️ Validate logo image accessibility          | Medium   | Logo image, alt       |
| TC-009       | 📝 Validate presence and type of input fields | Medium   | Input fields          |
| TC-010       | 🖼️ Validate visibility and style              |
