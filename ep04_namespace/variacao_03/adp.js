if(Adp !== undefined) throw "Adp já foi definido";

var Adp = {
	module: {
		depends: function() {
			for(var i = 0; i < arguments.length; i++) {
				if(Adp[arguments[i]] === undefined) {
					throw arguments[i] + " não foi definido";
				}
			}
		},
		notExists: function(moduleName) {
			return Adp[moduleName] === undefined;
		}
	}
};