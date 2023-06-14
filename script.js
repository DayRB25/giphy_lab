console.log("Hello!")

var submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("Button clicked")
})

const handleFormSubmit = (e) => {
    e.preventDefault

}