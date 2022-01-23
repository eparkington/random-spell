const button = document.querySelector('.new-spell');
const div = document.querySelector('.spells')

button.addEventListener('click', async (getSpell) => {
/*     try{
        const response = await fetch(request)
        if(!response.ok){
            throw Error(response.statusText)
        }
    }
    
    catch(err){
        console.log(err)
        alert('Failed to fetch new spell');
    } */
    
    const getSpells = ((data) => {
        const index = Math.floor(Math.random() * data.results.length);
        const spellName = data.results[index].name;
        const spellDesc = data.results[index].desc;
        const html = `<h2>${spellName}</h2>
        <p>${spellDesc}`;
        div.innerHTML = html;
    });


//fetch api data

    fetch('https://api.open5e.com/spells/').then((response) => {
        return response.json();
    }).then(data => {
        getSpells(data);
    }).catch(err => {
        console.log('rejected', err);
    });

});