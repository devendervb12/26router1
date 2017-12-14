
sap.ui.core.UIComponent.extend("smax.batch26.Component", {	
	metadata : {
		rootView : "smax.batch26.view.App",
		
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",
				controlId : "idApp",
				controlAggregation : "pages",
				viewType : "XML",
				viewPath : "smax.batch26.view"
			},
			routes : [
				{
					pattern : "", 
					name : "p1",
					viewName : "Page1"
				},
				{
					pattern : "pp2",
					name : "p2",
					viewName : "Page2"
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