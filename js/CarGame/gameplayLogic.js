let rockArray =[]
function createRock(){
    let randomLane = Math.floor(Math.random() * totalLanes);
    let rock = new Rock(randomLane, "image/pngtree-monochrome-rock-clip-art-png-image_2689540.jpg");
    rockArray.push(rock);
}

let presentArray = []
function createPresent(){
    let checkOverLapWithRock;
    let randomType = Math.floor(Math.random() * 3);
    let randomLane;
    do {
        checkOverLapWithRock = false;
        randomLane = Math.floor(Math.random() * totalLanes);
        for (let i = 0; i < rockArray.length; i++) {
            let rock = rockArray[i];
            if (rock.lane === randomLane && rock.y <100){
                checkOverLapWithRock = true;
                break;
            }
        }

    }while (checkOverLapWithRock === true)
    let present = new Present(randomLane, randomType);
    presentArray.push(present);
}

//kiểm tra va chạm
function iscollide(obj1, obj2) {
    let sameLane = (obj1.lane === obj2.lane);
    let isYOverlapping = (obj1.y < obj2.y + obj2.height) &&
                                        (obj1.y + obj1.height > obj2.y);

    // Trả về true nếu thỏa mãn CẢ HAI điều kiện
    return sameLane && isYOverlapping;
}




// --- 3. VÒNG LẶP GAME (GAME LOOP) ---
function gameLoop() {
    // Xóa toàn bộ khung hình cũ trước khi vẽ khung hình mới
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Vẽ hình nền đường đua
    drawRoad();
    car.draw(ctx, laneWidth);
    // rock.draw(ctx, laneWidth);
    // rock.update(car.speed)
    for (let i = 0; i < rockArray.length; i++) {
        rockArray[i].draw(ctx,laneWidth);
        rockArray[i].update(car.speed);
        if (rockArray[i].y > canvas.height) {
            rockArray.splice(i, 1);
            i--
            continue
        }
        if (iscollide(car, rockArray[i])) {
            // Xử lý thua cuộc
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);

            return; // Dừng vòng lặp
        }
    }

    for (let i = 0; i < presentArray.length; i++) {
        presentArray[i].draw(ctx,laneWidth);
        presentArray[i].update(car.speed);
        if (presentArray[i].y > canvas.height) {
            presentArray.splice(i, 1);
            i--
            continue
        }
        if (iscollide(car, presentArray[i])) {
            presentArray[i].updateScore(car)
            presentArray.splice(i, 1);
            calculateScore()

        }
    }

    // Yêu cầu trình duyệt tiếp tục lặp lại hàm này
    requestAnimationFrame(gameLoop);
}

function calculateScore() {
    let scoreValue = document.getElementById("scoreValue");
    scoreValue.innerHTML = `${car.score}`
}


