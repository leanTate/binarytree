const binarytree = require('./binarytree.js');
const binarytreeNode = require('./binarytreeNode.js');
const recorrer = require('./recorrer.js');

let raiz = new binarytree();

let nodo1 = new binarytreeNode(10);
let nodo2 = new binarytreeNode(15);
let nodo3 = new binarytreeNode(5);


if(!raiz.root){
    raiz.root = nodo1;
}else{
    console.log("es nula");
};


if (nodo2.value > nodo1.value){
    nodo1.right = nodo2;
}

if (nodo3.value < nodo1.value){
    nodo1.left = nodo3;
}

recorrer(raiz.root);
console.log(raiz.root);