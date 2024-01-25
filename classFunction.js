function AutoFunction(marca, modelo, año) {
    /* Atributos */
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;

    /* Metodos */
    /* Getter */
    this.getMarca = function () {
      return this.marca;
    };
    this.getModelo = function () {
      return this.modelo;
    };
    this.getAño = function () {
      return this.año;
    };
    /* Setter */
    this.setMarca = function (marca) {
      this.marca = marca;
    };
    this.setModelo = function (modelo) {
      this.modelo = modelo;
    };
    this.setAño = function (año) {
      this.año = año;
    };
  }
  const newAutoFunction = new AutoFunction("Toyota", "Siena", 2000);