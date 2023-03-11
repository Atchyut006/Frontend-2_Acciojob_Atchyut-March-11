function calculate(num1, num2, operator) {
    // Use if-else statements to determine which arithmetic operation to perform based on the operator entered.
    // return the final value that you get after operating on num1 and num2 based on what the operator is
    // if operator == "+" then return num1+num2 , else if operator == "-" then return num1-num2 and so on....
    //   write your code here -->
  }
  
  // ignore the function below
  function performOperations() {
    // Get the values of the two input fields and the operator.
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    // Check if the input values are valid.
    if (operator === "+") {
      document.getElementById("result").value = num1+num2;
    }
    else if (operator === "-") {
      document.getElementById("result").value = num1-num2;
    }
    else if (operator === "*") {
      document.getElementById("result").value = num1*num2;
    }
    else if (operator === "/") {
      document.getElementById("result").value = num1/num2;
    }
  }