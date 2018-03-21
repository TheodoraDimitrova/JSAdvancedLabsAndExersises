function attachGradientEvents() {
    let element = document.getElementById('gradient-box');
    element.addEventListener('mousemove', function (event) {
        let res = Math.round(event.offsetX / (event.target.offsetWidth-1)*100);
        document.getElementById('result').textContent = res + "%";
    });
    element.addEventListener('mouseleave', function () {
        document.getElementById('result').textContent = "";
    })

}