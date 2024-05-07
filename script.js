let myVar;

function myFunction(){
    myVar = setTimeout(showPage, 3000)
}

function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

const root = document.querySelector("#myDiv");
const { innerHeight: initialInnerHeight, innerWidth: initialInnerWidth } = window;
let adjustedHeight = Math.max(350, initialInnerHeight);
let adjustedWidth = Math.max(750, initialInnerWidth);

class Bubble {
  constructor() {
    this.initBubble();
  }

  initBubble() {
    this.createBubble();
    this.setProperties();
    this.animateBubble();
  }

  createBubble() {
    this.bubbleSpan = document.createElement("span");
    this.bubbleSpan.classList.add("bubble");
    root.append(this.bubbleSpan);
    this.bubbleSpan.addEventListener("click", () => this.bubbleEnd());
  }

  setProperties() {
    this.color = this.randomColor();
    this.size = this.randomNumber(60, 20);
    this.posY = this.randomNumber(adjustedHeight - 20, 20);
    this.posX = this.randomNumber(adjustedWidth - 20, 20);

    Object.assign(this.bubbleSpan.style, {
      backgroundColor: this.color,
      height: `${this.size}px`,
      width: `${this.size}px`,
      top: `${this.posY}px`,
      left: `${this.posX}px`
    });
  }

  animateBubble() {
    setTimeout(() => {
      this.setProperties();
      this.animateBubble();
    }, this.randomNumber(12));
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomColor() {
    return `rgba(${this.randomNumber(255, 0)}, ${this.randomNumber(255, 0)}, ${this.randomNumber(255, 0)}, ${Math.random().toFixed(1)})`;
  }

  bubbleEnd() {
    const removingTime = this.randomNumber(1,12);
    setTimeout(() => this.bubbleSpan.classList.add("bubble--bust"), removingTime - 100);
    setTimeout(() => {
      this.bubbleSpan.remove();
      new Bubble(); // Recreate bubble instance
    }, removingTime);
  }
}

setInterval(() => new Bubble(), 300);
