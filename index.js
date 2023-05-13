/*
async function run(){
    let promise = await fetch("https://dummyjson.com/posts");
    let js = await promise.json();
    console.log(js.posts[0])

    let promise2 = await fetch("https://dummyjson.com/products");
    let js2 = await promise2.json();
    console.log(js2)

    let promise3 = await fetch("https://dummyjson.com/todos");
    let js3 = await promise3.json();
    console.log(js3.todos[0])
}
run();
*/


//Function to fetch data with specified delay
function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts").then((response) => response.json()).then((objectData) => {
                resolve(objectData)
            }).catch((error) => console.log(error))
        }, 1000)
    })
}

function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products").then((response) => response.json()).then((objectData) => {
                resolve(objectData)
            }).catch((error) => console.log(error))
        }, 2000)
    })
}

function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos").then((response) => response.json()).then((objectData) => {
                resolve(objectData)
            }).catch((error) => console.log(error))
        }, 3000)
    })
}

function displayTable1(data) {
    // console.log(data[0].body)
    let body = document.getElementById("table1-body");
    data.forEach(element => {
        // console.log(element)
        let tags = element.tags.join(", ")
        body.innerHTML += `<tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
            <td>${element.reactions}</td>
            <td>${tags}</td>
            <td>${element.userId}</td>
        </tr>`
    });
}

function displayTable2(data) {
    // console.log(data[25].thumbnail)
    let body = document.getElementById("table2-body");
    data.forEach(element => {
        let innerImages = "";
        element.images.forEach((imgs) => {
            innerImages += `<img src="${imgs}">`;
        })
        body.innerHTML += `<tr>
            <td>${element.id}</td>
            <td>${element.brand}</td>
            <td>${element.category}</td>
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td>${element.discountPercentage}</td>
            <td>${element.price}</td>
            <td>${element.rating}</td>
            <td>${element.stock}</td>
            <td><img src="${element.thumbnail}"></td>
            <td>
                ${innerImages}
            </td>
        </tr>`
    });
}

function displayTable3(data) {
    let body = document.getElementById("table3-body");
    data.forEach(element => {
        // console.log(element)
        body.innerHTML += `<tr>
            <td>${element.id}</td>
            <td>${element.todo}</td>
            <td>${element.userId}</td>
            <td>${element.completed}</td>
        </tr>`
    });
}
async function renderData() {
    try {
        let data1 = await PromiseAPI1();
        displayTable1(data1.posts);

        let data2 = await PromiseAPI2();
        displayTable2(data2.products);

        let data3 = await PromiseAPI3();
        displayTable3(data3.todos)
    }
    catch (error) {
        console.log(error)
    }
}

// renderData()