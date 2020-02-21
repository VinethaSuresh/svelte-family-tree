let Ram = {
    "name": "Ram",
    "id": 1,
    "children": [],
    "parent": null

}

let Uma = {
    "name": "Uma",
    "id": 2,
    "children": [],
    "parent": null

}

let Padamaja = {
    "name": "Padamaja",
    "id": 1,
    "children": [],
    "parent": null

}

let Kumar = {
    "name": "Kumar",
    "id": 1,
    "children": [],
    "parent": null

}

let Jaya = {
    "name": "Jaya",
    "id": 1,
    "children": [],
    "parent": null

}

let Radhika = {
    "name": "Radhika",
    "id": 1,
    "children": [],
    "parent": null

}

let Praveen = {
    "name": "Praveen",
    "id": 1,
    "children": [],
    "parent": null

}

let Monika = {
    "name": "Monika",
    "id": 1,
    "children": [],
    "parent": null

}

let Teju = {
    "name": "Teju",
    "id": 1,
    "children": [],
    "parent": null

}

let Rajesh = {
    "name": "Rajesh",
    "id": 1,
    "children": [],
    "parent": null

}

let Vinetha = {
    "name": "Vinetha",
    "id": 1,
    "children": [],
    "parent": null

}

let Thulasi = {
    "name": "Thulasi",
    "id": 1,
    "children": [],
    "parent": null

}

let Sai = {
    "name": "Sai",
    "id": 1,
    "children": [],
    "parent": null

}
let Babbi = {
    "name": "Babbi",
    "id": 1,
    "children": [],
    "parent": null

}

let Chinni = {
    "name": "Chinni",
    "id": 1,
    "children": [],
    "parent": null

}

let Janani = {
    "name": "Janani",
    "id": 1,
    "children": [],
    "parent": null

}

let Abi = {
    "name": "Abi",
    "id": 1,
    "children": [],
    "parent": null

}

let Keerthi = {
    "name": "kerthi",
    "id": 1,
    "children": [],
    "parent": null

}
// Ram children
Ram.parent=Ram;
 Uma.parent=Ram;
 Ram.children.push(Uma);
 Padamaja.parent=Ram;
 Ram.children.push(Padamaja);
 Kumar.parent=Ram;
 Ram.children.push(Kumar);
 Jaya.parent=Ram;
 Ram.children.push(Jaya);
 Radhika.parent=Ram;
 Ram.children.push(Radhika);
 
// uma children
 Monika.parent=Uma;
 Uma.children.push(Monika);
 Praveen.parent=Ram;
 Uma.children.push(Praveen);
 Teju.parent=Monika;
 Monika.children.push(Teju);

 // Padamaja children
 Rajesh.parent=Padamaja;
 Padamaja.children.push(Rajesh);
 Vinetha.parent=Padamaja;
 Padamaja.children.push(Vinetha);
 Thulasi.parent=Padamaja;
 Padamaja.children.push(Thulasi);


 // Kumar children
 Sai.parent=Kumar;
 Kumar.children.push(Sai);


 // Jaya children
 Babbi.parent=Jaya;
 Jaya.children.push(Babbi);
 Chinni.parent=Jaya;
 Jaya.children.push(Chinni);

 // Radhika children
 Janani.parent=Radhika;
 Radhika.children.push(Janani);
 Abi.parent=Radhika;
 Radhika.children.push(Abi);
 Keerthi.parent=Radhika;
 Radhika.children.push(Keerthi);

export default Ram;