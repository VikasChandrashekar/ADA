const bubbleSort = (array)=>{
    let wall = array.length;
    while(wall >= 0){
        for(var i=0; i<wall; i++){
            if(array[i] > array[i+1]){
                swap(array, i, i+1);
            }
        }
        wall--;
    }
    return array;
}

const swap = (array, i, j) => {

}