var Adp = {
	module: {
		depends: function(...modules) {
			var fails = modules.filter(e => Adp[e] === undefined);
			if(fails.length) {
				throw "Os seguintes módulos não foram carregados: " + fails;
			}
		}
	}
};