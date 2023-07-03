class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
   
   
    }


    clear() {
        this.currentOperand = ''
        this.previuosOperand = ''
        this.operation = undefined

    }

    delete() {

    }

    appendNumber(number) {

            if (number === '.' && this.currentOperand.includes('.')) return
            this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand == '') return
        if (this.previuosOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previuosOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute() {

    }

    updateDisplay() {

        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previuosOperand
    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-oparation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previuos-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator( previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener( 'click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener( 'click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

