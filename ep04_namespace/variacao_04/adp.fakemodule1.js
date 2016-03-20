Adp.fakemodule1 = {
	setupGlobal: function() {
		console.log('[GLOBAL] Configurando FakeModule1');
	},
	setupFragment: function(targetSelector) {
		console.log('[FRAGMENT] Configurando FakeModule1 para ' + targetSelector);
	}
};
