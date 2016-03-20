Adp.module.depends('logger');

Adp.helper = {
	syncVal: function($from, $to) {
		Adp.logger.debug("Sync Val: " + $from.attr('id') + " => " + $to.attr('id'));
		$to.val($from.val())
	}
};
