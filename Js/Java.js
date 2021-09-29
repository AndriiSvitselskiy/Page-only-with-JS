let body = document.body
body.style.boxSizing = `border-box`
//Task1
let task1 = document.createElement(`div`)
body.append(task1)
let form = document.createElement(`form`)
form.style.display = `flex`
task1.append(form)

let textArea = document.createElement(`textarea`)
textArea.style.width = `150px`
textArea.style.height = `100px`
textArea.setAttribute(`id`, `textArea1`)
form.append(textArea)

let table = document.createElement(`table`)
table.style.display = `none`
table.style.border = `1px solid black`
table.style.borderCollapse = `collapse`
table.style.textAlign = `center`
table.style.marginLeft = `20px`

form.append(table)

let submit = document.createElement(`button`)
submit.innerHTML = `Send info`
submit.style.width = `150px`
task1.append(submit)

submit.addEventListener(`click`, function (event) {
    while (table.children.length > 0) {
        table.removeChild(table.lastChild)
    }
    table.style.display = `block`
    let target = document.getElementById('textArea1').value
    let id = 0
    let tr = document.createElement(`tr`)
    tr.setAttribute(`id`, `id0`)
    tr.style.height = `40px`
    table.append(tr)
    for (let i = 0; i < target.length; i++) {
        let check = target.codePointAt(i)
        console.log(check)
        if (check == 49) {
            let child = document.createElement(`td`)
            child.style.backgroundColor = `#002060`
            child.style.padding = `10px`
            child.style.border = `0.5px solid black`
            child.style.minWidth = `20px`
            child.style.color = `white`
            child.innerHTML = target[i]
            let check = document.getElementById(`id${id}`)
            check.append(child)

        } else if (check == 48) {

            let child = document.createElement(`td`)
            child.style.backgroundColor = `white`
            child.style.padding = `10px`
            child.style.border = `0.5px solid black`
            child.style.minWidth = `20px`
            child.innerHTML = target[i]
            let check = document.getElementById(`id${id}`)
            check.append(child)

        } else if (check == 32) {
            let child = document.createElement(`td`)
            child.style.backgroundColor = `white`
            child.style.padding = `10px`
            child.style.border = `0.5px solid black`
            child.style.minWidth = `20px`
            child.style.color = `white`
            child.innerHTML = ` `
            let check = document.getElementById(`id${id}`)
            check.append(child)
        } else if (check == 10) {
            id++
            let newTr = document.createElement(`tr`)
            newTr.setAttribute(`id`, `id${id}`)
            newTr.style.width = `100%`
            newTr.style.height = `40px`
            newTr.style.width = `100%`
            newTr.style.border = `0.5px solid black`
            table.append(newTr)

        }

    }
    console.log(target)

})
//Task2
let task2 = document.createElement(`div`)
task2.style.marginTop = `20px`
task2.style.border = `1px solid black`
task2.style.display = `flex`
body.append(task2)
for (let i = 0; i < 2; i++) {
    div = document.createElement(`div`)
    div.setAttribute(`id`, `task2Id${i}`)
    task2.append(div)
}
task2Id0.style.display = `flex`
task2Id0.style.flexDirection = `column`

function addRadio() {
    let text = [`width: `, `height: `, `rotate: `]

    for (let i = 0; i < 3; i++) {
        divRadio = document.createElement(`div`)
        divRadio.style.display = `flex`
        task2Id0.append(divRadio)
        let p = document.createElement(`p`)
        p.style.margin = `2px`
        p.style.width = `20%`
        p.innerHTML = text[i]
        divRadio.append(p)
        let radio = document.createElement(`input`)
        radio.setAttribute(`type`, `range`)
        radio.setAttribute(`min`, `0`)
        radio.setAttribute(`max`, `500`)
        radio.setAttribute(`id`, `radio${i}`)
        radio.style.width = `60%`
        radio.style.margin = `10px`
        divRadio.append(radio)
        if (i == 2) {
            radio.setAttribute(`max`, `360`)
        }
        p = document.createElement(`p`)
        p.setAttribute(`id`, `monitor${i}`)
        p.style.margin = `2px`
        p.style.border = `1px solid black`
        p.style.padding = `5px`
        p.style.width = `20%`

        divRadio.append(p)
    }

    for (let i = 0; i < 3; i++) {
        let p = document.createElement(`p`)
        p.style.margin = `2px`
        p.innerHTML = text[i]
        task2Id0.append(p)
        let span = document.createElement(`span`)
        // span.innerHTML = `50`
        span.setAttribute(`id`, `span${i}`)
        p.append(span)
    }
    for (let i = 0; i < 3; i++) {
        let id = document.getElementById(`radio${i}`)
        id.addEventListener(`mouseup`, function (event) {
            let spanId = document.getElementById(`span${i}`)
            spanId.innerHTML = document.getElementById(`radio${i}`).value
            div = document.getElementById(`task2Result`)
            let width = document.getElementById(`span0`).innerText
            let height = document.getElementById(`span1`).innerText
            let rotate = document.getElementById(`span2`).innerText
            div.style.width = `${width}px`
            div.style.height = `${height}px`
            div.style.transform = `rotate(${rotate}deg)`
            div.style.margin = `20px`
            monitor0.innerHTML = `${width}px`
            monitor1.innerHTML = `${height}px`
            monitor2.innerHTML = `${rotate}deg`

        })
    }
    task2Id0.style.padding = `5px`
    div = document.createElement(`div`)
    div.setAttribute(`id`, `task2Result`)
    task2Id1.append(div)
    let width = document.getElementById(`span0`).innerText
    let height = document.getElementById(`span1`).innerText
    let rotate = document.getElementById(`span2`).innerText
    div.style.backgroundColor = `#4E80BC`
    div.style.width = `${width}px`
    div.style.height = `${height}px`
    div.style.margin = `20px`
    task2Id1.style.marginLeft = `200px`

}
addRadio()


//Task4
div = document.createElement(`div`)
div.setAttribute(`id`, `task4`)
div.style.display = `flex`
div.style.marginTop = `20px`
div.style.justifyContent = `space-around`
let active = 0
let x
let y
div.addEventListener(`mousemove`, function (event) {
    let target = event.target
    let check = target.children[0]
    if (active == 1 && check !== undefined) {
        let coordX = event.clientX
        let coordY = event.clientY
        let child = target.children
        child = child[0]
        child.style.left = `${coordX-x+10}px`
        child.style.top = `${coordY-y-10}px`
    }
})
body.append(div)

function task4child() {

    for (let i = 0; i < 3; i++) {
        div = document.createElement(`div`)
        div.style.backgroundColor = `red`
        div.style.width = `300px`
        div.style.height = `200px`
        div.style.position = `relative`
        div.setAttribute(`id`, `img${i}`)
        task4.append(div)
        span = document.createElement(`span`)
        span.setAttribute(`id`, `task4Span${i}`)
        span.style.backgroundColor = `white`
        span.style.position = `absolute`
        span.style.display = `none`
        span.style.zIndex = `999`
        span.style.padding = `5px`

        div.append(span)
        div.addEventListener(`mouseover`, function (event) {
            let target = event.target
            let check = target.children[0]
            if (check !== undefined) {
                active = 1
                let position = target.getBoundingClientRect();
                x = position.left;
                y = position.top;
                let child = target.children
                child = child[0]
                child.style.display = `block`

            }

        })
        div.addEventListener(`mouseout`, function (event) {
            let target = event.target
            let check = target.children[0]
            if (check !== undefined) {
                active = 0
                let parent = event.target
                let child = parent.children
                child = child[0]
                child.style.display = `none`
            }

        })
    }

    let spanText = [`There is a black car`, `There is a beautiful flower`, `There is a clear sky`]
    for (let i = 0; i < 3; i++) {
        let check = document.getElementById(`task4Span${i}`)
        check.innerHTML = spanText[i]
    }

    img0.style.background = `url(../Img/car.jpg) no-repeat`
    img0.style.backgroundSize = `cover`

    img1.style.background = `url(../Img/flower.jpg) no-repeat`
    img1.style.backgroundSize = `cover`

    img2.style.background = `url(../Img/sky.jpg) no-repeat`
    img2.style.backgroundSize = `cover`
}
task4child()
//Task5
div = document.createElement(`div`)
div.style.display = `flex`
div.style.justifyContent = `space-around`
div.style.height = `300px`
div.style.margin = `30px`
div.style.boxShadow = `0 0 10px 1px black`
div.setAttribute(`id`, `task5`)
body.append(div)

form = document.createElement(`form`)
form.style.width = `30%`
form.setAttribute(`id`, `task5left`)
form.setAttribute(`onsubmit`, `return false`)
form.style.margin = `0 auto`
task5.append(form)

btn = document.createElement(`button`)
btn.style.margin = `20px`
btn.style.width = `80%`
btn.style.padding = `10px`
btn.innerHTML = `Побудувати!`
task5left.append(btn)

input = document.createElement(`input`)
input.style.margin = `20px`
input.style.width = `80%`
input.style.height = `20px`
input.style.transition = `all ease-out 1s`

input.setAttribute(`placeholder`, `Введiть кiлькiсть кругiв`)
input.setAttribute(`id`, `task5Input`)
task5left.append(input)

div = document.createElement(`div`)
div.style.width = `70%`
div.style.backgroundColor = `#4F81BD`
div.style.position = `relative`
div.setAttribute(`id`, `task5Right`)
div.addEventListener(`click`, function (event) {
    let check = document.getElementById(`task5Right`)
    if (event.target !== check) {
        event.target.remove()
    }
})
task5.append(div)

btn.addEventListener(`click`, function (event) {
    let quant = task5Input.value
    let res = 0
    if (quant == ``) {
        input.style.boxShadow = `0 0 5px 1px red, inset 0 0 5px 1px red`
        input.style.height = `50px`
        return input.focus()
    }
    for (let n of quant) {
        let check = n.codePointAt()
        if ((check > 47 && check < 58) && quant.length > 0) {
            res = 1
        } else if (check < 48 || check > 57) {
            res = 0
            input.style.boxShadow = `0 0 5px 1px red, inset 0 0 5px 1px red`
            input.style.height = `50px`
            return input.focus()
        }

    }
    if (res == 1) {
        function getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let position = task5Right.getBoundingClientRect();
        let left = position.left + 50;
        let right = position.right - 50;
        let bottom = position.bottom - 50;
        let top = position.top + 50;
        for (let i = 0; i < quant; i++) {
            let random = getRandom(20, 100)
            let circle = document.createElement(`div`)
            circle.style.position = `absolute`
            circle.style.backgroundColor = `#F79646`
            circle.style.borderRadius = `50%`
            circle.style.width = `${random}px`
            circle.style.height = `${random}px`
            circle.style.boxShadow = `0 0 10px 1px black`
            let randomX = getRandom(left, right)
            let randomY = getRandom(top, bottom)
            circle.style.left = `${randomX-left}px`
            circle.style.top = `${randomY-top}px`
            task5Right.append(circle)
            console.log(i)
        }
        task5Input.value = ``
        event.preventDefault()
        input.style.boxShadow = `0 0 5px 1px green,inset 0 0 5px 1px green`

        function normal() {
            input.style.boxShadow = `none`
        }
        setTimeout(normal, 1000)
        input.style.height = `20px`

    } else if (res == 0) {
        input.style.boxShadow = `0 0 10px 1px red, inset 0 0 10px 1px red`
        input.style.height = `50px`
        input.focus()
    }
    console.log(res)

})