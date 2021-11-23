function humanFileSize(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if(bytes < thresh) return bytes + ' B';
    var units = si ? ['kB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while(bytes >= thresh);
    return bytes.toFixed(1)+' '+units[u];
}


//this function is called when the input loads an image
function renderImage(file){
    var reader = new FileReader();
    reader.onload = function(event){
        the_url = event.target.result;
    //of course using a template library like handlebars.js is a better solution than just inserting a string
        $('#preview').html("<img src='"+the_url+"' />")
        $('#preview2').html("<img src='"+the_url+"' />")
        $('#name').html(file.name)
        $('#size').html(humanFileSize(file.size, "MB"))
        $('#type').html(file.type)
    }

//when the file is read it triggers the onload event above.
    reader.readAsDataURL(file);
} 

function BagName(){
    var BagNameTitle = document.getElementById("BagN").value;
    document.getElementById("BagTitle").innerHTML = BagNameTitle;
}
function BagDescription(){
    var BagDescp = document.getElementById("BagD").value;
    document.getElementById("BagDescription").innerHTML = BagDescp;
}
function BagMaterial(){
    var BagMat = document.getElementById("BagM").value;
    document.getElementById("BagMaterial").innerHTML = BagMat;
    document.getElementById("BagMaterial").style.lineHeight = '10px';
}

function uploadFile(){
    var file = $("input[type=file]").get(0).files[0];
    renderImage(file);
}

function Qr1(){
    document.getElementById("inputTitle").innerHTML = "QR Code 1";
    document.getElementById("inputTitlePrev").innerHTML = "QR Code 1 Preview";
}
function Qr2(){
    document.getElementById("inputTitle").innerHTML = "QR Code 2";
    document.getElementById("inputTitlePrev").innerHTML = "QR Code 2 Preview";
}
function Qr3(){
    document.getElementById("inputTitle").innerHTML = "QR Code 3";
    document.getElementById("inputTitlePrev").innerHTML = "QR Code 3 Preview";
}
function Qr4(){
    document.getElementById("inputTitle").innerHTML = "QR Code 4";
    document.getElementById("inputTitlePrev").innerHTML = "QR Code 4 Preview";
}
function Qr5(){
    document.getElementById("inputTitle").innerHTML = "QR Code 5";
    document.getElementById("inputTitlePrev").innerHTML = "QR Code 5 Preview";
}
function Qr6(){
    document.getElementById("inputTitle").innerHTML = "QR Code 6";
    document.getElementById("inputTitlePrev").innerHTML = "QR Code 6 Preview";
}
 