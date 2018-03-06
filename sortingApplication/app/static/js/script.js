//custom js

Dictionary = {'34': 'thirty-four', '90': 'ninety',
'91': 'ninety-one','21': 'twenty-one',
'61': 'sixty-one', '9': 'nine',
'2': 'two', '6': 'six', '3': 'three ',
'8': 'eight', '80': 'eighty', '81': 'eighty-one',
'Ninety-Nine':  '99', 'nine-hundred':  '900'}

function sorted() {
	var sortedDictionary = {}//empty dictionary for final output
	keys = Object.keys(Dictionary);//get all key of Dictioanry puts them in an array
	i = -1;
	len = keys.length;//length of keys in dictionary
	keys.sort();//sort the keys in ascending order
	//console.log(list[-1]);
	while(++i < len) {
		sortedDictionary[keys[i]] = Dictionary[keys[i]];
	}	
	console.log(sortedDictionary);
	var sortable = [];
	for (var key in sortedDictionary) {
		if (sortedDictionary.hasOwnProperty(key))
			sortable.push([key, sortedDictionary[key]]); 
	}
	console.log(sortable);
	document.getElementById('result').innerHTML = sortable;
}
