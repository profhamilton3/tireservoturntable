input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
    wuKong.setServoSpeed(wuKong.ServoList.S0, 75)
    basic.pause(500)
    wuKong.setServoSpeed(wuKong.ServoList.S0, -75)
    basic.pause(500)
    wuKong.setServoSpeed(wuKong.ServoList.S0, 75)
    basic.pause(500)
    wuKong.setServoSpeed(wuKong.ServoList.S0, -75)
    basic.pause(2000)
    wuKong.setServoSpeed(wuKong.ServoList.S0, 0)
})
music.setVolume(50)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Butterfly)
basic.forever(function () {
	
})
