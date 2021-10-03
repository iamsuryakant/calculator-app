function val(result){
    form.disp.value = form.disp.value + result;
}

function calc(){
    if(form.disp.value == ""){
        alert("please enter the numbers")
    }
    else{
        form.disp.value = eval(form.disp.value);
    }
}

var btn = form.equal;
btn.addEventListener('dblclick', function(){
    form.disp.value = "";
});

document.addEventListener('keypress', (event) => {
  var name = event.key;
  if(name.match('[*.0-9+/-]'))
	val(name);
  if(name == "=")
  {
	  calc();
  }
}, false);
