const product = [
    {
        id: 0,
        image: 'image 1.jpg',
        title: 'Voile',
        price: 200,
    },
    {
        id: 1,
        image: 'image2.jpg',
        title: 'Jilbab',
        price: 65,
    },
    {
        id: 2,
        image: 'image 3.jpg',
        title: 'Jerseys',
        price: 15,
    },
    {
        id: 3,
        image: 'image4.jpg',
        title: 'chouchou',
        price: 6,
    }
];
//DECRIMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR LE PRIX
moins.addEventListener('click', function () {
    if (quantity > 0) {
        quantity--;
        articleNum.innerHTML = quantity;
        prix.innerText = quantity * ArticlePrice;
        calSum(); 
    }
});


//AUGMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR
plus.addEventListener('click', function () {
    quantity++;
    articleNum.innerHTML = quantity;
    prix.innerText = quantity * ArticlePrice;
    calSum(); 
});

const categories = [...new Set(product.map((item)=>
     {return item}))]
let i=0;
document.getElementById('root').innerHTML = product.map((item, index) => {
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
        </div>`
    )
}).join('')