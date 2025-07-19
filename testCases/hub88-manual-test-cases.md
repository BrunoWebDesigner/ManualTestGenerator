# 🧪 Manual Test Cases for Hub88.io UI

Based on the `rich-analysis.json` file, these test cases validate form behavior, button and interactive element actions, input fields, and accessibility features for the Hub88.io homepage.

---

### Test Case ID: TC-001

**Title:** 🔍 Validate logo link navigation  
**Priority:** High  
**Preconditions:**

- User is on the Hub88.io homepage.
- Browser is opened and navigated to the URL.

**Test Steps:**

1. Locate the clickable logo element (`class="jsx-658723015 logo-link"`, `href="https://hub88.io/"`).
2. Click the logo.

**Expected Result:**

- The page reloads or navigates to the Hub88.io homepage.

---

### Test Case ID: TC-002

**Title:** 🖱️ Check visibility and accessibility of all clickable elements  
**Priority:** Medium  
**Preconditions:**

- User is on the homepage.
- All dynamic content has fully loaded.

**Test Steps:**

1. Identify all elements with `clickable: true`.
2. For each element, check for a visible label, `aria-label`, or `title` attribute.
3. Hover over each element and verify a visual cue (e.g., pointer cursor, highlight).

**Expected Result:**

- All interactive elements are accessible and provide clear context and visual feedback.

---

### Test Case ID: TC-003

**Title:** 🔗 Validate navigation links in the header  
**Priority:** High  
**Preconditions:**

- User is on the homepage.

**Test Steps:**

1. Locate all navigation links in the header (e.g., "Home", "News", "Suppliers", etc.).
2. Click each link one by one.

**Expected Result:**

- Each link navigates to the correct section or page.

---

### Test Case ID: TC-004

**Title:** 📝 Validate presence of input fields  
**Priority:** Medium  
**Preconditions:**

- User is on the homepage.

**Test Steps:**

1. Inspect the page for any input fields (`input`, `textarea`, `select`).
2. If present, check their `type`, `placeholder`, and `name` attributes.

**Expected Result:**

- All input fields are visible, have appropriate types, and provide user guidance via placeholder or label.

---

### Test Case ID: TC-005

**Title:** 🦾 Check accessibility attributes on interactive elements  
**Priority:** High  
**Preconditions:**

- User is on the homepage.

**Test Steps:**

1. Inspect all clickable elements for accessibility attributes (`aria-label`, `role`, `alt`).
2. Verify that each element has a meaningful attribute value.

**Expected Result:**

- All interactive elements have descriptive accessibility attributes for screen readers.

---

### Test Case ID: TC-006

**Title:** ✉️ Validate email link functionality  
**Priority:** Medium  
**Preconditions:**

- User is on the homepage.

**Test Steps:**

1. Locate the clickable email link (e.g., `sales@hub88.io`).
2. Click the email link.

**Expected Result:**

- The default email client opens with the recipient set to `sales@hub88.io`.

---

### Test Case ID: TC-007

**Title:** 🌐 Validate external links open correctly  
**Priority:** Medium  
**Preconditions:**

- User is on the homepage.

**Test Steps:**

1. Locate all links with `href` pointing to external domains.
2. Click each link.

**Expected Result:**

- Each external link opens the correct external page, preferably in a new tab.

---

### Test Case ID: TC-008

**Title:** 🏷️ Validate logo image accessibility  
**Priority:** Medium  
**Preconditions:**

- User is on the homepage.

**Test Steps:**

1. Locate the logo image element.
2. Check for the presence of an `alt` attribute.

**Expected Result:**

- The logo image has a meaningful `alt` attribute for accessibility.

---

### Test Case ID: TC-009

**Title:** ⌨️ Validate keyboard accessibility for all interactive elements  
**Priority:** High  
**Preconditions:**

- User is on the homepage.

**Test Steps:**

1. Use the Tab key to navigate through all interactive elements.
2. Press Enter or Space to activate each element.

**Expected Result:**

- All interactive elements are reachable and operable via keyboard.

---

### Test Case ID: TC-010

**Title:** 🖼️ Validate visibility and style of interactive elements  
**Priority:** Medium  
**Preconditions:**

- User is on the homepage.

**Test Steps:**

1. Inspect each clickable element for CSS styles (`display`, `visibility`, `color`, etc.).
2. Ensure each element is visible and styled appropriately.

**Expected Result:**

- All interactive elements are visible and styled according to the design.

---

## 🧾 Summary Table

| Test Case ID | Title                                         | Priority | Covered Elements       |
| ------------ | --------------------------------------------- | -------- | ---------------------- |
| TC-001       | 🔍 Validate logo link navigation              | High     | Link, Logo             |
| TC-002       | 🖱️ Check visibility/accessibility of elements | Medium   | All clickable elements |
| TC-003       | 🔗 Validate navigation links in the header    | High     | Links, Navigation      |
| TC-004       | 📝 Validate presence of input fields          | Medium   | Input fields           |
| TC-005       | 🦾 Check accessibility attributes             | High     | aria-label, role, alt  |
| TC-006       | ✉️ Validate email link functionality          | Medium   | Email link             |
| TC-007       | 🌐 Validate external links open correctly     | Medium   | External links         |
| TC-008       | 🏷️ Validate logo image accessibility          | Medium   | Logo image, alt        |
| TC-009       | ⌨️ Validate keyboard accessibility            | High     | All interactive        |
| TC-010       | 🖼️ Validate visibility and style              | Medium   | Styles, clickable      |
