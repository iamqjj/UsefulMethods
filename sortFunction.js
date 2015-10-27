

var arr = [1,5,2,25,14,3,0];

// InsertSort 
function insertSort(arr){
  for (var i = 1 ; i < arr.length ; i++ ) { //从第二个数组元素开始进行插入
    for (var j = i ; j >= 0 ; j--) {//比较插入元素和元素之前数组大小
      if (arr[j] < arr[j-1]) { // 如果之前数字大就交换位置，直到交换到适当位置
        tmp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = tmp;
      };    
    };
  };
  return arr;
};


//BinaryInsertSort
function  binaryInsertSort(arr){
  for (var i = 1 ; i < arr.length ; i++) {
    var low = 0;
    var high = i-1;
    //二分查找位置
    while(low <= high ){
      var middle = Math.floor((low + high)/2);
      if (arr[middle] > arr[i]) {
        high = middle - 1;
      }else{
        low = middle + 1;        
      };
    }
    var tmp = arr[i];
    //将大于这个在位置后元素后移
    for (var j = i; j >= low + 1  ; j--) {
      arr[j] = arr[j - 1];
    };
    arr[low] = tmp; //插入适当位置
  };
}


//ShellSort
function shellSort(arr){
  for(var fraction=Math.floor(arr.length/2); fraction>0 ;fraction=Math.floor(fraction/2)){//使用什么分组因子
    for(var group= 0; group<fraction; group++){//分成几组
      for(var i=fraction;i<arr.length ; i+=fraction){//每组进行插入排序
        for (var j = i ; j >= 0 ; j-=fraction){
          if (arr[j]<arr[j-fraction]) {
            var temp=arr[j];
            arr[j]=arr[j-fraction];
            arr[j-fraction]=temp;
          };  
        }      
      }
    }        
  }
}



//BublleSort
function bublleSort(arr){
  for (var i = 0 ; i < arr.length - 1; i++) { //要进行数组长度-1次冒泡
    for (var j = 0; j < arr.length -i- 1 ; j++) { // 数组结尾已经排序，只需对之前的数组继续进行冒泡
      if (arr[j] > arr[j+1]) { //把剩下数组中值最大大的元素沉到底 
        tmp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
      };
    };
  };
  return arr;
}

//SelectSort
function selectSort(arr){
  for (var i = 0 ;i < arr.length - 1;  i++) { // 执行length-1 次查询
    var min = i;
    for (var j = i + 1 ; j < arr.length ; j++) { // 查找未排序数组中最小的
      if (arr[j] < arr[min] ) {
        min = j;
      };
    };
    var tmp = arr[i] ; // 将最小的放入正确的位置
    arr[i] = arr[min];
    arr[min] = tmp;
  };
  return arr;
}


//quickSort
function quickSort(arr){
  if (arr.length > 0) {
    _quickSort(arr,0,arr.length-1);
  };
  return arr;
}

function _quickSort(arr, low, high){
  if (low < high) {
    var middle = getMiddle(arr,low,high);//将list数组进行一分为二  
    _quickSort(arr, low, middle - 1); //对低字表进行递归排序   
    _quickSort(arr, middle + 1, high);//对高字表进行递归排序    
  };
}

function getMiddle(arr, low, high){
  var middle = arr[low]; //数组的第一个作为中轴 
  while(low < high){
    //比中轴小的记录移到低端    
    while(low<high && arr[high]>=middle){
      high-- ;
    }
    arr[low] = arr[high];
     //比中轴大的记录移到高端    
     while(low<high && arr[low]<=middle){
      low++ ;
     }
     arr[high] = arr[low];
  }
  arr[low] = middle;//中轴记录到尾  
  return low;//返回中轴的位置
}



//MergeSort
function mergeSort(arr){
  if (arr.length > 0) {
    _mergeSort(arr,0,arr.length-1);
  };
  return arr;
}

function _mergeSort (arr, left, right) {
  if (left < right) {
    var middle = Math.floor((left + right)/2); //找出中间索引  
    _mergeSort(arr,left, middle);  //对左边数组进行递归 
    _mergeSort(arr, middle+1 , right); //对右边数组进行递归  
    merge(arr, left, middle, right);//合并  
  };
}

function merge(arr, left, middle, right){
  var tmpArr = [];
  var startLeft = left;
  var startRight = middle +1;
  var third = left; //third记录中间数组的索引
  var tmp = left;
  

  //从两个数组中取出最小的放入中间数组 
  while(startLeft <= middle && startRight <=right){
    if(arr[startLeft] <= arr[startRight]){
      tmpArr[third++] = arr[startLeft++];
    }else{
      tmpArr[third++] = arr[startRight++];
    }
  }
  //剩余部分依次放入中间数组  
  while(startRight<=right){  
      tmpArr[third++]=arr[startRight++];  
  }  
  while(startLeft<=middle){  
      tmpArr[third++]=arr[startLeft++];  
  }  
  //将中间数组中的内容复制回原数组  
  while(tmp<=right){  
      arr[tmp]=tmpArr[tmp++];  
  }  

}


//二分查找
function binarySearch(arr,value) {
    var low = 0;
    var high =arr.length - 1;
    while ((low <= high) && (low <=arr.length - 1)&& (high <=arr.length - 1)) {
        var middle = Math.floor((low + high)/2);
        if (value == arr[middle]) {
            return middle;
        } else if (value<arr[middle]) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return -1;
}

