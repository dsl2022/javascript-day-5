//  color, bulbType, plugType,
class Lamp {
  constructor(customedName, color, bulbType, plugType) {
    this.color = color;
    this.bulbType = bulbType;
    this.plugType = plugType;
    this.customedName = customedName;
  }
  printModelDetail() {
    console.log(
      `The lamp is called ${this.customedName}\n The color is${this.color},\nThe bulb type is ${this.bulbType},\n The plug type is${this.plugType}`
    );
  }
}

// color [red,gray, black, blue, orange]
// bulbType [12, 30, 50, 70, 100]
// plugType ["A", "B","C"]

const smartLamp = new Lamp("smart lamp", "red", 100, "A");
const bedSideLamp = new Lamp("bed side lamp", "gray", 30, "C");

smartLamp.printModelDetail();
bedSideLamp.printModelDetail();
