




const form = document.querySelector('form');
const label = document.querySelector('h1');
console.log(form)


let count = 0;
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     const pullups = document.querySelector('#pullups');
//     count = count + parseInt(pullups.value);
//     label.innerText = count;
//     console.log(pullups.value); 
// });

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function(event){
            count +=  parseInt(button.innerText);
        label.innerText = count;
    })    
})

// const newH1 = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random();
//             if (random < 0.5) {
//                 const things = {
//                     '/things': 'backpack'
//                 };
//                 const data  = things[url]
//                 return resolve(data);
//             } else {
//                 return reject();
//             }
//         }, 1000)
//     })
// }
// newH1('/things').then((response) => {
//     console.log('sgadg');
//     console.log(response);
// })
// .catch(() => {
//     console.log("booo")
// })


fetch('https://restcountries.com/v3.1/region/europe')
.then((response) => {
    response.json().then((data) => {
        for(let i = 0;i < data.length; i++){
            console.log(data[i].capital[0])
        }
        
    })
})
.catch