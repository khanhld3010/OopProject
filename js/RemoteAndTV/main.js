let tv1 = new Television(1,20)
let remote1 = new Remote("RMT01")

remote1.connectToTv(tv1)
remote1.turnOn()
remote1.changeChannelButton(5)
remote1.changeVolumeButton(2)