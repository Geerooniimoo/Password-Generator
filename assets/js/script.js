let store;

const runInit = async () => {
    store = await localStorage.passwords ? JSON.parse(localStorage.passwords) : {};

    main.innerHTML = init;

    if (Object.keys(store).length) {
        // <section id="savedPasswords"></section>
        savedPasswords.style.opacity = 1;
        savedPasswords.innerHTML = '<h2>Saved Passowrds</h2>';
        Object.keys(store).forEach(key => {
            savedPasswords.innerHTML += `
                <button onclick="hanPass()">${key}</button>`
        });
        savedPasswords.scrollIntoView({ behavior: "smooth", alignToTop: true });
    } else {
        savedPasswords.innerHTML = '';
        savedPasswords.style.opacity = 0;
    };
};
runInit();

const savPass = () => {
    let name = prompt('Name of the password, for what is it going to be used?');
    if (name == null) return;
    if (!name) savPass();

    name = name.toUpperCase();

    if (!Object.keys(store).includes(name)) store[name] = '';
    store[name] = password.innerText;
    localStorage.passwords = JSON.stringify(store);
    runInit();
};

const clipPass = () => {
    navigator.clipboard.writeText(store[header.innerText]);
    runInit();
}

const delPass = () => {
    let name = header.innerText;
    delete store[name];
    localStorage.passwords = JSON.stringify(store);
    runInit();
};

const hanPass = () => this.addEventListener('click', ({ target: { innerText: name } }) => {
    header.innerText = name;
    hanSav.style.display = 'flex';
    hanSav.innerHTML = htmlSavBtn;
    generate.style.display = 'none';
    header.style = 'text-align:center';
    params.innerHTML = htmlSavBtnParams;
}, { once: true });

const hanShow = () => {
    hanSav.innerHTML = htmlShowBtn;
    params.innerHTML = `<h1 id="password">${store[header.innerText]}</h1>`;
};

const genPass = async () => {

    let temp = '';
    if (num.checked) temp += '0123456789';
    if (lower.checked) temp += 'abcdefghijklmnopqrstuvwxyz';
    if (upper.checked) temp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (spec.checked) temp += '@%+!#$%^&*()_->/?[{]}|:;';

    let output = '';
    for (let i = 0; i < range.value; i++) {
        output += temp[Math.floor(Math.random() * temp.length)]
    };

    generate.style.display = 'none';
    hanSav.style.display = 'flex';
    header.innerHTML = 'Click home to go back.<br><br>Click the save button to keep the new password.'
    params.innerHTML = `<h1 id="password">${output}</h1>`;
};    
