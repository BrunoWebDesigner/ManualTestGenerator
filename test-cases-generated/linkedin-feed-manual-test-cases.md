# Manual Test Cases for LinkedIn Feed UI

Based on the `rich-analysis.json` file, these manual test cases validate form behavior, button and interactive element actions, input fields, and accessibility features for the LinkedIn Feed page.

---

### Test Case ID: TC-001

**Title:** Validate "Email or phone" input field  
**Priority:** High  
**Preconditions:**

- User is on the LinkedIn login page.
- Browser is opened and navigated to the URL.

**Test Steps:**

1. Locate the input field with `id="username"` and `ariaLabel="Email or phone"`.
2. Enter a valid email address (e.g., `user@example.com`).
3. Verify the input is accepted and visible.

**Expected Result:**

- The input field accepts and displays the entered email address.

---

### Test Case ID: TC-002

**Title:** Validate "Password" input field  
**Priority:** High  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Locate the input field with `id="password"` and `ariaLabel="Password"`.
2. Enter a valid password (e.g., `TestPassword123`).
3. Verify the input is masked (not visible as plain text).

**Expected Result:**

- The password is accepted and displayed as masked characters.

---

### Test Case ID: TC-003

**Title:** Validate "Join now" button action  
**Priority:** High  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Locate the button with `id="join_now"` and text "Join now".
2. Click the "Join now" button.

**Expected Result:**

- The user is navigated to the registration or sign-up page.

---

### Test Case ID: TC-004

**Title:** Validate navigation links in the footer  
**Priority:** Medium  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Locate each clickable link in the footer: "User Agreement", "Privacy Policy", "Community Guidelines", "Cookie Policy", "Copyright Policy", "Send Feedback".
2. Click each link one by one.

**Expected Result:**

- Each link opens the corresponding policy or feedback page in a new tab or window.

---

### Test Case ID: TC-005

**Title:** Validate "Language" selector button  
**Priority:** Medium  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Locate the button with class `language-selector__button` and text "Language".
2. Click the "Language" button.

**Expected Result:**

- A language selection menu or modal appears.

---

### Test Case ID: TC-006

**Title:** Check accessibility attributes for input fields  
**Priority:** High  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Inspect the "Email or phone" and "Password" input fields.
2. Verify the presence of `ariaLabel` attributes.

**Expected Result:**

- Both input fields have descriptive `ariaLabel` attributes for screen readers.

---

### Test Case ID: TC-007

**Title:** Check clickable property of all interactive elements  
**Priority:** Medium  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Identify all elements with `clickable: true`.
2. Attempt to interact with each element using mouse and keyboard (Tab + Enter/Space).

**Expected Result:**

- All clickable elements respond to both mouse and keyboard interactions.

---

### Test Case ID: TC-008

**Title:** Validate input field types  
**Priority:** High  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Inspect the "Email or phone" input field and verify `type="email"`.
2. Inspect the "Password" input field and verify `type="password"`.

**Expected Result:**

- The "Email or phone" field only accepts valid email/phone formats.
- The "Password" field masks input and does not display plain text.

---

### Test Case ID: TC-009

**Title:** Validate presence of placeholder and labels  
**Priority:** Medium  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Inspect the "Email or phone" input field for a placeholder or label.
2. Inspect the "Password" input field for a placeholder or label.

**Expected Result:**

- Each input field has a visible placeholder or label for user guidance.

---

### Test Case ID: TC-010

**Title:** Validate feedback link functionality  
**Priority:** Low  
**Preconditions:**

- User is on the LinkedIn login page.

**Test Steps:**

1. Locate the "Send Feedback" link.
2. Click the "Send Feedback" link.

**Expected Result:**

- The user is navigated to a feedback form or feedback submission page.

---

## Summary Table

| Test Case ID | Title                                     | Priority | Covered Elements              |
| ------------ | ----------------------------------------- | -------- | ----------------------------- |
| TC-001       | Validate "Email or phone" input field     | High     | Input (email), ariaLabel      |
| TC-002       | Validate "Password" input field           | High     | Input (password), ariaLabel   |
| TC-003       | Validate "Join now" button action         | High     | Button                        |
| TC-004       | Validate navigation links in the footer   | Medium   | Links                         |
| TC-005       | Validate "Language" selector button       | Medium   | Button                        |
| TC-006       | Check accessibility attributes for inputs | High     | Input, ariaLabel              |
| TC-007       | Check clickable property of elements      | Medium   | All clickable elements        |
| TC-008       | Validate input field types                | High     | Input (email, password), type |
| TC-009       | Validate presence of placeholder/labels   | Medium   | Input, placeholder, ariaLabel |
| TC-010       | Validate feedback link functionality      |
