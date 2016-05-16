		var locations = ["Israel","Langtang","Langtang valley"];

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

module.exports = Map;
