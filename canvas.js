const canvas = document.querySelector(".canvas__container");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

console.dir(window);

// rectangle, takes four arguments (x, y, width, height)
// ctx.fillStyle = "#0000ff80";
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = "#ff000080";
// ctx.fillRect(200, 300, 100, 100);
// ctx.fillStyle = "#00ff0080";
// ctx.fillRect(300, 200, 200, 100);

//line

// ctx.beginPath();
// ctx.moveTo(100, 200);
// ctx.lineTo(200, 300);
// ctx.moveTo(200, 300);
// ctx.lineTo(400, 200);
// ctx.moveTo(400, 200);
// ctx.lineTo(300, 100);
// ctx.moveTo(300, 100);
// ctx.lineTo(100, 200);
// ctx.strokeStyle = "red";
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 250);
// ctx.lineTo(250, 350);
// ctx.moveTo(250, 350);
// ctx.lineTo(450, 250);
// ctx.moveTo(450, 250);
// ctx.lineTo(350, 150);
// ctx.moveTo(350, 150);
// ctx.lineTo(150, 250);
// ctx.strokeStyle = "green";
// ctx.stroke();

// arc / circle
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI * 2, false);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(300, 500, 100, 0, Math.PI * 2, true);
// ctx.stroke();

// const drawCircle = (start, end) => {
//   for (let i = start; i < end; i++) {
//     const num1 = i + 25 * 10;
//     const num2 = i + 25 * 5;
//     const num3 = i + 20;
//     ctx.beginPath();
//     ctx.arc(num1, num2, num3, 0, Math.PI * 2, false);
//     ctx.strokeStyle = "#00500080";
//     ctx.stroke();
//   }
// };
// let r;

// const mouseAnimation = e => {
//   ctx.clearRect(0, 0, innerWidth, innerHeight);
//   const x = e.clientX;
//   const y = e.clientY;
//   const r = 10 + Math.random() * 5;
//   ctx.beginPath();
//   ctx.arc(x, y, r, 0, Math.PI * 2, true);
//   ctx.strokeStyle = "#90b3be";
//   ctx.fill();
// };
// canvas.addEventListener("mousemove", e => {
//   mouseAnimation(e);
// });

// const mouseClickAnimation = (clientX, clientY, clientR) => {
//   ctx.clearRect(0, 0, innerWidth, innerHeight);
//   if (clientX === 0 || clientY === 0 || clientR === 0) {
//     return;
//   }
//   const x = clientX;
//   const y = clientY;
//   clientR = clientR - 10;
//   ctx.beginPath();
//   ctx.arc(x, y, clientR, 0, Math.PI * 2, false);
//   ctx.strokeStyle = "#90b3be";
//   ctx.fill();
//   requestAnimationFrame(() => {
//     mouseClickAnimation(x - 1, y - 1, clientR - 1);
//   });
// };
// canvas.addEventListener("click", e => {
//   mouseClickAnimation(e.clientX, e.clientY);
// });

// ctx.beginPath();
// ctx.arc(400, 400, 100, 0, Math.PI * 2, true);
// ctx.strokeStyle = "#20550080";
// ctx.stroke();

const Circle = class {
  constructor(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
      ctx.fillStyle = "#551cc5";
      ctx.fill();
    };
    this.update = () => {
      if (this.x + this.r > innerWidth || this.x + this.r < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.r > innerHeight || this.y + this.r < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    };
  }
};

let circleArr = [];
for (let i = 0; i < 1000; i++) {
  let circle = new Circle(
    Math.random() * innerWidth,
    Math.random() * innerHeight,
    Math.random() * -0.5 * 50,
    Math.random() * -0.5 * 50,
    Math.random() * 10
  );
  circleArr.push(circle);
}

circleArr.map(circle => {
  console.log(circle);
});

const animationCircle = () => {
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  // circle1.draw();
  circleArr.map(circle => {
    circle.update();
  });
  // circle2.draw();
  // circle2.update();
  // circle3.draw();
  // circle3.update();
  // circle4.draw();
  // circle4.update();
  // circle5.draw();
  // circle5.update();
  // circle6.draw();
  // circle6.update();
  // circle7.draw();
  // circle7.update();

  requestAnimationFrame(() => animationCircle());
};

animationCircle();
// const animationCircleForwardX = (x, y) => {
//   ctx.clearRect(0, 0, innerWidth, innerHeight);

//   let newX = x + acc;
//   let newY = y;
//   if (newX + r > canvas.width) {
//     animationCircleDownwardY(newX, newY);
//     return;
//   }

//   ctx.beginPath();
//   ctx.arc(newX, newY, r, 0, Math.PI * 2, true);
//   ctx.strokeStyle = "#000000";
//   ctx.stroke();
//   requestAnimationFrame(() => {
//     animationCircleForwardX(newX, newY);
//   });
// };
// const animationCircleDownwardY = (x, y) => {
//   ctx.clearRect(0, 0, innerWidth, innerHeight);

//   let newX = x;
//   let newY = y + acc;
//   if (newY + r > canvas.height) {
//     animationCircleBackwardX(newX, newY);
//     return;
//   }

//   ctx.beginPath();
//   ctx.arc(newX, newY, r, 0, Math.PI * 2, true);
//   ctx.strokeStyle = "#000000";
//   ctx.stroke();
//   requestAnimationFrame(() => {
//     animationCircleDownwardY(newX, newY);
//   });
// };

// const animationCircleBackwardX = (x, y) => {
//   ctx.clearRect(0, 0, innerWidth, innerHeight);
//   let newX = x - acc;
//   let newY = y;
//   if (newX - r < 0) {
//     animationCircleUpwardY(newX, newY);
//     return;
//   }

//   ctx.beginPath();
//   ctx.arc(newX, newY, r, 0, Math.PI * 2, true);
//   ctx.strokeStyle = "#000000";
//   ctx.stroke();
//   requestAnimationFrame(() => {
//     animationCircleBackwardX(newX, newY);
//   });
// };

// const animationCircleUpwardY = (x, y) => {
//   ctx.clearRect(0, 0, innerWidth, innerHeight);
//   let newX = x;
//   let newY = y - acc;
//   if (newY - r < 0) {
//     animationCircleForwardX(newX, newY);
//     return;
//   }

//   ctx.beginPath();
//   ctx.arc(newX, newY, r, 0, Math.PI * 2, true);
//   ctx.strokeStyle = "#000000";
//   ctx.stroke();
//   requestAnimationFrame(() => {
//     animationCircleUpwardY(newX, newY);
//   });
// };

// animationCircleForwardX(0, 0);

// console.log(innerHeight);
// console.log(window.innerWidth);
