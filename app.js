
console.log("test")
butt.onclick = function(){
    console.log("2")
    var val = Number(document.getElementById('idx').value)
    var val2 = Number(document.getElementById('idy').value)
    var rad = document.getElementsByName('testr')

    var uns
    if(rad[0].checked){
        uns = val + val2
        document.getElementById('str').innerHTML="Вы выбрали сложение, результат: "+uns;
    }
    if(rad[1].checked){
        uns = val - val2 
        document.getElementById('str').innerHTML="Вы выбрали вычитание, результат: "+uns;
    }
    if(rad[2].checked){
        uns = val * val2
        document.getElementById('str').innerHTML="Вы выбрали умножение, результат: "+uns;
    }

    console.log("3")
    console.log("......................")
}