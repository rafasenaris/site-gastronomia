export class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <h1>teste<h1>
            </footer>
        `;
    }
}
customElements.define('main-footer', footer);