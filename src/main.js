function increment() {
    display("+")
} function decrement() {
    display("-")

}
function display(op) {
    var num = document.getElementById("result").innerText;
    if (op == '+') {
        document.getElementById("result").innerText++;
    }
    else {
        if (num != 0) {
            document.getElementById("result").innerText--;
        }
    }

}
// binding eventns
document.getElementById("inc").addEventListener("click", function () {
    increment();
})
document.getElementById("dec").addEventListener("click", function () {
    decrement();
})