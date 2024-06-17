function computeAmount() {
  let total = 0;
  let api = {};
  function lacs(amount) {
    total += amount * 1e5;
    return api;
  }

  function crore(amount) {
    total += amount * 1e7;
    return api;
  }

  function thousand(amount) {
    total += amount * 1e3;
    return api;
  }

  function value() {
    return total;
  }

  api = {
    lacs,
    crore,
    thousand,
    value,
  };
  return api;
}

console.log(
  computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(15)
    .thousand(45)
    .crore(7)
    .value(),
); // output 143045000
