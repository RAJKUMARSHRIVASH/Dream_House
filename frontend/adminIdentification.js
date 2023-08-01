

// let data = JSON.parse(localStorage.getItem("admin"));
let data = JSON.parse(Cookies.get("admin"));

if (data) {

    if (data.name) {
        document.querySelector("#display").innerHTML = `Hi, Admin ${data.name} <button id="logout">Logout</button>
        
        <style>
            #logout{
                border : 0;
                background-color : red;
                color : white;
                border-radius : 5px;
                cursor:pointer;
            }
        </style>
        `;
        document.querySelector("#logout").addEventListener("click", async () => {
            try {
                // localStorage.removeItem("admin");
                Cookies.remove("admin");
                Swal.fire("Logged out successfully")
                window.location.href = "index.html";
            } catch (error) {
                console.log(error);
            }
        })
    }

}

