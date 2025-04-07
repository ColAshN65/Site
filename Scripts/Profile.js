class Userdata{
    Login;
    Email;
    Name;
    City;

    constructor(login, email, name, city){
        this.Login = login;
        this.Email = email;
        this.Name = name;
        this.City = city;
    }
}
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

const LoginField = document.getElementById('LoginField');
const NameField = document.getElementById('NameField');
const CityField = document.getElementById('CityField');

const PurchasesList = document.getElementById('PurchasesList');

UpdatePurchasesList(GetPurchases(GetToken()));


console.log(CityField.value);

//let token = GetToken();
//let Userdata = GetUserData(token);
GetUserData();

function GetToken(){

    let result = localStorage.getItem("token");

    return result;
}

function GetUserData(token){

    if(token != ''){
        /*Тут должна дергаться API, но пока затычка*/
        LoginField.innerHTML = 'Alexandr';
        NameField.value = 'Александр';
        CityField.value = 'Новосибирск';
    }
    
}

function GetPurchases(token){
    /*Тут должена дергаться API*/

    return[
        new ProductCard(1, "Красный светодиод", 23000, "Самый красный светодиод на Диком Западе.", null),
        new ProductCard(2, "Микроконтроллер", 1000,"Какая разница, что тут написано? Все равно прийдет другой.", null),
    ];
}

function UpdatePurchasesList(purchases){

    //Очистка списка
    PurchasesList.innerHTML = '';


    //Добавление новых элементов
    purchases.forEach(purchase => {
        PurchasesList.innerHTML += GetPurchaseCard(purchase);
    });


}
function GetPurchaseCard(purchase){
    return `
        <div class="ContentCard FlexContainer">
            <img class="Icon" alt="Изображение">
            <div>
                <h3 class="SimpleControl">${purchase.Name}</h3>
                <div class="SimpleControl">${purchase.Description}</div>
                <h3 class="SimpleControl">Цена: ${purchase.Cost}</h3>
                <button class="ControlButton">Перейти к товару...</button>
            </div>
        </div>
    `;
}




