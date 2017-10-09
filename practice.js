function showImg() {
    var showing = document.getElementById("showing")
    var fileInput = document.getElementById("fileinput")
    if (typeof FileReader === 'undefined'){
        showing.innerHTML = "抱歉您的浏览器不支持FileReader"
        fileInput.setAttribute('disabled','disabled')
    }else {
        fileInput.addEventListener('change',function () {
            var file = this.files[0];
            if (!/image\/\w+/.test(file.type)) {
                alert("请确保文件为图像类型");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                showing.innerHTML = '<img src="'+this.result+'" width="300" height="260" alt="">'
            }
        },false)
    }
}