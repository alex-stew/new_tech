// Compare Two Values
const when = (a, operator, b) => {
  switch (operator) {
    case "notEq":
      return a !== b;
      break;
    case "grtThan":
      return a > b;
      break;
    case "eq":
      return a === b;
    default:
      throw "Operator invalid!";
  }
};


module.exports = {
  when
}