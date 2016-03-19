if(Adp !== undefined) throw "Adp já foi definido";

var Adp = {
	module: {
		depends: function(...modules) {
			var fails = modules.filter(e => {return Adp[e] === undefined});
			if(fails.length) {
				throw "Os seguintes módulos não foram carregados: " + fails;
			}
		},
		notExists: function(moduleName) {
			return Adp[moduleName] === undefined;
		}
	}
};