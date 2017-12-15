sap.ui.controller("smax.batch26.view.Page1", {

	
	gotoPage2 : function(){
		// goto page2
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.navTo("p2");
		
		
	}

});