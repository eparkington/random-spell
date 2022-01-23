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
    const getSpells = async () => {
        const response = await fetch('https://api.open5e.com/spells/');
        const data = await response.json();
        return data;
    };

    getSpells()
        .then( data => {
            const index = Math.floor(Math.random() * data.results.length);
            const spellName = data.results[index].name;
            const spellDesc = data.results[index].desc;
            const html = `<h2>${spellName}</h2>
            <p>${spellDesc}`;
            div.innerHTML = html;
        }).catch(err => {
        console.log('rejected', err);
    });

});