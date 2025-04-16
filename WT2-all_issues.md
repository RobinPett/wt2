# Assignment Wt2

## Issue 1: As a developer, I want the code to be clear and well-structured.

**Status:** opened

The source code is well organized.

* [ ] The code is split into well defined parts.

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 2: As a developer, I want to reuse code.

**Status:** opened

By reusing code, in the form of packages and own general modules, productivity increases.

* [ ] I am looking for packages that solve a problem before I implement my own solution. (not general OAuth packages though)
* [ ] Before I use a package, I validate the package by checking when it was last updated and how many people use it.

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 3: As a developer, I want to manage dependencies and organize scripts I use often.

**Status:** opened

Depending on the program environment used, make sure to use manifest files according to best practices.

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 4: As a developer, I want to document the source code.

**Status:** opened

The source code in all projects must be documented according to the best practices of the programming language used including line comments.

- [ ] All classes are documented.
- [ ] All functions/methods, except anonymous ones, are documented.
- [ ] Code hard to understand is documented with line comments.

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 5: As a developer, I want the source code to follow a coding standard.

**Status:** opened

The source code in all projects must follow a coding standard.

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 6: As a student, I want it to be possible for the examiner to follow the creation of the application.

**Status:** opened

There must be a complete commit history in all projects when submitting the assignment. To ensure this, make commits often and follow the guidelines at [Coursepress Manual, Git Commit Messages](https://coursepress.lnu.se/manual/gitlab/git/11-commit-messages).

- [ ] I can show a complete commit history in all projects.
- [ ] I have at least 20 commits (negotiable) in total.
- [ ] I have a .gitignore file in every project to control that no unnecessary files are committed.

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 7: As an end-user, I want to access the service over the internet.

**Status:** opened

The services created need to be accessible over the public internet.

- [ ]  HTTPS must be enforced. The application should respond on HTTP, but this should result in a redirect to HTTPS.
- [ ]  The services must be resilient against application crashes. The services should restart automatically.
- [ ]  The services must be operational in a "production" environment. Only packages necessary for the operational needs should be installed (no development dependencies).

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 8: As a developer and end-user, I want the keys and tokens to be handled correctly.

**Status:** opened

- [ ] The keys and tokens should not be version controlled by git.
- [ ] Different keys and secrets are used in development and in production.

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 9: As a student, I want the examiner to be able to read a complete Assignment Report, provided with correct links.

**Status:** opened

You should answer all questions in the assignment report presented to you when you create your Merge Request.

* [ ] I will answer all the questions in the Assignment Report.
* [ ] I will make sure that the link to my application is clearly stated in the Assignment Report.

**Labels:**
- req-type::non-functional
- req::required

---

## Issue 10: As a developer, I want to use a specific version of Elastic Search

**Status:** closed

- [ ] Use Elasticsearch version 6.8.22 or higher

**Labels:**
- req-type::non-functional
- req::optional

---

## Issue 11: As a user, I want to see an interactive graphical representation of the data

**Status:** opened

The data should be visualized according to the following subtasks

- [ ] The data is presented on one or more web pages.
- [ ] At least one diagram is presented to the user.
- [ ] The data is explained so that the user knows what he/she is looking at
- [ ] There are controls to filter data in order to customize the visualization.
- [ ] The data do not need to be updated in real-time from the source.

**Labels:**
- req-type::functional
- req::required

---

## Issue 12: As a developer, I want to explore and implement Retrieval Augmented Generation (RAG) to enhance my web application (VG grade only).

**Status:** opened

This issue covers the implementation of the RAG functionality required for a VG grade.  It includes:

- [ ] Data from the chosen dataset is processed into embeddings using a pre-trained model.
- [ ] The generated embeddings are successfully stored in a vector database.
- [ ] A user interface (e.g., a search bar) is implemented to allow users to submit queries.
- [ ]  The application retrieves relevant information from the vector database based on user queries.
- [ ] An LLM (Large Language Model) is integrated to process retrieved information and generate responses. This can be achieved by using an external LLM API (e.g., OpenAI API) or by deploying a self-hosted open-source LLM (e.g., using Ollama).
- [ ] The retrieved information is displayed clearly in the web application.

_Frameworks like LangChain or Agno can be used to streamline the RAG pipeline_

**Labels:**
- req-type::functional
- req::optional

---

## Issue 13: As an end-user, I want the web application to load efficiently even with a large amount of data.

**Status:** opened

As an end-user, I want the web application to load efficiently even with a large amount of data. This includes loading times of the application itself when accessed via the web, as well as the timely and accurate loading of the interactive data visualization. In addition, I should be able to interact with the visualization - such as filtering and sorting the data - without excessive delays or lag. The application should handle large datasets without compromising its performance or responsiveness. If there are any operations in the application that may take more time, I want to be informed by a loading indication or progress bar to ensure a smooth user experience. 

Pick one or more that apply: 
- [ ] Only loading the data that is necessary
- [ ] Efficient data structures and algorithms optimized for your data type
- [ ] Background data processing

**Labels:**
- req-type::functional
- req::required

---

