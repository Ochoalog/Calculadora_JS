/*
function criaCalculadora() {
    return {
    display: document.querySelector('.display'),
    inicia() {
        this.clickBtns();
        this.pressionaEnter();
    },

    pressionaEnter(){
        this.display.addEventListener('keyup', (e) => {
            if(e.KeyCode == 13){
                this.calcula();
            }
        });
    },

    clearDisplay() {
        this.display.value = '';
    },
    
    apagaUm(){
        this.display.value = this.display.value.slice(0, -1)
    },

    calcula(){
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta Inválida');
                return
            }

            this.display.value = String(conta);
        } catch(e) {
            alert('Conta Inválida');
        }
    },

    
    clickBtns(){
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
                this.apagaUm();
                
            }

            if(el.classList.contains('btn-eq')){
                this.calcula();
            }
        });
    },
    btnParaDisplay(valor) {
        this.display.value += valor;
    }
    };    
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/

function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () => {
        this.capturaClicks();
        this.capturaEnter();
    }; 

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode == 13){
                this.calcula();
            }
        });
    };

    this.capturaClicks = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumdisplay(el);
            if(el.classList.contains('btn-eq')) this.calcula();
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
        });
    };

    this.calcula = () => {
        try {
            let conta = eval(this.display.value);

            if(!conta){
                alert('Conta invalida');
                return;
            }

            this.display.value = String(conta);
        } 
        catch {
            alert('Conta invalida');
            return;
        }
    };

    this.addNumdisplay = el => this.display.value += el.innerText;    
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    
            
}

const calculadora = new Calculadora();
calculadora.inicia();