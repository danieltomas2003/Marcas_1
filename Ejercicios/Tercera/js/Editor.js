function negrita(){
    document.execCommand("bold", false, null)
}
function cursiva(){
    document.execCommand("italic", false, null)
}
function subrayado(){
    document.execCommand("underline", false, null)
}
function alinIz(){
    document.execCommand("justifyleft", false, null)
}
function alinCe(){
    document.execCommand("justifycenter", false, null)
}
function alinDe(){
    document.execCommand("justifyright", false, null)
}
function alinJu(){
    document.execCommand("justifyfull", false, null)
}
function li1(){
    document.execCommand("insertunorderedlist", false, null)
}
function li2(){
    document.execCommand("insertorderedlist", false, null)
}
function subIn(){
    document.execCommand("subscript", false, null)
}
function supIn(){
    document.execCommand("superscript", false, null)
}
function fontColor(){
    var color = prompt("Introduce el color de la fuente")
    document.execCommand("forecolor", false, color)
}
function backColor(){
    var color = prompt("Introduce el color de fondo")
    document.execCommand("backcolor", false, color)
}
function hipervinculo(){
    var dir = prompt("Introduce la URL:", "http://")
    document.execCommand("createlink", false, dir)
}
function insIm(){
    var img = prompt("Introduce la ruta y nombre del archivo")
    document.execCommand("insertimage", false, img)
}
function publicar(){
    var direccion = document.getElementById("contenido").innerHTML;
    document.getElementById("mensajes").innerHTML = direccion;
}