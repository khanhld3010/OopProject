let memoryIphone = {
    draft: "",
    inbox: [],
    inboxSendHistory: []
};


let iphone = new MobilePhone(memoryIphone);

console.log(iphone);


let iphonePowerButton = document.getElementById("btn-iphone-power")
iphonePowerButton.addEventListener("click", function () {
    iphone.powerButtonClick()
    if (iphone.checkStatus()) {
        displayScreenIphone(`Điện thoại đang hoạt động`)
    } else {
        displayScreenIphone("Điện thoại đang tắt")
    }
})

let iphoneBatteryButton = document.getElementById("btn-iphone-battery")
iphoneBatteryButton.addEventListener("click", function () {
    let mess = iphone.checkBattery()
    displayScreenIphone(mess)
})

let iphoneChargeButton = document.getElementById("btn-iphone-charge")
iphoneChargeButton.addEventListener("click", function () {
    let mess = iphone.chargePhone()
    displayScreenIphone(mess)
})

let iphoneDraft = document.getElementById("input-iphone-message");

let saveDraft = document.getElementById("btn-iphone-draft");
saveDraft.addEventListener("click", function () {
    displayScreenIphone(iphone.textDraft(iphoneDraft.value))
})

let checkDraftButton = document.getElementById("btn-iphone-check-draft");
checkDraftButton.addEventListener("click", function () {
    console.log("checkDraftButton")
    displayScreenIphone(iphone.checkDraft())
})

let clearDraftButton = document.getElementById("btn-iphone-clear-draft");
clearDraftButton.addEventListener("click", function () {
    console.log("clearDraftButton")
    displayScreenIphone(iphone.clearDraft())
})

let sendMessageButton = document.getElementById("btn-iphone-send");
sendMessageButton.addEventListener("click", function () {
    displayScreenIphone(iphone.sendMess(iphoneDraft.value, nokia))
})

let checkMessageButton = document.getElementById("btn-iphone-inbox");
checkMessageButton.addEventListener("click", function () {
    console.log("checkMessageButton")
    displayScreenIphone(iphone.checkInbox())
})

let checkHistoryButton = document.getElementById("btn-iphone-history");
checkHistoryButton.addEventListener("click", function () {
    console.log("checkHistoryButton")
    displayScreenIphone(iphone.checkSendHistory())
})

function displayScreenIphone(str) {
    let iphoneScreen = document.getElementById("iphone-screen")
    if (str.length === 0) {
        if (iphone.checkStatus()) {
            iphoneScreen.innerHTML = "Điện thoại đang hoạt động"
        } else {
            iphoneScreen.innerHTML = "Điện thoại đang tắt"
        }
    } else {
        iphoneScreen.innerHTML = str
    }

}