function insert(num){
    document.form.textViue.value=
    document.form.textViue.value+num;
   
}

function clean(){
    document.form.textViue.value="";
}
function back(){
    const exp= document.form.textViue.value;
    document.form.textViue.value=exp.substring(0,
      exp.length-1 );
}

function equal(){
    const exp=document.form.textViue.value;
    if(exp){
        document.form.textViue.value=eval(exp);
    }

}
