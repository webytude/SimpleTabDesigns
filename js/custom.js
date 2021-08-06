jQuery(document).ready(function () {
	jQuery('.tabsBlk .tabs a').click(function(e) {
		e.preventDefault();
		var $this = jQuery(this).closest('li');
		if ( !$this.hasClass("is-active") ) {
			$this.siblings().removeClass("is-active");
			// $this.closest('.tabsBlk').find(".tab-panel").removeClass("is-active");
			$this.closest('.tabsBlk').find(".tab-panel").slideUp().removeClass("is-active");

			$this.addClass("is-active");			
			// $this.closest('.tabsBlk').find("."+this.hash.substr(1)).addClass("is-active");
			$this.closest('.tabsBlk').find("."+this.hash.substr(1)).slideDown().addClass("is-active");
			
		}
	});
});