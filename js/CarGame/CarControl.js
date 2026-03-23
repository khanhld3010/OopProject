document.addEventListener("keydown", function(e) {
    switch (event.key) {
        case "ArrowLeft":
            car.moveLeft()
            break;
        case "ArrowRight":
            car.moveRight(5)
            break;
        case "ArrowUp":
            car.moveForward()
            break;
        case "ArrowDown":
            car.moveBack()
            break
        case "Control":
            car.speedUp()
            break;
    }
})