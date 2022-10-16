let data =[];

let content=document.querySelector(".content");


content.classList.add("flex")
//content.classList.add("flex-wrap")
content.classList.add("justify-center");

function supplement(image,name,price){
    this.image=image;
    this.name=name;
    this.price=price;

}

let smooth=new supplement("https://cdn.shopify.com/s/files/1/0369/2580/0493/products/NEWSmooth-Front-Mar31st-2020_800x.png?v=1647062257","gorilla mind smooth",100);
let eaas=new supplement("https://cdn.shopify.com/s/files/1/0369/2580/0493/products/EAA-Render-Front-JJ_600x.png?v=1653929200","gorilla mode eaas",37.99);
let mode=new supplement("https://cdn.shopify.com/s/files/1/0369/2580/0493/products/Gorilla-Mode-Mojo-Mojito_600x.png?v=1665471700","gorilla mode",49.99);
data.push(smooth);
data.push(eaas);
data.push(mode);

console.log(data);


data.map(function(item){
    let product=document.createElement("div");
            product.classList.add("w-2/6");
            product.classList.add("h-72");
            product.classList.add("bg-white");
            product.classList.add("flex");
            product.classList.add("flex-col");
            product.classList.add("items-center");
            product.classList.add("rounded-md");
            product.classList.add("m-5");
            product.classList.add("shadow-lg");
            content.appendChild(product);
let productImg=document.createElement("img");
            productImg.classList.add("h-48")
            productImg.src=item.image;
            product.appendChild(productImg);
let productName=document.createElement("h1");
            productName.innerHTML=item.name;
            productName.classList.add("font-bold")
            productName.classList.add("text-lg")
            product.appendChild(productName)
let productPrice=document.createElement("h1");
            productPrice.innerHTML=`${item.price}$`;
            productPrice.classList.add("text-lg");
            product.appendChild(productPrice);


})









