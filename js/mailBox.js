document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loading").classList.add('hide');
    /*document.getElementById("content").style.display = "block";*/
});


let editor1 = new RichTextEditor("#div_editor1");
//editor1.setHTMLCode("Use inline HTML or setHTMLCode to init the default content.");

console.log(editor1.getHTMLCode())
let btnShowData = document.querySelector('.btn-show-data')
btnShowData.addEventListener('click', function (){
    let showData = document.querySelector('.show-data')
    showData.innerHTML = editor1.getHTMLCode()
})