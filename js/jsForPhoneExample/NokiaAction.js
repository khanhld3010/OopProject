let memoryNokia = {
    draft: "",
    inbox: [],
    inboxSendHistory: []
};

let nokia = new MobilePhone(memoryNokia);

let nokiaPowerButton = document.getElementById("btn-nokia-power")
nokiaPowerButton.addEventListener("click", function () {
    nokia.powerButtonClick()
    if (nokia.checkStatus()) {
        displayScreenNokia(`Điện thoại đang hoạt động`)
    } else {
        displayScreenNokia("Điện thoại đang tắt")
    }
})

let nokiaBatteryButton = document.getElementById("btn-nokia-battery")
nokiaBatteryButton.addEventListener("click", function () {
    let mess = nokia.checkBattery()
    displayScreenNokia(mess)
})

let nokiaChargeButton = document.getElementById("btn-nokia-charge")
nokiaChargeButton.addEventListener("click", function () {
    let mess = nokia.chargePhone()
    displayScreenNokia(mess)
})

let nokiaDraft = document.getElementById("input-nokia-message");

let nokiaSaveDraft = document.getElementById("btn-nokia-draft");
nokiaSaveDraft.addEventListener("click", function () {
    displayScreenNokia(nokia.textDraft(nokiaDraft.value))
})

let nokiaCheckDraftButton = document.getElementById("btn-nokia-check-draft");
nokiaCheckDraftButton.addEventListener("click", function () {
    console.log("checkDraftButton")
    displayScreenNokia(nokia.checkDraft())
})

let nokiaClearDraftButton = document.getElementById("btn-nokia-clear-draft");
nokiaClearDraftButton.addEventListener("click", function () {
    console.log("clearDraftButton")
    displayScreenNokia(nokia.clearDraft())
})

let nokiaSendMessageButton = document.getElementById("btn-nokia-send");
nokiaSendMessageButton.addEventListener("click", function () {
    displayScreenNokia(nokia.sendMess(nokiaDraft.value, iphone))
})

let nokiaCheckMessageButton = document.getElementById("btn-nokia-inbox");
nokiaCheckMessageButton.addEventListener("click", function () {
    console.log("checkMessageButton")
    displayScreenNokia(nokia.checkInbox())
})

let nokiaCheckHistoryButton = document.getElementById("btn-nokia-history");
nokiaCheckHistoryButton.addEventListener("click", function () {
    console.log("checkHistoryButton")
    displayScreenNokia(nokia.checkSendHistory())
})

function displayScreenNokia(str) {
    let nokiaScreen = document.getElementById("nokia-screen")
    if (str.length === 0) {
        if (nokia.checkStatus()) {
            nokiaScreen.innerHTML = "Điện thoại đang hoạt động"
        } else {
            nokiaScreen.innerHTML = "Điện thoại đang tắt"
        }
    } else {
        nokiaScreen.innerHTML = str
    }
}