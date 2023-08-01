
let cartArr = []
getItem()
async function getItem() {
    document.getElementById("items").innerHTML = null;
    const fetched = await fetch(`${baseURL}/cart`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "authorization": localStorage.getItem("userdata")
            "authorization": Cookies.get("userdata")
        }
    });
    const data = await fetched.json();
    if (data.msg) {
        Swal.fire(data.msg)
        if (data.msg == "Please login first" || data.msg == "token expired please login again") {
            window.location.href = "login.html"
        }
    } else {
        // data = cart data which contains user id and product id
        // item = filtered product data from all the product documents
        // carArr = combines both  
        data.map(async (el, i) => {
            let fetchdata = await fetch(`${baseURL}/products/${el.productID}`);
            let item = await fetchdata.json();
            if (item) {
                item.qty = el.qty
                item.cartItemId = el._id
                cartArr.push(item)
            }
        })
        setTimeout(() => {
            displayItem(cartArr);
            calculateTotal(cartArr)

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
            ${cartArr.map((el, i) => {
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
                                    <button style="background-color:rgb(65, 234, 65)" onclick=plus('${el.cartItemId}')>+</button>
                                    <button style="background-color:rgb(244, 23, 23)" onclick=minus('${el.cartItemId}')>-</button>
                                </div>
                            </div>
                            <div class="remove-item" onclick=deleteItem('${el.cartItemId}')>&#9986;</div>
                        </div>
                    `
        }).join('')
            }
        `;
    }
}

async function deleteItem(id) {
    const fData = await fetch(`${baseURL}/cart/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // "authorization": localStorage.getItem("userdata")
            "authorization": Cookies.get("userdata")
        }
    });
    const response = await fData.json();
    if (response.msg == "Product Deleted") {
        Swal.fire(response.msg);
        window.location.reload();
    }
    else {
        Swal.fire(response.msg);
    }
}

async function plus(id) {
    const fData = await fetch(`${baseURL}/cart/qtyplus/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": localStorage.getItem("userdata")
            "Authorization": Cookies.get("userdata")
        }
    });
    const data = await fData.json();
    if (data.msg == "Updated quantity") {
        getItem()
        window.location.reload();

    }
    else {
        Swal.fire(data.msg);
    }
}

async function minus(id) {
    const fData = await fetch(`${baseURL}/cart/qtyminus/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": localStorage.getItem("userdata")
            "Authorization": Cookies.get("userdata")
        }
    });
    const data = await fData.json();
    if (data.msg == "Updated quantity") {
        getItem();
        window.location.reload();
    }
    else {
        Swal.fire(data.msg);
    }
}

function proceedToPayment() {

    // Generate a random 4-digit OTP
    const otp = generateOTP();

    // Display the OTP popup
    const enteredOTP = prompt(`Please enter the OTP: ${otp}`);

    // Check if the entered OTP matches the generated OTP
    if (+enteredOTP === otp) {
        Swal.fire("Payment successful! Order placed.")
    } else {
        Swal.fire("Incorrect OTP. Payment failed.");
    }
}

function calculateTotal(cartArr) {
    let totalAmount = 0;
    cartArr.forEach((item) => {
        let price = item.price.replace("$",'')
        totalAmount += parseInt(price) * item.qty;
    });
    document.getElementById("cartTotal").textContent = totalAmount;

    return totalAmount;
}

function generateOTP() {
    // Generate a random 4-digit OTP
    return Math.floor(1000 + Math.random() * 9000);
}