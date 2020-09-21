

const btnHamburger = () => {

    console.log('hello')
    let itemid = document.querySelector('.menu')

    if (itemid.style.display == null) {
        itemid.style.display = 'none'
    }

    if(itemid.style.display === 'none') {
        itemid.style.display = 'flex'
    } else {
        itemid.style.display = 'none'
    }
}