//DOM object where menu sections are placed
let menuWrapper = document.getElementById('menu-wrapper');

// grab the JSON file
fetch("js/menu.JSON")
    .then((res)=>{
        if (!res.ok)
        {
            throw new Error("Could not get menu.JSON");
        }

        return res.json();
    })
    .then((data)=>{
        console.log(data);
    });