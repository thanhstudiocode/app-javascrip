function next() {
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var mk = arr[1].value;
    if(name == "" || mk == "") {
        alert("vui lòng điền đầy đủ")
        return;
    }
}
function x() {
    window.location.href = "sign in/sign in.html"
}
