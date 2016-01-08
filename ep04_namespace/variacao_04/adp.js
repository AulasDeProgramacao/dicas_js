var Adp = {
	loader: {
		setupGlobal: function() {
			Adp.loader.callRecursively(Adp, 'setupGlobal');
		},
		setupFragment: function(targetSelector) {
			Adp.loader.callRecursively(Adp, 'setupFragment', targetSelector);
		},
		callRecursively: function(owner, methodName, params) {
			if(typeof owner[methodName] === 'function') {
				owner[methodName](params);
			}
			
			for(key in owner) {
				if (key !== 'loader' && owner[key] instanceof Object) {
					Adp.loader.callRecursively(owner[key], methodName, params);
				}
			}
		}
	}
};