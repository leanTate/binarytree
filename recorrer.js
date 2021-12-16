function recorrer(root, level=0) {
    console.log( " ~ ".repeat(level) + root.value);
    if (root.left) {
        recorrer(root.left,level+1);
    }
    if (root.right){
        recorrer(root.right,level+1);
    }
}

module.exports = recorrer;