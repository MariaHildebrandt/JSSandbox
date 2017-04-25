/****************************/
/*Quicksort without classes*/
/**************************/

var array = [9, 3, 4, 5, 1, -2 , 4, 5, 9, 13];
console.log(array.toString());

var partition = function(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
            i = left, 
            j = right; 
    while (i <= j) { 
        while (array[i] < pivot) { 
            i++;
        }
        while (array[j] > pivot) { 
            j--;
        }
        if (i <= j) { 
            swap(array, i, j); 
            i++;
            j--;
        }
     }
     return i; 
};


var quick = function(array, left, right){
    var index; 
    if (array.length > 1) { 
        index = partition(array, left, right);
        if (left < index - 1) { 
            quick(array, left, index - 1); 
        }
        if (index < right) {    
            quick(array, index, right); 
        }
    }
};

var swap = function(array, index1 , index2){
    [array[index1], array[index2]] = [array[index2], array[index1]];
};



quick(array, 0, array.length - 1);
console.log(array.toString());
