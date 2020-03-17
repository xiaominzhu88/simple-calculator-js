function showValue(val) {
  document.getElementById("screen").value += val;
}

function clearValue() {
  document.getElementById("screen").value = "";
}

let calculate = function() {
  let result = eval(document.getElementById("screen").value);

  document.getElementById("screen").value = result;
};

document.getElementById("equal").addEventListener("click", calculate);

let toggle = function() {
  let num = document.getElementById("screen").value;
  if (num > 0) {
    num = -Math.abs(num);
    document.getElementById("screen").value = num;
  }
  /*else if (num < 0) {
    num = Math.abs(num);

    document.getElementById("screen").value = num;
}
  return 0; */
};

document.getElementById("toggle").addEventListener("click", toggle);
