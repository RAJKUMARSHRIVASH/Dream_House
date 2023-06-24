
let cartArr = []
getItem()
async function getItem() {
    const fetched = await fetch(`${baseURL}/cart`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("userdata")
        }
    });
    const data = await fetched.json();
    if (data.msg) {
        alert(data.msg)
        if (data.msg == "Please login first" || data.msg == "token expired please login again") {
            window.location.href = "login.html"
        }
    } else {
        data.map(async (el, i) => {
            let fetchdata = await fetch(`${baseURL}/products/${el.productID}`);
            let item = await fetchdata.json();
            if (item) {
                item.qty = el.qty
                cartArr.push(item)
            }
        })
        setTimeout(() => {
            displayItem(cartArr);
        }, 1000)
    }
}

async function displayItem(cartArr) {
    
    document.getElementById("items").innerHTML = null;
    if (!cartArr.length) {
        document.getElementById("items").innerHTML = `<h1>No items on cart<h1>`
    }
    else {
        document.getElementById("items").innerHTML = `
            ${
                cartArr.map((el, i) => {
                    let id = el._id
                    return `
                        <div class="items-product">
                            <img src="${el.image}" alt="">
                            <div class="item-details">
                                <h3>${el.title}</h3>
                                <h4>Price : ${el.price}</h4>
                                <p>Category : ${el.category}</p>
                            </div>
                            <div class="qty-manage">
                                <p>Qty</p>
                                <h4>${el.qty}</h4>
                                <div class="btns">
                                    <button>+</button>
                                    <button>-</button>
                                </div>
                            </div>
                            <div class="remove-item" onclick="deleteItem(${id})">&#9986;</div>
                        </div>
                    `
                })
            }
        `;
    }
}

async function deleteItem(id){
    console.log(id)
}