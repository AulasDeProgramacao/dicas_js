Adp.module.depends('logger');

if(Adp.module.notExists('helper')) {

	Adp.helper = {
		coisaMuitoUtil: function() {
			Adp.logger.info('Realmente útil!');
		}
	};
}