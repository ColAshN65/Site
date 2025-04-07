let token = GetToken();

console.log(token);

SetNavigation(token);

function GetToken(){

    let result = localStorage.getItem("token");

    return result;
}

function SetNavigation(token){
    const NavBar = document.getElementById("NavBar");

    NavBar.innerHTML = '';

    console.log(token);

    if(token == null || token == ''){
        NavBar.innerHTML += `
        <a class="ControlButton btn-sep icon-info" href="Authorization.html">Вход</a>
        <a class="ControlButton btn-sep icon-cart" href="Registration.html">Регистрация</ф>
        `
    }
    else{
        NavBar.innerHTML += `
        <a class="ControlButton btn-sep icon-heart" href="Profile.html">Кабинет</a>
        <a class="ControlButton btn-sep icon-send" href="ShippingList.html">Корзина</a>
        `
    }
}
