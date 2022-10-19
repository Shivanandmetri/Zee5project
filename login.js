function valid()
{
    var pass1=123456


    var name=document.myform.name.value;
    var password=document.myform.password.value;

    if(name==""||name==null)
    {
        alert("blank space is not allowerd")
        return false;

    }
    else if(password.length<6 && pass1!=password)
    {
        alert("password must contain 6 character")
    }

    else if(pass1==password)
    {
        document.getElementById("form").action="https://zee5.com"
    }


}

let form1 = document.getElementById("form")

form1.addEventListener("mouseover", ()=>{
    let name = document.getElementById("username")
    let pass = document.getElementById("userpassword")
    let btn = document.getElementById("btn")

    if(name.value=="" ||  pass.value.length<10 || pass.value.length>10){
        btn.style.cursor = "not-allowed"
    }else{
        btn.style.cursor="auto"
    }
})
