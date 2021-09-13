class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
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
        :host {
          display: inline-block;
          width: 100%;
          min-widht: 300px;
          max-width: 450px;
          font-size: 20px;
          background: grey;
          margin: 15px;
          padding: 10px 20px;
        }
        :host(.blue) {
          background: blue;
        }
        :host([isYellow]) {
          background: yellow;
        }
        :host([isYellow]) h2, :host([isYellow]) p {
          color: grey;
        }
        :host-context(article.card) {
          border: 1px solid #333333;
          border-radius: 10px;
          background: white;
        }
      </style>
    `;
  }

  render() {
    const template = this.getTemplate().content.cloneNode(true);
    this.shadowRoot.append(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElement);
