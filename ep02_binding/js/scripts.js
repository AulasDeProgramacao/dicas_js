var DicasJS = {
	count: 0,
	setupActions: function() {
		$('[adp-action][adp-target]').click(function(e) {
			var action = $(this).attr('adp-action');
			var target = $(this).attr('adp-target');

			DicasJS.ajax.request(action, target);
		});
	},
	logActions: function() {
		$('[adp-action][adp-target]').click(function(e) {
			var action = $(this).attr('adp-action');
			console.log('Executando action ' + action + ' ' + DicasJS.count++);
		});
	},
	ajax: {
		request: function(url, target) {
			$.ajax({
				method: 'GET',
				url: url,
				success: function(data) {
					$(target).html(data);
				}
			});
		}
	},
} 