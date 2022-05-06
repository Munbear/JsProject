// class 클래스 extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `<label>이름을 입력하쇼</label><input>`
//     }
//     static get observedAttributes() {
//         return ['name']
//     }
//     attributeChangedCallback() {
//         console.log(this.getAttribute('name'))
//     }
// }
//
// customElements.define('custom-input', 클래스);
///

class 클래스 extends  HTMLElement {
    connectedCallback() {
        this.attachShadow({mode:'open'});
        this.shadowRoot.append( template1.content.cloneNode(true));
        let el = this.shadowRoot.querySelector('label');
        el.addEventListener('click', function() {
            console.log('클릭함')
        })
    }
}
customElements.define('custom-input', 클래스);

// html 임시보관함 <template> 태그
// 컴포넌트 만들 때 html이 너무 길어지면 <template> 태그에 잠깐 보고나해두고 집어넣을 수 도 있습니다.


