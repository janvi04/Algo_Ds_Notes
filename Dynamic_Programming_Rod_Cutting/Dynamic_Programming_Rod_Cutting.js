//find max function 
function max( a ,  b )
{
	return (a>b)?a:b;
}
//find max money function 
function money (arr , size ) {



	if (size<=0) return 0;
	else
	{
		var max_val=Number.MIN_VALUE;
		for (var i = 0; i < size; i++)
                    max_val = max(max_val, arr[i] + money(arr, size - i - 1));
                return max_val;

	}
}
//given money 
var  arr = [1, 5, 8, 9, 10, 17, 17, 20];
var size = arr.length;

            console.log("MAximum Cost : " + money(arr, size));
           