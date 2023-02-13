const init = `
<header>
    <h1>GenPass</h1>
</header>

<div class="card">
    <div class="card-header">
    </div>
    <div class="card-body">
        <h2 id="header">Passwords solution.  Generate strong passwords and save them in local storage.<br><br> Choose parameters:</h2>
        <hr>
        <div id="params">
            <div>
                <h4>Password length:</h4>
                <h4>numbers?</h4>
                <h4>Uppercase letters?</h4>
                <h4>Lowercase letters?</h4>
                <h4>Special characters?</h4>
            </div>
            <div>
                <div id="meter">
                    <div id="counter"><span>8</span><span>32</span><span>64</span><span>96</span><span>128</span></div>
                    <input id="range" type="range" min="8" max="128" value="16">
                </div>
                <h5>
                    Yes <input id="num" type="radio" name="numbers" value="1" checked> 
                    No <input type="radio" name="numbers" value="0">
                </h5>
                <h5>
                    Yes <input id="upper" type="radio" name="uppercase" value="1" checked> 
                    No <input type="radio" name="uppercase" value="0">
                </h5>
                <h5>
                    Yes <input id="lower" type="radio" name="lowercase" value="1" checked> 
                    No <input type="radio" name="lowercase" value="0">
                </h5>
                <h5>
                    Yes <input id="spec" type="radio" name="specialChars" value="1" checked> 
                    No <input type="radio" name="specialChars" value="0">
                </h5>
            </div>
        </div>
    </div>
    <div class="card-footer">
        <button id="generate" onclick="genPass()" class="btn">Password Generator</button>
    </div>
    <section id="hanSav">
        <button id="clearPassword" onclick="runInit()">Home</button>
        <button id="savePassword" onclick="savPass()">Save</button>
    </section>
</div>

<section id="savedPasswords"></section>`;

const htmlShowBtn = ` 
<button style="font-size:1.2rem;background:green;color:white;border:2px solid black;border-radius:8px 0 0 8px;width:33%" onclick="clipPass()">Clipboard</button>
<button style="font-size:1.2rem;background:yellow;color:black;border:2px solid black;width:33%" onclick="runInit()">Home</button>
<button style="font-size:1.2rem;background:red;color:white;border:2px solid black;border-radius:0 8px 8px 0;width:33%" onclick="delPass()">Delete</button>`;


const htmlSavBtn = ` 
<button style="font-size:1.2rem;background:green;color:white;border:2px solid black;border-radius:8px 0 0 8px;width:33%" onclick="clipPass()">Clipboard</button>
<button style="font-size:1.2rem;background:yellow;color:black;border:2px solid black;width:33%" onclick="hanShow()">Show</button>
<button style="font-size:1.2rem;background:red;color:white;border:2px solid black;border-radius:0 8px 8px 0;width:33%" onclick="delPass()">Delete</button>`;

const htmlSavBtnParams = `<h3 style="color:black">Click on clipboard button to save to clipboard.<br><br> Click on show button to display password. <br><br>Click on delete button to remove password.</h3>`


