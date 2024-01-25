class AutoClass {
  marca;
  modelo;
  año;
  constructor({ marca, modelo, año }) {
    console.log("Hola")
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  /* Getter */
  getMarca() {
    console.log(this.marca);
    return this.marca;
  }

  /* Setter */
  setMarca(marca) {
    this.marca = marca;
  }
}

const autoToyota = new AutoClass("Toyota", "Supra", 1990);
/* Constante */
const autoRenault = new AutoFunction("Renault", "Copa", 1980);



