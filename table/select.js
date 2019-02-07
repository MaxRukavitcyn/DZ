"use strict";
(function () {
	function _selectType(tag) {
		this.el = document.createElement(tag);
		this.to = function (el) {
			if (this.el.parentNode == null) {
				if (el instanceof _selectType) {
					el.el.append(this.el)
				} else {
					el.append(this.el)
				}
			}
			return this;
		};
		this.attr = function (args1, args2) {
			if (args2 == null || args2 == undefined) {
				return this.el.getAttribute(args1)
			} else {
				this.el.setAttribute(args1, args2);
				return this;
			}
		}
		this.setText = function (text) {
			this.el.innerText = text || '';
			return this;
		}
		this.do = function (el) {
			this.el.append(el.el);
			return this;
		}
		this.removeChild = function(){
			if(this.el.children){
				while(this.el.children.length)
					this.el.children.item(this.el.children.length-1).remove();
			}
		}
		
	}
	
	window._s = function (tag) {
		return new _selectType(tag);
	}
})();