
sap.ui.core.UIComponent.extend("smax.batch26.Component", {	
	metadata : {
		rootView : "smax.batch26.view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",				
			},
			routes : [
				{
					pattern : "",
					name : "n1",
					viewName : "smax.batch26.view.Page2",
					viewType : "XML",
					controlAggregation : "pages",
					controlId : "idApp"
				}
			]
		}
		
	},	
	init : function(){
		
		// initialize with parent properties
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
	}
	
});