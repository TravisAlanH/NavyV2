class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div>
        <header class="header">
          <a href="/Pages/IRP.html">IPR</a>
        </header>
      </div>
    
    `;
  }
}

customElements.define("header-component", Header);
