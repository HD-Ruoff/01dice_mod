input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.Click), function () {
    ausgewählt = 1
    basic.setLedColor(Colors.Green)
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    if (ausgewählt == 0) {
        if (auswahl > 1) {
            auswahl += -1
        }
        basic.showNumber(auswahl)
    }
})
function startNummer () {
    basic.showString("#1")
    basic.pause(500)
    basic.clearScreen()
    basic.pause(200)
}
input.onGesture(Gesture.Shake, function () {
    geschüttelt = 1
    basic.setLedColor(0)
    if (ausgewählt == 1) {
        basic.clearScreen()
        zahl = randint(0, auswahl - 1)
    }
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    if (ausgewählt == 0) {
        auswahl += 1
        basic.showNumber(auswahl)
    }
})
let zahl = 0
let geschüttelt = 0
let ausgewählt = 0
let auswahl = 0
auswahl = 1
startNummer()
basic.showNumber(1)
basic.forever(function () {
    if (ausgewählt == 1 && geschüttelt == 1) {
        basic.showNumber(zahl + 1)
    }
})
