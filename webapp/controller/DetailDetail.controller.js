sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("fclFlexibleColumnLayout.controller.DetailDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf fclFlexibleColumnLayout.view.DetailDetail
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oModel = this.getOwnerComponent().getModel();
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf fclFlexibleColumnLayout.view.DetailDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf fclFlexibleColumnLayout.view.DetailDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf fclFlexibleColumnLayout.view.DetailDetail
		 */
		//	onExit: function() {
		//
		//	}
		handleLinkPress: function(oEvnt) {
			// var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(3);
			this.oRouter.navTo("lastpage", {layout:"EndColumnFullScreen"});
		}
	});

});