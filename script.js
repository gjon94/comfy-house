"use strict"

class ProductsFactory {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.choice = 0;


    }


    renderInProducts() {
        let section = document.createElement("section")
        section.classList.add("product_card")

        let button = document.createElement("div")
        button.classList.add("add_cart")
        button.textContent = "add"

        setInterval(()=>this.choice ? button.textContent="nel carrello" :button.textContent="add")
        let h6 = document.createElement("h6")
        h6.textContent = this.name

        let span = document.createElement("span")
        span.textContent = this.price


        section.innerHTML = `<div class="img_container">
                <img src="https://comfy-house-javascript.netlify.app/images/product-1.jpeg" alt="">
               </div>`;


        section.appendChild(button)
        section.append(h6)
        section.append(span)

        
        button.addEventListener("click", () => this.choice++)

        return section
    }

    renderInModal() {
        let section = document.createElement("section")
        let buttonIncrement = document.createElement("button")
        let buttonDecrement = document.createElement("button")
        let h3 = document.createElement("h3")

        
        buttonIncrement.textContent = "aggiungi +"
        buttonDecrement.textContent = "rimuovi -"

        section.append(buttonIncrement)
        section.append(h3)
        section.append(buttonDecrement)
        h3.textContent = this.choice
        setInterval(()=>h3.textContent = this.choice,1000)

        buttonIncrement.addEventListener("click", () => incrementChoice(this, h3))
        buttonDecrement.addEventListener("click", () => decrementChoice(this, h3))

        return section
    }
}

function incrementChoice(self, h) {
    self.choice === 99 ? "" : self.choice++
    h.textContent = self.choice
    console.log(this)
}

function decrementChoice(self, h) {

    self.choice === 0 ? "" : self.choice--
    h.textContent = self.choice
    console.log(this)
}

const productsWrapper = document.querySelector("#products_wrapper")
const modalContent = document.querySelector(".modal-content")
const productsList = [
    new ProductsFactory("letto_1", 44),
    new ProductsFactory("letto_2", 73),
    new ProductsFactory("letto_3", 45),
    new ProductsFactory("letto_4", 11),
    new ProductsFactory("letto_5", 72),
    new ProductsFactory("letto_6", 42),
]


// productsWrapper.append(pino.renderInProducts())


productsList.forEach((el) => {
    productsWrapper.append(el.renderInProducts())
    modalContent.append(el.renderInModal())
})




// MODAL FUNCTIONS 
const modal = document.querySelector("#modal")
const showModalButton = document.querySelector("#cart")
const closeModalButton = document.querySelector("#close-modal")

closeModalButton.addEventListener("click", () => {
    modal.classList.toggle("modal-open")
})
showModalButton.addEventListener("click", () => {
    modal.classList.toggle("modal-open")
})

console.log("end")