class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["titulo", "body", "image"]; // only these attributes will be observed
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "titulo") {
      this.titulo = newValue;
    }
    if (attr === "body") {
      this.body = newValue;
    }
    if (attr === "image") {
      this.image = newValue;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.titulo}</h2>
        <p>${this.body}</p>
        <img width="100" src="${this.image}" />
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }

  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElement);
