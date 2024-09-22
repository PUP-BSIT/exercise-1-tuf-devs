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

const redmi: Phone = {
  brand: "Xiaomi",
  processor: Processor.SNAPDRAGON,
  memory: "4Gb",
  color: "Titanium Black",
  print: function(): void {
    console.log("The Brand of my Phone is " + this.brand + " and my Processor"
        + " is " + this.processor + ".\n" + 
        "Which is one of the famous phone" + " processor in the market.\n" + 
        "It also has a " + this.memory + 
        " Ram for Multitasking.\n" + "My Phone has a color of " + 
        this.color + " which looks very premium.");
  }
};

redmi.print();