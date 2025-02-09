input.onButtonPressed(Button.A, function () {
    if (diceSides == 4) {
        diceSides = 12
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (diceSides == 6) {
        diceSides = 4
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # . . .
            `)
    } else if (diceSides == 8) {
        diceSides = 6
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            `)
    } else if (diceSides == 10) {
        diceSides = 8
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            # # # # .
            `)
    } else if (diceSides == 12) {
        diceSides = 10
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else {
        diceSides = 12
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    if (diceSides == 4) {
        diceSides = 6
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            `)
    } else if (diceSides == 6) {
        diceSides = 8
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            # # # # .
            `)
    } else if (diceSides == 8) {
        diceSides = 10
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (diceSides == 10) {
        diceSides = 12
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (diceSides == 12) {
        diceSides = 4
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # . . .
            `)
    } else {
        diceSides = 4
    }
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    brightLevel = 255
    diceValue = randint(1, diceSides)
    if (diceValue == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            `)
    } else if (diceValue == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            . . . . .
            `)
    } else if (diceValue == 3) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            `)
    } else if (diceValue == 4) {
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            . . # . #
            . . . . .
            `)
    } else if (diceValue == 5) {
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . # . #
            . . . . .
            `)
    } else if (diceValue == 6) {
        basic.showLeds(`
            . . . . .
            . . # # #
            . . . . .
            . . # # #
            . . . . .
            `)
    } else if (diceValue == 7) {
        basic.showLeds(`
            . . . . .
            . . # # #
            . . . # .
            . . # # #
            . . . . .
            `)
    } else if (diceValue == 8) {
        basic.showLeds(`
            . . . . .
            . . # # #
            . . # . #
            . . # # #
            . . . . .
            `)
    } else if (diceValue == 9) {
        basic.showLeds(`
            . . . . .
            . . # # #
            . . # # #
            . . # # #
            . . . . .
            `)
    } else if (diceValue == 10) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (diceValue == 11) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . # .
            # # . . .
            # # . . .
            `)
    } else if (diceValue == 12) {
        basic.showLeds(`
            # # . . .
            # # # . .
            # # . . .
            # # . . #
            # # . . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
    }
    basic.pause(2000)
})
let diceValue = 0
let brightLevel = 0
let diceSides = 0
diceSides = 12
basic.showString("AB=type")
basic.showString("SHAKE=roll")
basic.forever(function () {
    led.setBrightness(brightLevel)
    brightLevel += -5
    if (brightLevel < 0) {
        brightLevel = 0
    }
})
