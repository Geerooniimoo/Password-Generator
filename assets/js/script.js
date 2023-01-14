
document.querySelector('.card').innerHTML += `
<section style="display:none;margin-top:20px;" id="hanSav"><button style="background:yellow;width:50%;" onclick="clearPass()">Clear</button><button style="background:hsl(360,91%,36%);width:50%;height:30px;color:white;" onclick="delPass()">Delete</button></section>
`;

document.querySelector('.card-header').innerHTML += `
<section style="display:flex;flex-wrap:wrap;justify-content:space-around;margin-top:20px;" id="history"></section>
`;

let store;
let history = document.getElementById('history');

const renderStore = () => {
    if (store.length) {
        history.innerHTML = '<h2 style="width:100%;text-align:center;">Saved Passowrds</h2>';
        store.forEach(obj => {
            Object.keys(obj).forEach(key => {
                history.innerHTML += `
                <button style="background:teal;color:white;margin:5px;border-radius:8px;border: 4px solid black;padding:5px;" onclick="hanPass()">${key}</button>`
            });
        });
    } else {
        history.innerHTML = '';
    };
};

const clearPass = () => {
    password.innerText = '';
    document.querySelector('.card h2').innerText = 'Generate a Password';
    document.getElementById('hanSav').style.display = 'none';
    generate.style = 'display:block;margin:16px auto auto;';
};

const delPass = () => {
    let name = document.querySelector('.card h2').innerText;
    store = store.filter(obj => Object.keys(obj) != name);
    localStorage.passwords = JSON.stringify(store);
    clearPass();
    renderStore();
};

const hanPass = () => this.addEventListener('click', ({target:{innerText:name}}) => {
    password.innerText = (store.filter(obj=>obj[name])[0])[name];
    document.querySelector('.card h2').innerText = name;
    generate.style.display = 'none';
    hanSav.style.display = 'flex';
});


(async () => {
    let hanSav = document.getElementById('hanSav');

    store = localStorage.passwords ?
        await eval(localStorage.passwords) : [];

    renderStore();

    const passGen = () => {
        let len = prompt('From 8 - 128, how long should password be?');
        if (len < 8 || len > 128) return alert('Password length does not match criteria.  Please try again.')

        let num = confirm('Should password have numbers?');
        let lower = confirm('Should password have lower case letters?');
        let upper = confirm('Should password have upper case letters?');
        let spec = confirm('Should password have special characters?');

        let temp = '';
        if (num) temp += '0123456789';
        if (lower) temp += 'abcdefghijklmnopqrstuvwxyz';
        if (upper) temp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (spec) temp += '@%+!#$%^&*()_-<>/?[{]}|:;';

        let output = '';
        for (let i = 0; i < len; i++) {
            output += temp[Math.floor(Math.random() * temp.length)]
        };

        let name = prompt('Password\'s name?').toUpperCase();
        document.querySelector('.card h2').innerText = name;
        generate.style.display = 'none';
        hanSav.style.display = 'flex';
        password.innerText = output;
        
        store.push({ [name]: output });

        localStorage.passwords = JSON.stringify(store);
        renderStore();
    };

    generate.addEventListener('click', passGen);
})();    
