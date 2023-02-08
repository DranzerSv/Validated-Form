
function errors_display(errors){
    let errors_list = document.getElementById('errors_list');
    while(errors_list.firstChild){
        errors_list.removeChild(errors_list.lastChild)
    }
    for(let item in errors ){
        let list_item = document.createElement('li');
        let message = document.createTextNode(errors[item]);
        list_item.appendChild(message);
        errors_list.appendChild(list_item);
    }
}