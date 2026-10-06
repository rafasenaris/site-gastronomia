// assets/js/components/Header.js
export class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
            <img src="" alt="">
                <menu>
                    <li><a href="#sobre">SOBRE</a></li>
                    <li><a href="#ambiente">AMBIENTE</a></li>
                    <li><a href="cardapio.html">CARDÁPIO</a></li>
                    <li><a href="#endereco">LOCALIZAÇÃO</a></li>
                    <li><a href="#reserva">RESERVA</a></li>
                </menu>
            </header>
        `;
    }
}
customElements.define('meu-cabecalho', header);