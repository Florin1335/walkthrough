sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("sapui5.controller.View1", {
            onButtonPress: function () {
                var oBundle = this.getView().getModel('i18n').getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty('/recipient/name');
                var sMessage = oBundle.getText('helloMessage', [sRecipient]);
                MessageToast.show(sMessage);
            }
		});
	});