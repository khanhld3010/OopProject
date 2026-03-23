function MobilePhone(memory) {
    this.battery = 100;
    this.memory = {
        draft: memory.draft,
        inbox: memory.inbox,
        inboxSendHistory: memory.inboxSendHistory
    }
    this.status = true

    this.checkStatus = function () {
        return this.status
    }

    this.checkBattery = function () {
        if (!this.checkStatus()) {
            return "Điện thoại của bạn đang không hoạt động";
        }
        if (this.battery === 0){
            this.status = false
            return "Điện thoai đã hết pin"
        }
        else if (this.battery < 20){
            return `Điện thoại của bạn còn ${this.battery}%, cần được sạc pin`
        }else{
            return `Dung lượng pin còn lại là ${this.battery}%`
        }
    }

    this.decreaseBattery = function (){
        if (this.battery === 0){
            let mess = this.checkBattery()
            alert(mess)
            return
        }
        this.battery -= 1;

        if (this.battery === 0){
            let mess = this.checkBattery()
            alert(mess)
        }
    }
    this.chargePhone = function (){
        this.battery = 100
        if (!this.checkStatus()) {
            return `Điện thoại của bạn có ${this.battery} và đang tắt`
        }else{
            return `Điện thoại của bạn hoạt động với ${this.battery}% pin`
        }
    }

    this.powerButtonClick = function () {
        if (this.checkStatus()){
            if (confirm("Điện thoại đang bật, bạn có chắc muốn tắt không?")){
                this.status = false
            }
        }else{
            if (this.battery > 0){
                if (confirm("Điện thoại đang tắt, bạn có chắc muốn bật không?")){
                    this.status = true
                }
            }else {
                alert("Điện thoại đã hết pin. Vui lòng sạc!")
            }
        }
    }

    this.textDraft = function (str){
        if(!this.checkStatus()){
            return "Điện thoại đang không hoạt động"
        }
        this.decreaseBattery()
        this.memory.draft += str
        return "Đã lưu tin nhắn nháp"
    }

    this.checkDraft = function () {
        if(!this.checkStatus()){
            return "Điện thoại đang không hoạt động"
        }
        this.decreaseBattery()
        return `Tin nhắn nháp hiện tại là: <br> ${this.memory.draft} `
    }

    this.clearDraft = function (){
        if(!this.checkStatus()){
            return "Điện thoại đang không hoạt động"
        }
        this.decreaseBattery()
        this.memory.draft = ""
        return "Đã xóa tin nhắn nháp"

    }

    this.sendMess = function (str, otherPhone){
        if(!this.checkStatus()){
            return "Điện thoại đang không hoạt động"
        }
        this.decreaseBattery()
        this.memory.inboxSendHistory.push(str)

        otherPhone.receiveMessages(str)
        this.memory.draft = ""

        return "Đã gửi tin nhắn"
    }

    this.checkSendHistory = function () {
        if(!this.checkStatus()){
            return "Điện thoại đang không hoạt động"
        }

        this.decreaseBattery()
        let mess = "Đây là các tin nhắn bạn đã gửi: <br>"
        for (let i = 0; i < this.memory.inboxSendHistory.length; i++){
            mess += this.memory.inboxSendHistory[i] +"<br>"
        }
        return mess
    }

    this.receiveMessages = function (str) {
        if(!this.checkStatus()){
            return "Điện thoại đang không hoạt động"
        }
        this.decreaseBattery()
        this.memory.inbox.push(str)
        return "Bạn có tin nhắn mới"
    }

    this.checkInbox = function (){
        if(!this.checkStatus()){
            return "Điện thoại đang không hoạt động"
        }

        this.decreaseBattery()
        let mess = "Đây là các tin nhắn bạn đã nhận: <br>"
        for (let i = 0; i < this.memory.inbox.length; i++){
            mess += this.memory.inbox[i]  +"<br>"
        }
        return mess
    }
}