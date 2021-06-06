sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("fclFlexibleColumnLayout.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf fclFlexibleColumnLayout.view.Detail
		 */
		onInit: function() {

			this.oRouter = this.getOwnerComponent().getRouter();
			this.oModel = this.getOwnerComponent().getModel();
			this.oRouter.getRoute("master").attachPatternMatched(this._onProductMatched, this);
			// this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
			// // this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onProductMatched, this);
			var data={
				isBtnVisible:"ClickMe"
			};
			var oModel = new sap.ui.model.json.JSONModel(data);
			this.getView().setModel(oModel);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf fclFlexibleColumnLayout.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf fclFlexibleColumnLayout.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf fclFlexibleColumnLayout.view.Detail
		 */
		//	onExit: function() {
		//
		//	}
		_onProductMatched: function(oEvnt) {
			this._product = oEvnt.getParameter("arguments").product || this._product || "0";
			this.getView().bindElement({
				path: "/ProductCollection/" + this._product,
				model: "oProductModel"
			});
		},
		onListItemDetailPress: function(oEvent) {
			// var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(2),
			// var supplierPath = oEvent.getSource().getBindingContextPath(),
			// supplier = supplierPath.split("/").slice(-1).pop();

			this.oRouter.navTo("detailDetail", {
				layout: "ThreeColumnsMidExpanded"
					// supplier: supplier
			});

		}
	});

});