var Adp = {
	binding: {
		oneWay: function($sourceComponent, $targetComponent) {
			Adp.logger.debug("Binding: " + $sourceComponent.attr('id') + 
				" => " + $targetComponent.attr('id'));
			$sourceComponent.keyup(function() {
				Adp.logger.debug("Atualizando target para '" + $sourceComponent.val() + "'");
				$targetComponent.val($sourceComponent.val());
			});
		},
		twoWay: function($component1, $component2) {
			Adp.binding.oneWay($component1, $component2);
			Adp.binding.oneWay($component2, $component1);
		}
	},
	logger: {
		level: 0, /* OFF = 0, ERROR = 1, WARN = 2, INFO = 3, DEBUG = 4 */
		error: function(data) {
			Adp.logger.log(data, 1);
		},
		warn: function(data) {
			Adp.logger.log(data, 2);
		},
		info: function(data) {
			Adp.logger.log(data, 3);
		},
		debug: function(data) {
			Adp.logger.log(data, 4);
		},
		log: function(data, level) {
			if(Adp.logger.level >= level) {
				console.log(data);
			}
		}
	}
};