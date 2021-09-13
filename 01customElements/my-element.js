const template = document.createElement("div");
template.innerHTML = `
  <style>
    p {
      color: blue;
    }
    .texto {
      color: red;
    }
  </style>
  <p class="texto">Hello world 2</p>
  <p>Example text</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }

  connectedCallback() {
    this.p.textContent = "Hello world from Web Components!";
    this.append(this.p, template);
  }
}

customElements.define("my-element", myElement);
