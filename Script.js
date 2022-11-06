function DisplayAll() 
{
    var name = document.getElementById("megrendelo").value;
    var cim = document.getElementById("cim").value;
    var telszam = document.getElementById("tszam").value;
    var span = document.getElementsByTagName("span");
    span[0].innerText = name;
    span[1].innerText = cim;
    span[2].innerText = telszam;
    
}

function Focus(element) 
{
    element.style.backgroundColor = "#99187255";
}

function Restore(element)
{
    element.style.backgroundColor = "white";
}

