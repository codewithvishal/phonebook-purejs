///////////////////////////////////////////////////////
//                                                   //
//  Developed by: Vishal Chopra                      //
//  Website: vishalchopra.in                         //
//  Github: http://github.com/codewithvishal         //                   
//                                                   //
///////////////////////////////////////////////////////

var phoneBooks = (function(){

	var contacts = [];

	function conUser(name, phone) {
		this.name = name;
		this.phone = phone;
	}

	function save(){
		var _json = JSON.stringify(contacts);
		localStorage.setItem('contacts', _json);
	}

	function load(){
		contacts = JSON.parse(localStorage.getItem('contacts'));
		if(contacts === null || contacts === undefined){
			contacts = [];
		}
		return contacts;
	}
	load();

	var obj = {};

	obj.createContact = function(name, phone){
		var i;
		for(i in contacts){
			if(contacts.phone == phone){
				console.log('Name and contacts already exists');
				return;
			}
		}
		var user1 = new conUser(name, phone);
		contacts.push(user1);
		save();
	};

	obj.display = function(){
		var dataCopy  = [];

		for(var i in contacts){
			var data = contacts[i];
			var objCopy = {};
			for(var j in data){
				objCopy[j] = data[j];
			}
			dataCopy.push(data);
		}
		return dataCopy;
	};

	obj.delete = function(phone){
		for(var i in contacts){
			if(contacts[i].phone === phone){
				contacts.splice(i, 1);
				break;
			}
		}
		save();
	};

	obj.search = function(queryy){
		var result = [];
		var f = 0;
        var query = queryy.trim();
        // check whether the query is name
        var isName = isNaN(query);
        
        if(isName === true){
            for(var i in contacts){
                if(contacts[i].name === query){
                    result.push(contacts[i].name);
                    result.push(contacts[i].phone);
                    return result;
                    f = 1;
                }
		  }
        } 
        // if isName returns true then it means it is a number
        else {
            for(var i in contacts){
                if(contacts[i].phone === query){
                    result.push(contacts[i].name);
                    result.push(contacts[i].phone);
                    return result;
                    f = 1;
                }
		  }
        }
		
		if(f === 0){
			return 'Not Found!';
		}
	};

	obj.log = function(){
		console.log(contacts);
	};

	return obj;
})();
