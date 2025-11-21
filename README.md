# 🚀 URL Redirect Tester & SEO Analyzer

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-Production_Ready-success)]()

**A professional-grade, server-side simulation tool for analyzing HTTP redirect chains, status codes, and SEO health.**

<a href="https://URLRedirect.doodax.com" target="_blank">
  <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-URLRedirect.doodax.com-ff006e?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" />
</a>

[Report Bug](https://github.com/hsinidev/url-redirect-tester/issues) • [Request Feature](https://github.com/hsinidev/url-redirect-tester/issues)

</div>

---

## 📖 Overview

The **URL Redirect Tester** is a sophisticated web application designed for SEO professionals, web developers, and site administrators. Unlike standard browser navigation, which hides the "hops" taken to reach a final URL, this tool simulates a server-side bot to reveal the **entire redirect chain**.

It provides critical insights into HTTP status codes (301 vs. 302), identifies redirect loops that kill SEO rankings, and validates link equity transfer paths. Built with a modern stack and wrapped in an immersive, "galaxy-themed" UI, it combines powerful diagnostics with an exceptional user experience.

## ✨ Key Features

-   **🔍 Deep Chain Analysis**: Visualize every step of a redirect path, including intermediate hops often invisible to browsers.
-   **🚦 Status Code Intelligence**: Instant color-coded identification of `301 Moved Permanently`, `302 Found`, `404 Not Found`, and `500 Server Error`.
-   **🔄 Loop Detection**: Automatically detects and alerts on infinite redirect loops that cause crawl errors.
-   **⚡ Performance Metrics**: Estimates the latency added by each redirect hop.
-   **📱 Fully Responsive**: A mobile-first design ensures you can debug site issues from any device.
-   **🌌 Immersive Galaxy UI**: Features a custom-animated, multi-colored nebula background for a modern, comfortable user environment.
-   **📚 Integrated SEO Knowledge Base**: Includes a dynamic, comprehensive guide on HTTP redirects directly within the app with rich snippets.

## 📂 Project Structure

```text
url-redirect-tester/
├── components/             # React UI Components
│   ├── Layout.tsx          # Main application wrapper (Footer/Modal logic)
│   ├── Modal.tsx           # Reusable Pop-up Modal for legal/info pages
│   ├── RedirectTesterTool.tsx # Core logic component for tracing URLs
│   └── SeoArticle.tsx      # SEO Guide content with JSON-LD Schema
├── public/                 # Static Assets
│   ├── favicon.svg         # Application Icon
│   ├── robots.txt          # Search Engine crawler instructions
│   └── sitemap.xml         # XML Sitemap for SEO
├── services/               # Business Logic
│   └── redirectService.ts  # Simulates server-side HTTP request handling
├── App.tsx                 # Main Application Entry
├── constants.ts            # Static content (Legal text, FAQs, etc.)
├── index.html              # HTML Entry point with global CSS/animations
├── index.tsx               # React DOM mounting
├── metadata.json           # Application metadata configuration
└── types.ts                # TypeScript Interfaces and Type Definitions
```

## 🚀 Quick Start

This project uses native ES Modules and does not require a complex bundler for local development.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/hsinidev/url-redirect-tester.git
    cd url-redirect-tester
    ```

2.  **Install Dependencies (Optional)**
    *Note: As a modern ESM project, you can technically run this with just a static server, but standard practice suggests:*
    ```bash
    npm install
    ```

3.  **Run Locally**
    You can use `npx http-server` or Python's http server.
    ```bash
    npx http-server .
    # OR
    python3 -m http.server 8080
    ```

4.  **Access**
    Open your browser to `http://localhost:8080`.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact & Support

**Project Maintainer:** HSINI MOHAMED  
**Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)  
**Website:** [doodax.com](https://doodax.com)  
**GitHub:** [github.com/hsinidev](https://github.com/hsinidev)

---
<div align="center">
  <p>Made with ❤️ and ☕ by HSINI MOHAMED</p>
</div>
