const binarytreeNode = require("./binarytreeNode");

class binarytree{
    constructor(value){
        this.root = null;
    }
    insert(value){
        let node = new binarytreeNode(value);

        if(this.root == null){
            this.root = node;
        }else{
            console.log("es nula");
        };
    }
};

module.exports = binarytree;
