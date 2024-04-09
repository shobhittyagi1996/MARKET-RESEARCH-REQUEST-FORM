sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.marketresearch.controller.View1", {
            onInit: function () {

                let Dropdown = [
                    {
                        "text": "licensing"
                    },
                    {
                        "text": "minimal experience"
                    },

                    {
                        "text": "geography"
                    }

                ];
                let aDropdown = [
                    {
                        "text": "JOC"
                    },
                    {
                        "text": "JPC"
                    },

                    {
                        "text": "Operator"
                    }

                ];
                let bDropdown = [
                    {
                        "text": "Low"
                    },
                    {
                        "text": "Medium"
                    },

                    {
                        "text": "High"
                    }

                ];
                let amodel = new JSONModel(Dropdown);
            this.getView().setModel(amodel, "aModel");
            let bmodel = new JSONModel(aDropdown);
            this.getView().setModel(bmodel, "lModel");
            let cmodel = new JSONModel(bDropdown);
            this.getView().setModel(cmodel, "cModel");

            }
        });
    });
