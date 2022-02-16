const productos=document.getElementsByClassName("product-card")
let array2=[];
for(let indice=0;indice<productos.length;indice++)
{
	productos[indice].getElementsByTagName("button")[0].addEventListener("click",()=>
	{
		if(productos[indice].getElementsByTagName("button")[0].textContent == "Agregar al carrito")
		{
			let img=productos[indice].getElementsByTagName("img")[0].currentSrc.split("/");
			let array=[];
			array.push(productos[indice].id);
			array.push(productos[indice].getElementsByTagName("h3")[0].textContent);
			array.push(img[3]+"/"+img[4]+"/"+img[5]);
			array.push(productos[indice].getElementsByTagName("p")[0].textContent);
			array2.push(array)
			window.localStorage.setItem("productos",JSON.stringify(array2));
		}
	})
}