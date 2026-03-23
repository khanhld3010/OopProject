function Car(imageSrc){
    this.lane = 2
    this.width = 40
    this.height = 70
    this.image = new Image()
    this.image.src = imageSrc
    //điểm số của người chơi
    this.score = 0

    //quyết định tốc độ của làn đường
    this.speed = 1.0

    // Tọa độ xe được đặt sát góc dưới màn hình
    this.y = 600 - this.height - 20;

    this.draw = function(ctx, laneWidth) {
        let x = (this.lane * laneWidth) + (laneWidth / 2) - (this.width / 2);

        if (this.image.complete){
            ctx.drawImage(this.image, x, this.y, this.width, this.height);
        }else {
            // Vẽ hình khối màu tạm thời trong lúc chờ ảnh tải
            ctx.fillStyle = "red";
            ctx.fillRect(x, this.y, this.width, this.height);
        }
    }

    this.moveLeft = function () {
        if (this.lane > 0) this.lane -= 1;
    }

    this.moveRight = function (maxLanes) {
        if (this.lane < maxLanes - 1) this.lane += 1;
    }

    this.moveForward = function () {
        //kiểm tra nếu xe đang ở trên cùng
        if (this.y > 0) {
            this.y -= 45; // Mỗi lần bấm tiến lên 15 pixel (bạn có thể chỉnh số này)
        }
    }

    this.moveBack = function () {
        // Tránh cho xe đi tụt xuống dưới đáy màn hình (600 là chiều cao canvas)
        if (this.y < 600 - this.height) {
            this.y += 45;
        }
    }

    this.speedUp = function () {
        if (this.speed <= 7) {
            this.speed += 1;
        }else{
            this.speed = 1.0;
        }
    }
}