document.querySelector('#jerryDiaz').addEventListener('click', ()=>{
    document.querySelector("#jerryDiaz").classList.add("select")
    document.querySelector("#melvinFleming").classList.remove("select")
    document.querySelector("#miriamRoss").classList.remove("select")
    document.querySelector("#patsyHarper").classList.remove("select")

    document.querySelector("#chosenJerryDiaz").classList.remove("hidden")
    document.querySelector("#chosenMelvinFleming").classList.add("hidden")
    document.querySelector("#chosenMiriamRoss").classList.add("hidden")
    document.querySelector("#chosenPatsyHarper").classList.add("hidden")

})

document.querySelector('#melvinFleming').addEventListener('click', ()=>{
    document.querySelector("#jerryDiaz").classList.remove("select")
    document.querySelector("#melvinFleming").classList.add("select")
    document.querySelector("#miriamRoss").classList.remove("select")
    document.querySelector("#patsyHarper").classList.remove("select")

    document.querySelector("#chosenJerryDiaz").classList.add("hidden")
    document.querySelector("#chosenMelvinFleming").classList.remove("hidden")
    document.querySelector("#chosenMiriamRoss").classList.add("hidden")
    document.querySelector("#chosenPatsyHarper").classList.add("hidden")

})
document.querySelector('#miriamRoss').addEventListener('click', ()=>{
    document.querySelector("#jerryDiaz").classList.remove("select")
    document.querySelector("#melvinFleming").classList.remove("select")
    document.querySelector("#miriamRoss").classList.add("select")
    document.querySelector("#patsyHarper").classList.remove("select")

    document.querySelector("#chosenJerryDiaz").classList.add("hidden")
    document.querySelector("#chosenMelvinFleming").classList.add("hidden")
    document.querySelector("#chosenMiriamRoss").classList.remove("hidden")
    document.querySelector("#chosenPatsyHarper").classList.add("hidden")
})

document.querySelector('#patsyHarper').addEventListener('click', ()=>{
    document.querySelector("#jerryDiaz").classList.remove("select")
    document.querySelector("#melvinFleming").classList.remove("select")
    document.querySelector("#miriamRoss").classList.remove("select")
    document.querySelector("#patsyHarper").classList.add("select")

    document.querySelector("#chosenJerryDiaz").classList.add("hidden")
    document.querySelector("#chosenMelvinFleming").classList.add("hidden")
    document.querySelector("#chosenMiriamRoss").classList.add("hidden")
    document.querySelector("#chosenPatsyHarper").classList.remove("hidden")
})