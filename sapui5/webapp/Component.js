sap.ui.define([
	"sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("sapui5.Component", {

		metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "sapui5.view.View1",
                "type": "XML",
                "id": "View1"
            }
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            var i18nModel = new ResourceModel({
                bundleName: "sapui5.i18n.i18n"
            });
            this.setModel(i18nModel, 'i18n');
		}
	});
});
