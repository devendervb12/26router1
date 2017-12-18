sap.ui.controller("smax.batch26.view.Page1", {

	
	onItemSelection : function(oEvent){
	
		var oRouter = this.getOwnerComponent().getRouter();
		
		// get selected productID
		debugger;
		
		
		var prodId = oEvent.getSource().getTitle();
		
		oRouter.navTo("p2", {pid : prodId});
		
	}

});