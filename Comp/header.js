class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="NavBar">
        <header class="header">
          <a href="Pages/IRP.html" target="frame">IPR</a>
        </header>
      </div>
    
    `;
  }
}

customElements.define("header-component", Header);
