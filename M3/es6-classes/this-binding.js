class Logger {
  constructor(name) {
    this.name = name;
  }

  functionSayName() {
    console.log(this.name);
  }

  arrowSayName = () => {
    console.log(this.name);
  };
}

const janus = new Logger("janus");
console.log(janus);

// janus.functionSayName();
// janus.arrowSayName();

// const functionSayName = janus.functionSayName;
// functionSayName();

// const arrowSayName = janus.arrowSayName;
// arrowSayName();
