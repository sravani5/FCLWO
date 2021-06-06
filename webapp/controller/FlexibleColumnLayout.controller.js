sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("fclFlexibleColumnLayout.controller.FlexibleColumnLayout", {
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			// this.oRouter.attachRouteMatched(this.onRouteMatched, this);
			this.oRouter.attachBeforeRouteMatched(this.onBeforeRouteMatched, this);
		},

		onBeforeRouteMatched: function(oEvnt) {

			var oModel = this.getOwnerComponent().getModel(),
				sLayout = oEvnt.getParameters().arguments.layout;

			if (!sLayout) {
				// var oNextUIState = this.getOwnerComponent().gethelper().getNextUIState(0);
				sLayout = "OneColumn";
			}

			if (sLayout) {
				oModel.setProperty("/layout", sLayout);
			}
		}
	});
});