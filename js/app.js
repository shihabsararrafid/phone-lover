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


// function showing the result on basis of given value from input text
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


            const div = document.createElement('div');
            div.classList.add("searchResult");
            div.innerHTML = `
            <img class="block mx-auto"  src="${singItem.image}" alt="" srcset="">
            <div class ="mt-8">
            <h1 class="text-3xl text-center font-semibold">Brand: ${singItem.brand}</h1>
            <p class="text-3xl text-center font-semibold">Model: ${singItem.phone_name}</p> 
            <button onclick="getDetailUrl('${singItem.slug}')"
            class="bg-[#1390c5] block mx-auto mt-4 duration-500 text-2xl hover:border-[#1390c5] hover:bg-white hover:text-2xl hover:border-2 hover:text-[#1390c5] text-white rounded-lg py-3 px-9">
            Show Details
            </button>

            </div>
                  
            `


            divContainer.appendChild(div)
        }
    }


}


// function for getting the url for details  of phones 
const getDetailUrl = (id) => {

    url = `https://openapi.programming-hero.com/api/phone/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => showDetail(data))
}



// function for showing details of phones
const showDetail = info => {
    const details = info.data;

    const detailDivContainer = document.getElementById('details-section');
    detailDivContainer.textContent = "";
    // showing others object 
    const showOther = () => {
        const othersObjectArray = [];
        if (typeof (details.others) === "undefined") {
            return "No others information available";
        }
        else {
            const othersObject = details.others;
            const othersKey = Object.keys(othersObject)

            for (key of othersKey) {
                let item = `${key} :${othersObject[key]}`
                othersObjectArray.push(item)
            }
            return othersObjectArray.join('</br>');


        }
    }




    const sensors = details.mainFeatures.sensors;



    detailDivContainer.innerHTML = `
    <div class="detail-phone w-full md:w-[60%] h-[auto]">
    <img class="block my-6 mx-auto"  src="${details.image}" alt="" srcset="">
    <p class="text-3xl text-center font-semibold">Name: ${details.name}</p>
    
    <p class="text-xl text-center font-semibold">Release Date: ${details.releaseDate}</p>
    <p class="text-xl text-center font-semibold">Storage: ${details.mainFeatures.storage}</p>

    <p class="text-xl text-center font-semibold">DisplaySize: ${details.mainFeatures.displaySize}</p>
    <p class="text-xl text-center font-semibold">Chipset: ${details.mainFeatures.chipSet}</p>
    <p class="text-xl text-center font-semibold">Memory: ${details.mainFeatures.memory}</p>

    <p class="text-xl text-center w-[90%] font-semibold">Sensor:
    \n
     ${sensors.join(', </br>')}</p>
  <p id="showOther" class="text-xl  text-center w-[90%] font-semibold">Others:</br>
 ${showOther()}  
    </p>
    


        
    
   
    
   
    </div>
   
    `


    // console.log(detailDivContainer);

}



