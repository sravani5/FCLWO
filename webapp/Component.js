sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"fclFlexibleColumnLayout/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("fclFlexibleColumnLayout.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {

			var oModel = new JSONModel();
			this.setModel(oModel);
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			this.getRouter().initialize();

			//set product json to the model 
			var oProductModel = new JSONModel(jQuery.sap.getModulePath("fclFlexibleColumnLayout.model", "/products.json"));
			this.setModel(oProductModel, "oProductModel");
		}
	});
});