var Processor;
(function (Processor) {
    Processor["SNAPDRAGON"] = "Snapdragon";
    Processor["MEDIATEK"] = "Mediatek";
    Processor["EXYNOS"] = "Exynos";
    Processor["KIRIN"] = "Kirin";
    Processor["APPLE"] = "Apple A";
})(Processor || (Processor = {}));
var redmi = {
    brand: "Xiaomi",
    processor: Processor.SNAPDRAGON,
    memory: "4Gb",
    color: "Titanium Black",
    print: function () {
        console.log("The Brand of my Phone is " + this.brand + " and my Processor"
            + " is " + this.processor + ".\n" +
            "Which is one of the famous phone" + " processor in the market.\n" +
            "It also has a " + this.memory +
            " Ram for Multitasking.\n" + "My Phone has a color of " +
            this.color + " which looks very premium.");
    }
};
var vivo = {
    brand: "Vivo",
    processor: Processor.MEDIATEK,
    memory: "8GB",
    color: "Red",
    print: function () {
        console.log("Brand: " + this.brand + ", Processor: " + this.processor +
            ", Memory: " + this.memory + ", Color: " + this.color);
    }
};
var jSeries = {
    brand: "Samsung",
    processor: Processor.EXYNOS,
    memory: "16GB",
    color: "Black",
    print: function () {
        console.log("My " + this.brand + " phone is colored " + this.color +
            " that has a RAM of " + this.memory +
            " with a processor called " + this.processor);
    }
};
var iPhone = {
    brand: "Apple",
    processor: Processor.APPLE,
    memory: "8Gb",
    color: "Black",
    print: function () {
        console.log("The Brand of my phone is " + this.brand +
            ", A Brand that focuses on Security and Good " +
            "for Photography and my processor is " + this.processor + ".\n" +
            "In the shade of " + this.color + " and it has " + this.memory +
            " Memory good for gaming.");
    }
};
redmi.print();
vivo.print();
jSeries.print();
iPhone.print();
