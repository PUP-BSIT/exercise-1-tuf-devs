enum Processor {
  SNAPDRAGON = "Snapdragon",
  MEDIATEK = "Mediatek",
  EXYNOS = "Exynos",
  KIRIN = "Kirin",
  APPLE = "Apple A"
}

type Phone = {
  brand: string;
  processor: Processor;
  memory: string;
  color: string;
  print(): void;
}

const vivo: Phone = {
  brand: "Vivo",
  processor: Processor.MEDIATEK,
  memory: "8GB",
  color: "Red",
  print: function(): void {
    console.log("Brand: " + this.brand + ", Processor: " + this.processor + 
        ", Memory: " + this.memory + ", Color: " + this.color);
  }
};

vivo.print();