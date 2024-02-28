
const addImageToSections = () => {
  
  const dogImage = fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => {
      console.log('data:', data)
      return data.json()
    })
    .then(data => {
      console.log('datA2:', data)
      return data
    })
    console.log('const dogImage:',dogImage)

    const section1 = document.querySelector('.section1')
    console.log('section1:', section1)
    section1.style.backgroundImage= `url(${dogImage.message})`
}
addImageToSections()