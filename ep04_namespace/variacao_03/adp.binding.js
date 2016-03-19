Adp.module.depends('logger', 'helper');

Adp.binding = {
	oneWay: function($source, $target) {
		Adp.logger.debug("Binding: " + $source.attr('id') + 
			" => " + $target.attr('id'));
		$source.keyup(function() {
			Adp.logger.debug("Atualizando target para '" + $source.val() + "'");
			Adp.helper.syncVal($source, $target);
		});
	},
	twoWay: function($component1, $component2) {
		Adp.binding.oneWay($component1, $component2);
		Adp.binding.oneWay($component2, $component1);
	}
};