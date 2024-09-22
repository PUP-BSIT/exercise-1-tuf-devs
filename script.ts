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

jSeries.print();