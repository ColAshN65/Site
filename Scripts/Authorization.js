
function Authorize(){
    /*Тут должен быть человеческий запрос с получением токена*/
    
    localStorage.setItem('token', '1');

    window.location.href = 'index.html';
}

function Register(){
    /*Тут должен быть человеческий запрос с получением токена*/

    localStorage.setItem('token', '2');
    
    window.location.href = 'index.html';
}

function LogOut(){
    /*Тут должен быть человеческий запрос для ликвидации токена*/
    
    
    localStorage.setItem('token', '');
    
    window.location.href = 'index.html';
}