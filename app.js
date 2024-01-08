 'use strict'

class ColorTheme {
    #body = document.body;
    constructor(btn) {
        this.btn = document.querySelector(btn);
    }

    switchTheme() {
        this.#body.classList.toggle('light');
        this.#body.classList.toggle('dark');

        this.btn.classList.toggle('active');

        localStorage.setItem('colorTheme', this.#body.className);
    }

    getLocalStorageTheme() {
        if(localStorage.getItem('colorTheme')!=null){
            let t = localStorage.getItem('colorTheme');
            this.#body.classList.add(t);
        } else {
            this.#body.classList.add('light');
            localStorage.setItem('colorTheme','light');
        }

        if(localStorage.getItem('colorTheme') === 'dark') {
            this.btn.classList.add('active');
        }

    }

    init() {
        console.dir(this);
        this.getLocalStorageTheme();
        this.btn.addEventListener('click',this.switchTheme.bind(this));
    }
}