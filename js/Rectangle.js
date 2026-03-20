function Rectangle(lengthRectangle,widthRectangle){
    this.lengthR = lengthRectangle;
    this.widthR = widthRectangle;

    this.area = function () {
        return this.lengthR * this.widthR;
    }
    this.chuvi = function (){
        return (this.lengthR + this.widthR) * 2;
    }
}


function displayRectangle() {
    let rectangle = new Rectangle(200,300)
    console.log(rectangle.lengthR)
    console.log(rectangle.widthR)

    // Bước 1: Lấy thẻ canvas từ HTML
    const canvas = document.getElementById("myCanvas");

// Bước 2: Lấy "context" 2D (chính là bộ công cụ chứa các hàm để vẽ)
    const ctx = canvas.getContext("2d");

// --- VÍ DỤ 1: Vẽ hình chữ nhật TÔ ĐẶC ---
    ctx.fillStyle = "blue"; // Đặt màu tô là màu xanh dương
// Vẽ tại tọa độ x=50, y=50, chiều rộng=150, chiều cao=100
    ctx.fillRect(50, 50, rectangle.widthR, rectangle.lengthR);

    let hdText = document.getElementById("hidden");
    hdText.innerHTML = `Dien tich: ${rectangle.area()} \nChi vi: ${rectangle.chuvi()}`;

}

displayRectangle()