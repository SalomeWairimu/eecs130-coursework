//The data:
const people = [
    { name: "Jane", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 300 },
    { name: "Brenda", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 10} ,
    { name: "Wanda", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 60 },
    { name: "Maria", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 80 },
    { name: "Jasper", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 600 },
    { name: "Malik", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 40 }
];


// let template = `
//     <div class="card">
//         <img src="${people[0].pic}">
//     </div>
//     <div class="player-detail">
//         <p>${people[0].name}'s high score is: ${people[0].score}</p>
//     </div>
// `;
// document.querySelector(".players").innerHTML += template;

// template = `
//     <div class="card">
//         <img src="${people[1].pic}">
//     </div>
//     <div class="player-detail">
//         <p>${people[1].name}'s high score is: ${people[1].score}</p>
//     </div>
// `;
// document.querySelector(".players").innerHTML += template;

for(var i = 0; i < people.length; i++)
{
    let template = `
    <div class="card">
        <img src="${people[i].pic}">
    </div>
    <div class="player-detail">
        <p>${people[i].name}'s high score is: ${people[i].score}</p>
    </div>
`;
    document.querySelector(".players").innerHTML += template;
}

