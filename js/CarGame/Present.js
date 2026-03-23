function Present(lane, index){
    this.lane = lane; // Quà sẽ rơi ngẫu nhiên ở 1 trong 5 làn
    this.width = 45;
    this.height = 45;
    this.image = new Image();
    this.type = ["image/conga.jpg",
            "image/1_dong_xu.jpg",
            "image/hop_qua.jpg"]

    // Xuất phát từ trên cùng, giấu bên ngoài màn hình
    this.y = -this.height;

    // Tốc độ trôi xuống của Quà
    this.speed = 1.0;


    this.image.src = this.type[index];

    switch (index) {
        case 0:
            this.score = 500
            break;
        case 1:
            this.score = 100
            break;
        case 2:
            this.score = 300
            break;
    }


    this.draw = function(ctx, laneWidth) {
        let x = (this.lane * laneWidth) + (laneWidth / 2) - (this.width / 2);

        if (this.image.complete) {
            ctx.drawImage(this.image, x, this.y, this.width, this.height);
        } else {
            // Nếu chưa có ảnh, vẽ Quà hình vuông màu xanh lá
            ctx.fillStyle = "green";
            ctx.fillRect(x, this.y, this.width, this.height);
        }
    };
    // Hàm cập nhật vị trí: Quà sẽ trôi dần xuống dưới
    this.update = function(carSpeed) {
        this.y += this.speed * carSpeed;
    };

    this.updateScore = function(car) {
        car.score += this.score;
    }
}