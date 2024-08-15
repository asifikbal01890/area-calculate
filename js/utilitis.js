
function calculate(num1, num2, name) {
    const hightNum = parseFloat(num1);
    const widthNum = parseFloat(num2);
       
    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
        const area = hightNum * widthNum;

        const areaCalculate = document.getElementById('order-list')
        const li = document.createElement('li');
        li.innerHTML = `
            <div class = "flex items-center gap-3">
                <p>${name}</p>
                <p>${area} cm^2</p>
                <button class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
            </div>
                        `;
        areaCalculate.appendChild(li)
    } 
    // else {
    //     window.alert('Please Enter number only')
    //     accessInput('b1') = '';
    //     accessInput('h1') = '';
    // }
}

