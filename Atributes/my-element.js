class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.title = this.getAttribute("title");
    this.body = this.getAttribute("body");
    this.image = this.getAttribute("image");
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
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
