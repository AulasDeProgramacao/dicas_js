Adp.fakemodule2 = {
	setupGlobal: function() {
		console.log('[GLOBAL] Configurando FakeModule2');
	},
	setupFragment: function(targetSelector) {
		console.log('[FRAGMENT] Configurando FakeModule2 para ' + targetSelector);
	},
	moreFake: {
		setupFragment: function(targetSelector) {
			console.log('[FRAGMENT] Configurando MoreFake para ' + targetSelector);
		},
	}
};