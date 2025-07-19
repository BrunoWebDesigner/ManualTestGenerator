# 🧪 AI Testing Assistant

Welcome to **AI Testing Assistant**!  
This project leverages [Playwright](https://playwright.dev/) to extract structured UI data from live web pages and automatically generate high-quality manual test cases in Markdown format. It is designed to help QA analysts and developers quickly validate web application UIs for accessibility, form behavior, and interactive elements.

---

## 🚀 Features

- **Automated UI Analysis:**  
  Uses Playwright to crawl and analyze web pages, extracting all visible, interactive elements (inputs, buttons, links, etc.).

- **Manual Test Case Generation:**  
  Generates clear, actionable manual test cases in Markdown, covering:

  - Form behavior
  - Button and interactive element actions
  - Input field validation (text, password, etc.)
  - Accessibility features (aria-labels, roles, alt attributes)

- **Accessibility Focus:**  
  Ensures all test cases consider accessibility best practices.

- **Customizable Prompts:**  
  Easily adjust the test case format and coverage by editing the prompt file.

---

## 🛠️ How It Works

1. **Analyze a Web Page:**  
   Run the Playwright script (`analyzePage.spec.ts`) to visit a target URL and extract UI metadata into `rich-analysis.json`.

2. **Generate Test Cases:**  
   Use the provided prompt (`copilotPrompt.md`) and the extracted JSON to generate Markdown test cases tailored to the page structure.

3. **Review & Execute:**  
   Review the generated `.md` file for manual QA or share it with your team.

---

## 📂 Project Structure

```
aiTesttingAssistent/
├── analyzePage.spec.ts                # Playwright script for UI analysis
├── rich-analysis.json                 # Extracted UI structure from the target page
├── copilotPrompt.md                   # Prompt template for test case generation
├── testCases/
│   └── youtube-manual-test-cases.md   # Generated manual test cases for YouTube (example)
├── README.md                          # Project documentation
```

---

## 📝 Example Test Case

```markdown
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
```

---

## 💡 Usage

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the Playwright analysis:**

   ```bash
   npx playwright test analyzePage.spec.ts
   ```

3. **Generate manual test cases:**  
   Use the prompt in `copilotPrompt.md` with your preferred AI assistant, referencing the latest `rich-analysis.json`.  
   The generated test cases will be saved in the `testCases/` directory (e.g., `testCases/youtube-manual-test-cases.md`).

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!  
Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
