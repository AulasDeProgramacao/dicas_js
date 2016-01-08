Adp.ajax = {
	request: function(url, target) {
		$.ajax({
			method: 'GET',
			url: url,
			success: function(data) {
				$(target).html(data);
			}
		});
	}
};