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

const jSeries: Phone = {
  brand: "Samsung",
  processor: Processor.EXYNOS,
  memory: "16GB",
  color: "Black",
  print(){
    console.log("My " + this.brand + " phone is colored " + this.color + 
        " that has a RAM of " + this.memory + 
        " with a processor called " + this.processor);
  }
};

const iPhone: Phone = {
  brand: "Apple",
  processor: Processor.APPLE,
  memory: "8Gb",
  color: "Black",
  print: function (): void {
    console.log ("The Brand of my phone is " + this.brand +
        ", A Brand that focuses on Security and Good " +
        "for Photography and my processor is " + this.processor + ".\n" + 
        "In the shade of " + this.color + " and it has " + this.memory +
        " Memory good for gaming.");
  }
};

vivo.print();
jSeries.print();
iPhone.print();