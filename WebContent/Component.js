
sap.ui.core.UIComponent.extend("smax.batch26.Component", {	
	metadata : {
		manifest : "json"		
	},	
	init : function(){		
		// initialize with parent properties
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
		
	}
	
});