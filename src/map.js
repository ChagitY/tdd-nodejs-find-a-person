var locations = ["Israel","Langtang","Bangkok"];
var names = ["Or A.","Or B.","Or C."];

function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	var array =[];
	this._posts.forEach(function (item) {
		if( item.indexOf(name)>-1)
			{
		array.push(item);
			}
	});
return array
  };

Map.prototype.check_if_person_in_location = function(name) {

		var flag = false;
		this._posts.forEach(function (item) {
		if( item.indexOf(name)>-1)
			{
			locations.forEach(function (loc) 
				{	
			if( item.indexOf(loc)>-1 && item.indexOf(" at ")>-1)
					{
						flag=true;
					}
				});
			}
		});
return flag;	
}


Map.prototype.check_persons_with_the_same_name_with_different_locations = function() {
	
	var res = false;
	
	
	var cmap = new Map(this._posts);
	//go over all the possible names
	names.forEach(function(name) {
		var array = [];	
		console.log(name);
		//for each name find all its locations
		var person_locations = cmap.find_a_person(name);
		console.log(person_locations);
		//add the locations for specific name to an array
		person_locations.forEach(function(value) {

			locations.forEach(function(location) {
				if (value.indexOf(location) > -1)
{
console.log(location);
					array.push(location);	
}
			});
		});
console.log(array);
		//check if in the array of locations of specific name there is duplication 
		if (array.length > 1) {
			for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < array.length; j++) {
					if (i != j && array[i] != array[j])
						res = true;
				}
			}
		}	
	});
	return res;
};


module.exports = Map;
