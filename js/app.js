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
    if (items.length === 0) {
        console.log('No phone Found')
    }
    for (const singItem of items) {
        console.log(singItem)
    }
    console.log(items)
}
