/**
 * Directions
 */
type DirectionCode = number
const LEFT_UP: DirectionCode = 0
const LEFT_DOWN: DirectionCode = 1
const RIGHT_UP: DirectionCode = 2
const RIGHT_DOWN: DirectionCode = 3

/**
 * Sides
 * Will use to determine from where colisions came
 */
type SideCode = number
const LEFT = 0
const RIGHT = 1
const UP = 2
const DOWN = 3

/**
 * This should be called on colision
 * @param current DirectionCode
 * @param colisionSide SideCode
 */
const changeDiretion = (current: DirectionCode, colisionSide: SideCode) => {
    // this conditional could be written in fewer lines, but this way its more readable (imho)
    if (current === LEFT_UP) {
        if (colisionSide === LEFT) {
            return RIGHT_UP
        } else if (colisionSide === UP) {
            return LEFT_DOWN
        }
    } else if (current === LEFT_DOWN) {
        if (colisionSide === LEFT) {
            return RIGHT_DOWN
        } else if (colisionSide === DOWN) {
            return LEFT_UP
        }
    } else if (current === RIGHT_UP) {
        if (colisionSide === RIGHT) {
            return LEFT_UP
        } else if (colisionSide === UP) {
            return RIGHT_DOWN
        }
    } else if (current === RIGHT_DOWN) {
        if (colisionSide === RIGHT) {
            return LEFT_DOWN
        } else if (colisionSide === DOWN) {
            return RIGHT_UP
        }
    }

    return current //default 
}
interface Shape {
    width: number
    height: number
    x: number
    y: number
}

interface Box {
    width: number
    height: number
}

const CanvasProps: Box = {
    width: 1000,
    height: 400,
}

const checkCollision = (shape: Shape, limits: Box) => {
    
}



window.onload = () => {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas")

    canvas.width = 1000
    canvas.height = 600
    const ctx = canvas.getContext("2d")


    ctx.fillStyle = "#aaa"

    console.log("Script loaded")
    let position = {
        x: 0,
        y: 0
    }

    let size = {
        width: 10,
        height: 10
    }

    let forward = true

    const move = () => {
        if (forward && ((position.x + size.width) > 1000 || (position.y + size.height) > 600)) {
            forward = false
        } else if (!forward && (position.x < 0 || position.y < 0)) {
            forward = true
        }

        if (forward) {
            position.x++
            position.y++
        } else {
            position.x--
            position.y--
        }

        ctx.clearRect(0, 0, 1000, 600)

        ctx.fillRect(position.x, position.y, size.width, size.height)

        window.requestAnimationFrame(move)
    }

    move()
}
