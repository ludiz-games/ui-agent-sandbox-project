import "./main.css";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("Missing #app root");
}

root.innerHTML = `
  <div class="prototype-stage">
    <div class="prototype-viewport">
      <header class="prototype-header">
        <div class="logo">UI</div>
        <div class="title">
          <h1>UI Agent Sandbox</h1>
          <p>Starter layout ready for composed assets.</p>
        </div>
      </header>
      <main class="prototype-main">
        <section class="card">
          <h2 class="card-title">Getting Started</h2>
          <p class="card-body">
            Use the agent tools to edit, replace, and augment this screen with generated assets.
          </p>
          <button class="primary-button">Primary Action</button>
        </section>
        <section class="card">
          <h2 class="card-title">Layout Helpers</h2>
          <ul class="trail">
            <li>Absolute positioning ready for exact pixel specs.</li>
            <li>Tailwind utilities available for quick styling.</li>
            <li>Surface and accent colors defined in Tailwind config.</li>
          </ul>
        </section>
      </main>
      <footer class="prototype-footer">© 2025 UI Agent Sandbox</footer>
    </div>
  </div>
`;

