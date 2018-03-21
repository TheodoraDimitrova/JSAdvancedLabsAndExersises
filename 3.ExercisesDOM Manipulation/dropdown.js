function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    //<option value="volvo">Volvo</option>
    let el = document.createElement('option');
    el.textContent = text;
    el.setAttribute('value', value);
    document.getElementById('menu').appendChild(el);
    document.getElementById('newItemText').value="";
    document.getElementById('newItemValue').value="";


}