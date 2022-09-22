const getData=()=>{
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(rawData => {
        console.log(rawData)
        for(let i = 0; i < 7; i++){
            // Getting Name Data
            let givenName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
            let familyName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
            let fullName = `${givenName} ${familyName}`;
            console.log(fullName)
            // document.querySelector(`#name-${i}`).innerHTML=fullName;
    
    
            // Getting Nationality Data
            let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
            
            
    
            // Getting Constructor Data
            let constructor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
            
            // Getting Points Data
            let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
            console.log(nationality, constructor, points)

            createList(fullName, nationality, constructor, points)
            

            
        }
    })
}
const DOM_Elements = {
    drivers_list: '.driver-list'
}

function createList(fullName,nationality, constructor, points){
    const html =`<table class="table">
    <thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Family</th>
        <th scope="col">Nationality</th>
        <th scope="col">Sponsor</th>
        <th scope="col">Points</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td scope="row">${fullName}</th>
        <td>${nationality}</td>
        <td>${points}</td>
        <td>${constructor}<td>
    </tr>
    </tbody>
</table>
`
document.querySelector(DOM_Elements.drivers_list).insertAdjacentHTML('beforeend' , html)
}