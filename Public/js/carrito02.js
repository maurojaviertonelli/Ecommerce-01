window.onload=()=>
{
    const carrito=document.getElementById("carrito-body");
    const carritoVacio=document.getElementById("vacio");
    let precioTotal=0;
    let precioTotalh4=document.getElementById("precio-total");
    if (localStorage.getItem("productos") != undefined)
    {
        let data=JSON.parse(localStorage.getItem("productos"));
        for(let indice=0;indice<data.length;indice++)
        {
            let div=document.createElement("div");
            div.classList.add("elementos");
            let img=document.createElement("img");
            img.classList.add("imagen-carrito")
            img.src=data[indice][2];
            let nombre=document.createElement("h4");
            nombre.innerHTML=data[indice][1];
            let precio=document.createElement("h4");
            precio.innerHTML=data[indice][3];
            let eliminar=document.createElement("div");
            eliminar.innerHTML="X";
            eliminar.classList.add("delete");
            eliminar.id=data[indice][0];
            div.appendChild(eliminar);
            div.appendChild(img);
            div.appendChild(nombre);
            div.appendChild(precio);
            div.id=data[indice][0];
            hr=document.createElement("hr");
            carrito.append(hr);
            carrito.append(div);
            precioTotal+=parseInt(data[indice][3].replace("$",""));
            carritoVacio.innerHTML="Agregados ("+(indice+1)+")";
            eliminar.addEventListener("click",()=>
            {
                precioTotalh4.innerHTML="$"+(precioTotal-parseInt(data[indice][3].replace("$","")));
                document.getElementById(eliminar.id).remove();
            })
        }
        precioTotalh4.innerHTML="$"+precioTotal;
    }
    else
    {
        carritoVacio.innerHTML="Sin Productos";
        precioTotalh4.innerHTML="$"+0;
    }
}