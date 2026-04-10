console.log("Test 1");

function showOutput(){
    let name = document.querySelector("#fisrt name").value;
    document.querySelector('#output').textContent="Hello" + name;
}

document.querySelector('#btn').addEventListener('Click', showOutput)

