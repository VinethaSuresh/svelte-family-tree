let queenElizabetham = {
    "name": "Queen Elizabeth",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/sb0KLnZ/eli.jpg"

}

let charles = {
    "name": "Charles",
    "id": 2,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/HYmR82F/ele-Child1.jpg"

}

let anne = {
    "name": "Anne",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/Sdw7ZVC/anne.jpg"

}

let andrew = {
    "name": "Andrew",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/4SS5yYG/eli-Child3.jpg"

}

let edward = {
    "name": "Edward",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/D42CnK2/eli-Child4.jpg"

}

let willam = {
    "name": "William",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/j6bS2tR/ele-Char-Child1.jpg"

}

let harry = {
    "name": "Harry",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/qBt7Q7D/ele-Char-Child2.jpg"

}

let beatRice = {
    "name": "BeatRice",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/6RPqYrY/eli-And-Child1.jpg"

}

let eugenie= {
    "name": "Eugenie",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/5ssbNZx/engenie.jpg"
    

}

let louise = {
    "name": "Louise",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/QvXnsRv/ele-Edw-Child1.jpg"

}

let george = {
    "name": "George",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/bFQ4sS7/ele-Will-Child1.jpg" 

}

let charlotte = {
    "name": "Charlotte",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/ygzNBz3/ele-Will-Child2.jpg"  


}

let louis = {
    "name": "Louis",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/2WjMC1y/ele-Will-Child3.jpg" 


}
let archie = {
    "name": "Archie",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/6FNBsLb/ele-Harry-Child1.jpg" 


}

let savannah = {
    "name": "Savannah",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/Ln2NqPB/ele-Peter-Child1.jpg" 


}

let isla = {
    "name": "Isla",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/1LJb8SW/ele-Peter-Child2.png" 

}

let miaGrace = {
    "name": "MiaGrace",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/1n7zNFV/elezara-Child1.jpg"
    

}

let lenaElizabeth = {
    "name": "LnaElizabeth",
    "id": 1,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/hBbHk17/ele-Zara-Child2.jpg" 
}
let peter = {
    "name": "Peter",
    "id": 2,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/7KtSGr3/ele-Anne-Child1.jpg" 

}
let zaraTindall = {
    "name": "ZaraTindall",
    "id": 2,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/mB3NndM/zara.jpg"  

}
let james = {
    "name": "James",
    "id": 2,
    "children": [],
    "parent": null,
    "imageSrc":"https://i.ibb.co/NVKnbyg/ele-Edw-Child2.jpg"

}
// queenElizabetham children
queenElizabetham.parent=queenElizabetham;
 charles.parent=queenElizabetham;
 queenElizabetham.children.push(charles);
 anne.parent=queenElizabetham;
 queenElizabetham.children.push(anne);
 andrew.parent=queenElizabetham;
 queenElizabetham.children.push(andrew);
 edward.parent=queenElizabetham;
 queenElizabetham.children.push(edward);
 
// charles children
 willam.parent=charles;
 charles.children.push(willam);
 harry.parent=charles;
 charles.children.push(harry);

 // anne children
 peter.parent=anne;
 anne.children.push(peter);
 zaraTindall.parent=anne;
 anne.children.push(zaraTindall);
 
 // andrew children
 beatRice.parent=andrew;
 andrew.children.push(beatRice);
 eugenie.parent=andrew;
 andrew.children.push(eugenie);


 // edward children
 louise.parent=edward;
 edward.children.push(louise);
 james.parent=edward;
 edward.children.push(james);

 // Radhika children
 george.parent=willam;
 willam.children.push(george);
 charlotte.parent=willam;
 willam.children.push(charlotte);
 louis.parent=willam;
 willam.children.push(louis);

  // harry children
  archie.parent=harry;
  harry.children.push(archie);

 // peter children
 savannah.parent=peter;
 peter.children.push(savannah);
 isla.parent=peter;
 peter.children.push(isla);

 // zara children
 miaGrace.parent=zaraTindall;
 zaraTindall.children.push(miaGrace);
 lenaElizabeth.parent=zaraTindall;
 zaraTindall.children.push(lenaElizabeth);

export default queenElizabetham;