var tabuada, n, cont

n=parseInt(prompt("Entre com um valor da tabuada"))

cont=0
while(cont<11)
{
    t=n*cont
    document.write("<h2>"+t+"</h2>")
    cont++
}