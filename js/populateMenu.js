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
    .then((menuObj)=>{
        console.log(menuObj);

        for (let sectionKey in menuObj)
        {
            menuSection = menuObj[sectionKey];
            // console.log(menuSection);

            let newSection = document.createElement('section');

            let h1 = document.createElement('h1');
            h1.classList.add("menu-section-header");
            h1.textContent = menuSection.sectionTitle;
            newSection.appendChild(h1);

            if (menuSection.sectionDescription != "")
            {
                let h2 = document.createElement('h2')
                h2.classList.add("menu-section-description");
                h2.textContent = menuSection.sectionDescription;
                newSection.appendChild(h2);
            }

            for(item of menuSection.array)
            {
                let divEntry = document.createElement('div');
                divEntry.classList.add("menu-entry");


                let titleDiv = document.createElement('div');
                titleDiv.classList.add("menu-flex-row-75-25");
                // titleDiv.classList.add("title-with-price-wrapper"); //not implemented yet
                divEntry.appendChild("titleDiv");


                newSection.appendChild(divEntry);
            }

        }
    });

function createSection()
{

}