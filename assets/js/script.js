
const passGen = () => {
        let len=prompt('From 8 - 128, how long should password be?');
        if (len<8 || len>128) return alert('Password length does not match criteria.  Please try again.')

        let num=confirm('Should password have numbers?');
        let lower=confirm('Should password have lower case letters?');
        let upper=confirm('Should password have upper case letters?');
        let spec=confirm('Should password have special characters?');
        
        let temp='';
        if (num) temp+='0123456789';
        if (lower) temp+='abcdefghijklmnopqrstuvwxyz';
        if (upper) temp+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (spec) temp+='@%+!#$%^&*()_-<>/?[{]}|:;';
            
        let output='';
        for (let i = 0; i < len; i++) {
            output+=temp[Math.floor(Math.random()*temp.length)]
        };

        password.innerText=output;
};

generate.addEventListener('click',passGen);

