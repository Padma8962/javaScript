#Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-f7hnfgcu?file=index.html)

#solution code

## Project 1

```javascript
const buttons =document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body")
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor =e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor =e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor =e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor =e.target.id
    }
  })
})

```

##Project 2 solution
```javascript
const form=document.querySelector('form')
//form jab bhi submit hota hai toh ya toh post type m submit hota hia ya get type m

// const heigth = parseInt(document.querySelector('#height').value)
//this useCase will give you empty value of heigth
form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = (document.querySelector('#results'))
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML =`<span>${bmi}</span>`
  }

})

```
##Project3 solution

```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')



setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerText = date.toLocaleTimeString()
},1000)

```