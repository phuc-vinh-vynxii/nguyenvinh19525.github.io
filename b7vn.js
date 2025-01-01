const colorInputCode = document.querySelector
("#input-color-code")
const widthInput = document.querySelector
("#input-width")
const lengthInput = document.querySelector
("#input-length")
const rectangle = document.querySelector 
("#rectangle")
const submitButton = document.querySelector
("#submit-button")


submitButton.addEventListener (
    "click",
    () => {
        const color = colorInputCode.value.trim();
        const width = parseInt(widthInput.value);
        const length = parseInt(lengthInput.value);

        if (!color || isNaN(width) || isNaN(length)) {
            alert("Vui lòng nhập đầy đủ thông tin!")
            return;
        }

        rectangle.style.backgroundColor = `#${color}`;
        rectangle.style.width = `${width}px`;
        rectangle.style.height = `${length}px`;
        rectangle.style.display = "flex";
        rectangle.textContent = `#${color}`; 
    }
);

rectangle.addEventListener(
    "click",
    () => {
        colorInputCode = "";
        widthInput = "";
        lengthInput = "";
        rectangle.style.display = "none";
    }
)