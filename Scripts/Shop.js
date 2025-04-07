/*ДТОшка для передачи информации о продукте*/
class ProductCard{
    Id;
    Name;
    Cost;
    Description;
    Image;

    constructor(id, name, cost, description, image){
        this.Id = id;
        this.Name = name;
        this.Cost = cost;
        this.Description = description;
        this.Image = image;
    }
}
const CategoryFilter = document.getElementById('CategoryFilter');
const PriceMin = document.getElementById('PriceMin');
const PriceMax = document.getElementById('PriceMax');
const RatingFilter = document.getElementById('RatingFilter');
const Sort = document.getElementById('Sort');

SearchProducts();


function SearchProducts(){
    UpdateProductList(GetProductList());
}

function GetProductList(){
    
    /*Тут должен идти запрос в API с соответствующими фильтрами*/

    let result = [
        new ProductCard(1, "Красный светодиод", 23000, "Самый красный светодиод на Диком Западе.", null),
        new ProductCard(2, "Микроконтроллер", 1000,"Какая разница, что тут написано? Все равно прийдет другой.", null),
    ];

    return result;
}

/*Обновить весь список продуктов*/
function UpdateProductList(products){

    const ProductList = document.getElementById("ProductList");

    console.log('Список товаров обновлен');

    /*Очистка списка*/
    ProductList.innerHTML = '';

    /*Добавление новых элементов*/
    products.forEach(product => {
        ProductList.innerHTML += GetShopCard(product);
    });
    

}

/*Построить карточку на основе продукта*/
function GetShopCard(product){
    return `
        <div class="ContentCard FlexContainer">
            <img class="Icon" alt="Изображение">
            <div>
                <h3 class="SimpleControl">${product.Name}</h3>
                <div class="SimpleControl">${product.Description}</div>
                <h3 class="SimpleControl">Цена: ${product.Cost}</h3>
                <button class="ControlButton" >Перейти к товару...</button>
                <button class="ControlButton" onclick="AddToCart(${JSON.stringify(product)})">В корзину</button>
            </div>
        </div>
    `;
}

function AddToCart(product){

    console.log('Действие добавить в корзину');
    
    if(typeof product == Product){
        /*Тут должен быть запрос на добавление продукта в корзину по Id*/
    }
}

