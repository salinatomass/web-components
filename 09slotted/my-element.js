class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getElement() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>
          <slot name="title"></slot>
        </h2>
        <p>
          <slot name="paragraph"></slot>
        </p>
      </section>

      ${this.getStyles()}
    `;

    return template;
  }
  getStyles() {
    return `
      <style>
        ::slotted(span) {
          font-size: 30px;
          color: red;
        }
        ::slotted(.text) {
          text-decoration: underline;
        }
      </style>
    `;
  }
  render() {
    const template = this.getElement().content.cloneNode(true);
    this.shadowRoot.append(template);
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElement);
