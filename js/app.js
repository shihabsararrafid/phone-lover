// function for getting the input from text and fetching the url according the search result
const getInputText = () => {
    const searchedTextElement = document.getElementById('searched-text');
    const searchedText = searchedTextElement.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchedText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showResult(data.data))
    searchedTextElement.value = "";
}
const showResult = (items) => {
    const divContainer = document.getElementById('searchResult-container');
    divContainer.textContent = "";
    // condition if there is no phone
    if (items.length === 0) {

        const div2 = document.getElementById('noPhone');
        console.log(div2)
        div2.innerHTML = `
        <div class="w-[100%] text-center mx-auto">
        <h1 class="  text-5xl text-[#00293B]" >NO PHONE FOUND</h1>
        </div>
        
        `
    }
    // condition if the search result is valid
    else {
        const divContainer = document.getElementById('searchResult-container');
        divContainer.textContent = "";
        for (const singItem of items) {
            console.log(singItem)

            const div = document.createElement('div');
            div.classList.add("searchResult");
            div.innerHTML = `
            <img class="block mx-auto"  src="${singItem.image}" alt="" srcset="">
            <div class ="mt-8">
            <h1 class="text-3xl text-center font-semibold">Brand: ${singItem.brand}</h1>
            <p class="text-3xl text-center font-semibold">Model: ${singItem.phone_name}</p>    
            </div>
                  
            `

            divContainer.appendChild(div)
        }
    }


}
