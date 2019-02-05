//для поддержки свойства firstElementChild
(function () {
	if (document.documentElement.firstElementChild === undefined) {
		
		Object.defineProperty(Element.prototype, 'firstElementChild', {
			get: function() {
				var el = this.firstChild;
				do {
					if (el.nodeType === 1) {
						return el;
					}
					el = el.nextSibling;
				} while (el);
				
				return null;
			}
		});
	}
})();

//для IE8 где нет поддержки свойства textContent
(function() {
	
	if (document.documentElement.textContent === undefined) {
		
		Object.defineProperty(HTMLElement.prototype, "textContent", {
			get: function() {
				return this.innerText;
			},
			set: function(value) {
				this.innerText = value;
			}
		});
	}
	
})();