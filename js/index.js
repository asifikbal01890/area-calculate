function traiangle() {
    const hight = document.getElementById('b').value;
    const width = document.getElementById('h').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);
       
    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
        const area = 0.5 * hightNum * widthNum;

        const areaCalculate = document.getElementById('order-list')
        const li = document.createElement('li');
        li.innerHTML = `
            <div id="container" class = "flex items-center gap-3">
                <p>Triangle</p>
                <p><span id="area">${area}</span> cm^2</p>
                <button id="covert-btn" onclick="convert()" class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
            </div>
                        `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('b').value = '';
        document.getElementById('h').value = '';
    }
}

// cm to m convert button function
 function convert (){
    const areaString = document.getElementById('area').innerText;
    const areaNumber = parseFloat(areaString);
    const cmToM = areaNumber / 100;
    const btn = document.getElementById('covert-btn');
    const p = document.createElement('p');
    p.innerText = `= ${cmToM} m^2`;
    btn.remove()
    document.getElementById('container').appendChild(p)   
    document.getElementById('container').id = 'text';
    document.getElementById('area').id = 'none'    
}

function rCalculate() {
    const hight = document.getElementById('w').value;
    const width = document.getElementById('l').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);
       
    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
        const area = hightNum * widthNum;

        const areaCalculate = document.getElementById('order-list')
        const li = document.createElement('li');
        li.innerHTML = `
            <div class = "flex items-center gap-3">
                <p>Rectangle</p>
                <p>${area} cm^2</p>
                <button class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
            </div>
                        `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('w').value = '';
        document.getElementById('l').value = '';
    }
}


function a() {
const pA1 = document.getElementById('b1').value;
const pB1 = document.getElementById('h1').value;
calculate(pA1, pB1, 'Parallelogram')
}

// function pCalculate() {
//     const hight = document.getElementById('b1').value;
//     const width = document.getElementById('h1').value;
//     const hightNum = parseFloat(hight);
//     const widthNum = parseFloat(width);
       
//     if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
//         const area = hightNum * widthNum;

//         const areaCalculate = document.getElementById('order-list')
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <div class = "flex items-center gap-3">
//                 <p>Rectangle</p>
//                 <p>${area} cm^2</p>
//                 <button class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
//             </div>
//                         `;
//         areaCalculate.appendChild(li)
//     } else {
//         window.alert('Please Enter number only')
//         document.getElementById('b1').value = '';
//         document.getElementById('h1').value = '';
//     }
// }
