let btn = document.getElementById("btn");
let container = document.getElementById("container");
let url = "https://dummyjson.com/products";

btn.addEventListener("click", handleClick);

function handleClick() {
    fetchData(url)
    .then((data) => renderData(data, container))
    .catch((e) => {
        renderError(container, e);
    });
}

async function fetchData(url) {
    try {
        console.log("Fetching data...");

        const res = await fetch(url);
        const data = await res.json();

        return data;
    }
    catch (e) {
        throw new Error("Error occurred");
    }
    finally {
        console.log("Fetch completed");
    }
}

function renderData(data, container) {
    container.innerHTML = "";

    data.products.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.title;
        container.appendChild(li);
    });
}

function renderError(container, error) {
    container.innerHTML = "";

    let p = document.createElement("p");
    p.textContent = "Fetching Data Failed";

    container.appendChild(p);
}