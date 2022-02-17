function increment() {
    var num = document.getElementById("result").innerText;
    document.getElementById("result").innerText++;
} function decrement() {
    var num = document.getElementById("result").innerText;
    if (num != 0) {
        document.getElementById("result").innerText--;
    }
}
// binding eventns
document.getElementById("inc").addEventListener("click", function () {
    increment();
})
document.getElementById("dec").addEventListener("click", function () {
    decrement();
})