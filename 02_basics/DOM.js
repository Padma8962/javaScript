// console.log(window)
// console.log(window.document)
// console.log(document)
// console.dir(document)
// console.dir(document.baseURL)
// document.getElementById('heading')
// document.getElementById('heading').innerHTML ='<h1>Chai aur code</h1>'
// document.getElementById('heading').class //.id,.className
// document.getElemenetById('heading).getAttribute('id')
//document.getElemenetById('heading).getAttribute('class','test') //this does not overwrite class
// title.style.backgroundColor ='green'
// title.style.padding ='15px'
// title.textContent / tilte.innerHTML(pura HTML dega jese tags bhi dikhenge) / title.innerText
//differnce between title.textText(text jo actually m visible hai) v/s title.innerContent(text k ander kuch aur bhi text hai jo kuch css proprties se hata diya hai vo bhi show hota hai jese by using <span>)



// document.querySelector(h2) //gives first h2 element
// document.querySelector('#title') 
// document.querySelector('.heading')

const myul = document.querySelector('ul')
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor ='green'

//differnce between Array and NodeList and HTMLCollection
const liList = document.querySelectorAll('li') //this will create a listNode
liList[0].style.color ='green'

const tempClassList = document.getElementsByClassName('list-item')
// if we have to use map function on this first we have to convert into array
const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach(function(li){
    li.style.color='orange'
})

