Adp.module.depends('logger', 'helper');

if(Adp.module.notExists('binding')) {

	Adp.binding = {
		oneWay: function($sourceComponent, $targetComponent) {
			Adp.logger.debug("Binding: " + $sourceComponent.attr('id') + 
				" => " + $targetComponent.attr('id'));
			$sourceComponent.keyup(function() {
				Adp.logger.debug("Atualizando target para '" + $sourceComponent.val() + "'");
				$targetComponent.val($sourceComponent.val());
			});

			Adp.helper.coisaMuitoUtil();
		},
		twoWay: function($component1, $component2) {
			Adp.binding.oneWay($component1, $component2);
			Adp.binding.oneWay($component2, $component1);
		}
	};
}