'use strict';

const images = [
    { 'id':'1', 'url':'./img/imagem1.png'},
    { 'id':'2', 'url':'./img/imagem2.jpg'},
    { 'id':'3', 'url':'./img/imagem3.jpg'},
    { 'id':'4', 'url':'./img/imagem4.jpg'},
]

const containerItems = document.querySelector('#container-itens')




const loadImages = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}




loadImages ( images, containerItems );

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore( lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)