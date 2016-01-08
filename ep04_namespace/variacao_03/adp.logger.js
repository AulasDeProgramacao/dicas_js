if(Adp.module.notExists('logger')) {

	Adp.logger = {
		level: 0, /* OFF = 0, ERROR = 1, WARN = 2, INFO = 3, DEBUG = 4 */
		error: function(data) {
			Adp.logger.log("[ERROR] ", data, 1);
		},
		warn: function(data) {
			Adp.logger.log("[WARN] ", data, 2);
		},
		info: function(data) {
			Adp.logger.log("[INFO] ", data, 3);
		},
		debug: function(data) {
			Adp.logger.log("[DEBUG] ", data, 4);
		},
		log: function(label, data, level) {
			if(Adp.logger.level >= level) {
				console.log(label + data);
			}
		}
	};
}