basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(input.lightLevel())
    } else {
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
