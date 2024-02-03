let input = document.querySelector("input");
let btn = document.querySelectorAll("button");
let arr = Array.from(btn);
let string = "";

let op = document.querySelectorAll(".opr");
let opt = Array.from(op);
// console.log(opt);
let f_op = opt[0].innerHTML;
let second_op = opt[1].innerHTML;
let third_op = opt[2].innerHTML;
let four_op = opt[3].innerHTML;
let five_op = opt[4].innerHTML;
let six_op = opt[5].innerHTML;

console.log(f_op);

function small_font() {
	if (string.length > 15 && string.length < 23) {
		input.style.fontSize = "20px";
	} else if (string.length > 22) {
		input.style.fontSize = "15px";
	}
}

arr.forEach((button) => {
	button.addEventListener("click", (e) => {
		small_font();
		if (e.target.innerHTML == "AC") {
			string = "";
			input.value = string;
		} else if (string == "" && e.target.innerHTML == "=") {
			string = "Error";
			setTimeout(() => {
				string = "";
			}, 1000);
			input.value = string;
		} else if (e.target.innerHTML == "=") {
			string = eval(string);
			input.value = string;
		} else if (e.target.innerHTML == "DEL") {
			string = string.slice(0, string.length - 1);
			input.value = string;
		} else {
			string += e.target.innerHTML;
			input.value = string;
		}
	});
});
