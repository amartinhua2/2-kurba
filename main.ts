DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 45)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 20)
})
