function Rock(lane, imageSrc) {
    this.lane = lane; // Đá sẽ rơi ngẫu nhiên ở 1 trong 5 làn
    this.width = 45;
    this.height = 45;

    // Xuất phát từ trên cùng, giấu bên ngoài màn hình
    this.y = -this.height;

    // Tốc độ trôi xuống của hòn đá
    this.speed = 1.0;

    this.image = new Image();
    this.image.src = imageSrc;

    this.draw = function(ctx, laneWidth) {
        let x = (this.lane * laneWidth) + (laneWidth / 2) - (this.width / 2);

        if (this.image.complete) {
            ctx.drawImage(this.image, x, this.y, this.width, this.height);
        } else {
            // Nếu chưa có ảnh, vẽ cục đá hình vuông màu xám
            ctx.fillStyle = "gray";
            ctx.fillRect(x, this.y, this.width, this.height);
        }
    };

    // Hàm cập nhật vị trí: Đá sẽ trôi dần xuống dưới
    this.update = function(carSpeed) {
        this.y += this.speed * carSpeed;
    };


}