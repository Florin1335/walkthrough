sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "sapui5",
        settings: {
            id: "walkthrough"
        },
        async: true
    }).placeAt("container")
})