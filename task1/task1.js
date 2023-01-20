async function onSearch() {
    let getGif = document.querySelector('#getGif')
    
    try {
        let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=ILy7aNThR6MbeADiAl9PV4SlwkYtad2B&q=' + getGif.value + '&limit=5&offset=0&rating=g&lang=en');// в большинстве случаев ошибка работает. Но, например, если указать в пути gif, а не gifs, то код не вываливается в мою ошибку
        
        let gif = await response.json()
        let gifs = [document.querySelector('#firstImage'), document.querySelector('#secondImage'), document.querySelector('#thirdImage'), document.querySelector('#fourthImage'), document.querySelector('#fifthImage')]
        for (let gifNumber = 0; gifNumber < gif.data.length; gifNumber++) {
            gifs[gifNumber].src = gif.data[gifNumber].images.original.url
            gifs[gifNumber].classList.add('imgSize')
        }
        getGif.value = ''
    } catch(err) {
        let errDisplay = document.querySelector('.imagesAll') 
        errDisplay.innerHTML = 'Ваш сетевой запрос не был выпонелнен успешно: ' + err.message
        errDisplay.style.marginTop = '2rem'
        errDisplay.style.color = 'red'
    } finally {
        console.log('hi');
    }
}

button.addEventListener('click', onSearch)
document.addEventListener('keydown', (event) => {
    if (event.code=='Enter') {
        onSearch()
    }
})






