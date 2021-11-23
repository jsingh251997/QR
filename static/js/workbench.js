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
    if(BagNameTitle == ''){
        document.getElementById("BagTitle").innerHTML = "Bag Name";
    }
    else{
        document.getElementById("BagTitle").innerHTML = BagNameTitle;
    }
}
function BagDescription(){
    var BagDescp = document.getElementById("BagD").value;
    if(BagDescp == ""){
        document.getElementById("BagDescription").innerHTML = "Description of the bag. It can be anything to describe the product";
    }
    else{
        document.getElementById("BagDescription").innerHTML = BagDescp;
    }
}
function BagMaterial(){
    var BagMat = document.getElementById("BagM").value;
    if(BagMat == ''){
        document.getElementById("BagMaterial").innerHTML = "Crude Protein (Min) 28.0%\nCrude Fat (Min) 13.0%\nCrude Fiber (Max) 4.75%\nMoisture (Max) 12.0%\nLinoleic Acid (Min) 1.6%\nDocosahexaenoic Acid (DHA) (Min) 0.1%\nCalcium (Ca) (Min) 1.1%\nPhosphorus (P) (Min) 0.9%\nVitamin A (Min) 15,000 IU/kg\nVitamin E (Min) 100 IU/kg\nGlucosamine* (Min) 500 mg/kg\nOmega-6 Fatty Acids* (Min) 1.8%\nBacillus coagulans* (Min) 600 million CFU/lb";
    }
    else{
        document.getElementById("BagMaterial").innerHTML = BagMat;
        document.getElementById("BagMaterial").style.lineHeight = '10px';
    }
}

function uploadFile(){
    var file = $("input[type=file]").get(0).files[0];
    renderImage(file);
}
var imagDiv1 = document.getElementById("Qr1Img");
var imagDiv2 = document.getElementById("Qr2Img");
var imagDiv3 = document.getElementById("Qr3Img");
var imagDiv4 = document.getElementById("Qr4Img");
var imagDiv5 = document.getElementById("Qr5Img");
var imagDiv6 = document.getElementById("Qr6Img");
function Qr1(){
    imagDiv1.style.backgroundColor = "rgb(3, 1, 29, 0.5)";
    imagDiv1.style.color = "white";
    imagDiv2.style.backgroundColor = "";
    imagDiv2.style.color = "black";
    imagDiv3.style.backgroundColor = "";
    imagDiv3.style.color = "black";
    imagDiv4.style.backgroundColor = "";
    imagDiv4.style.color = "black";
    imagDiv5.style.backgroundColor = "";
    imagDiv5.style.color = "black";
    imagDiv6.style.backgroundColor = "";
    imagDiv6.style.color = "black";
}
function Qr2(){
    imagDiv2.style.backgroundColor = "rgb(3, 1, 29, 0.5)";
    imagDiv2.style.color = "white";
    imagDiv1.style.backgroundColor = "";
    imagDiv1.style.color = "black";
    imagDiv3.style.backgroundColor = "";
    imagDiv3.style.color = "black";
    imagDiv4.style.backgroundColor = "";
    imagDiv4.style.color = "black";
    imagDiv5.style.backgroundColor = "";
    imagDiv5.style.color = "black";
    imagDiv6.style.backgroundColor = "";
    imagDiv6.style.color = "black";
}
function Qr3(){
    imagDiv3.style.backgroundColor = "rgb(3, 1, 29, 0.5)";
    imagDiv3.style.color = "white";
    imagDiv2.style.backgroundColor = "";
    imagDiv2.style.color = "black";
    imagDiv1.style.backgroundColor = "";
    imagDiv1.style.color = "black";
    imagDiv4.style.backgroundColor = "";
    imagDiv4.style.color = "black";
    imagDiv5.style.backgroundColor = "";
    imagDiv5.style.color = "black";
    imagDiv6.style.backgroundColor = "";
    imagDiv6.style.color = "black";
}
function Qr4(){
    imagDiv4.style.backgroundColor = "rgb(3, 1, 29, 0.5)";
    imagDiv4.style.color = "white";
    imagDiv2.style.backgroundColor = "";
    imagDiv2.style.color = "black";
    imagDiv3.style.backgroundColor = "";
    imagDiv3.style.color = "black";
    imagDiv1.style.backgroundColor = "";
    imagDiv1.style.color = "black";
    imagDiv5.style.backgroundColor = "";
    imagDiv5.style.color = "black";
    imagDiv6.style.backgroundColor = "";
    imagDiv6.style.color = "black";
}
function Qr5(){
    imagDiv5.style.backgroundColor = "rgb(3, 1, 29, 0.5)";
    imagDiv5.style.color = "white";
    imagDiv2.style.backgroundColor = "";
    imagDiv2.style.color = "black";
    imagDiv3.style.backgroundColor = "";
    imagDiv3.style.color = "black";
    imagDiv4.style.backgroundColor = "";
    imagDiv4.style.color = "black";
    imagDiv1.style.backgroundColor = "";
    imagDiv1.style.color = "black";
    imagDiv6.style.backgroundColor = "";
    imagDiv6.style.color = "black";
}
function Qr6(){
    imagDiv6.style.backgroundColor = "rgb(3, 1, 29, 0.5)";
    imagDiv6.style.color = "white";
    imagDiv2.style.backgroundColor = "";
    imagDiv2.style.color = "black";
    imagDiv3.style.backgroundColor = "";
    imagDiv3.style.color = "black";
    imagDiv4.style.backgroundColor = "";
    imagDiv4.style.color = "black";
    imagDiv5.style.backgroundColor = "";
    imagDiv5.style.color = "black";
    imagDiv1.style.backgroundColor = "";
    imagDiv1.style.color = "black";
}
 