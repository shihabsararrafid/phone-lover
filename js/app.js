const showResult = () => {
    const searchedTextElement = document.getElementById('searched-text');
    const searchedText = searchedTextElement.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchedText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    searchedTextElement.value = "";
}