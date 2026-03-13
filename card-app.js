let terms = []
let defs = []
// let flipped = false;

function saveTerm(){
    let term = document.getElementById('input')
    let def = document.getElementById('textarea')
    if(term.value && def.value){
        terms.push(term.value)
        defs.push(def.value)
    }else{
        alert('Enter a term or definition')
    }

    console.log(`term array : ${terms} | def array : ${defs}`)
}

function generateFlashcards(){
const element = document.getElementById('cards')
html=''

    for(i=0; i<terms.length; i++){
        html+=`
        <div class="card-container" id="cardContainer" onclick="flipCard(${i})">
        <div class="card" id="card${i}">
            <!-- font side of card -->
            <div class="card-face card-front">
                <h2>Term:</h2>
                <p>${terms[i]}</p>
            </div>

            <div class="card-face card-back">
                <h2>Definition</h2>
                <p>${defs[i]}</p>
            </div>


        </div>
    </div>
        `
    }

    element.innerHTML=html
    
}



function flipCard(index){
        let card = document.getElementById('card' + index)
        if(card.style.transform == 'rotateY(180deg)'){
            card.style.transform = 'rotateY(0deg)';
        }else{
            card.style.transform = 'rotateY(180deg)';
        }
        // flipped = !flipped;
};

function clearAll(){
    terms = []
    defs = []
    generateFlashcards()
}