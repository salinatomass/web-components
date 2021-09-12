class myElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }

  connectedCallback() {
    this.p.textContent = "Hello world from Web Components!";
    this.appendChild(this.p);
  }
}

customElements.define("my-element", myElement);
