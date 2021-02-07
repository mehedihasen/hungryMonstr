
        const displyName=name=>{
            for (let i = 0; i < name.meals.length; i++) {
                const element = name.meals[i];

                const mine = document.getElementById("mine");
                const div = document.createElement("div")
                div.className = "box"
                const createElement = ` 
            
                <div onclick="add('${element.strMeal}')">
               <h1 class= "hello"> ${element.strMeal}</h1>
                        <p> category :${element.strCategory}</p>
                        <img src="${element.strMealThumb}">
           
                 </div>
            
                  `
                 
                div.innerHTML =createElement;
                mine.appendChild(div);
            }
        }

        const add=name=>{
            const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
            fetch(url)
            .then(res => res.json())
            .then(data=> getInfo(data.meals[0]))
            const getInfo=info=>{
                console.log(info);
            const st= document.getElementById('store');
            st.innerHTML=`
            <img src="${info.strMealThumb}">
            <h1>${info.strMeal}</h1>
           <ul>
            <li>${info.strIngredient1}</li>
            <li>${info.strIngredient2}</li>
            <li>${info.strIngredient3}</li>
            <li>${info.strIngredient4}</li>
            <li>${info.strIngredient5}</li>
            <li>${info.strIngredient6}</li>
            <li>${info.strIngredient7}</li>
            <li>${info.strIngredient8}</li>
            <li>${info.strIngredient9}</li>
            <li>${info.strIngredient10}</li>
           
            </ul>
            
`
        }
        }
function search() {
    const name = document.getElementById("fiend").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => res.json())
            .then(data => displyName(data))



}
        
            