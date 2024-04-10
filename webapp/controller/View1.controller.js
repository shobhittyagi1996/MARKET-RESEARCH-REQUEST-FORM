sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
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
                let data = [
                    {
                        "supplierid": "	SUP1001",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",
                    },
                    {
                        "supplierid": "	SUP1002",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",

                    },
                    {
                        "supplierid": "	SUP1003",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",

                    },
                    {
                        "supplierid": "	SUP1004",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",
                    },
                    {
                        "supplierid": "	SUP1005",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",

                    }, {
                        "supplierid": "	SUP1006",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",

                    },
                    {
                        "supplierid": "	SUP1007",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",


                    },
                    {
                        "supplierid": "	SUP1008",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",

                    },
                    {
                        "supplierid": "	SUP1009",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",

                    },
                    {
                        "supplierid": "	SUP1010",
                        "suppliername": "Global Enterprises Inc.",
                        "supplieraddress": "Saudi Arabia",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",

                    },
                ];
                let cdata = [
                    {
                        "contractid": "	CON1001",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "10-04-2024",
                    },
                    {
                        "contractid": "	CON1004",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "04-06-2024",

                    },
                    {
                        "contractid": "	CON1003",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "09-06-2024",


                    },
                    {
                        "contractid": "	CON1006",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "12-06-2024",

                    },
                    {
                        "contractid": "	CON1002",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "12-06-2024",

                    }, {
                        "contractid": "	CON1008",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "10-05-2024",


                    },
                    {
                        "contractid": "	CON1009",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "12-06-2025",



                    },
                    {
                        "contractid": "	CON1001",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "12-09-2024",


                    },
                    {
                        "contractid": "	CON1005",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "11-07-2024",


                    },
                    {
                        "contractid": "	CON1010",
                        "contracttitle": "Global Enterprises Inc.",
                        "contractexpiredate": "20-10-2024",


                    },
                ];
                let emodel = new JSONModel(cdata);
                this.getView().setModel(emodel, "lclModel");

                let dmodel = new JSONModel(data);
                this.getView().setModel(dmodel, "alModel");

                let amodel = new JSONModel(Dropdown);
                this.getView().setModel(amodel, "aModel");
                let bmodel = new JSONModel(aDropdown);
                this.getView().setModel(bmodel, "lModel");
                let cmodel = new JSONModel(bDropdown);
                this.getView().setModel(cmodel, "cModel");

            },
            onAddList: function () {
                if (!this._ListDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.marketresearch.view.fragment.AddList",
                        controller: this
                    }).then(oDialog => {
                        this._ListDialog = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this._ListDialog.open()
                }
            },
            onCancelList: function () {
                this._ListDialog.close();
            },
            onContract: function () {
                if (!this._ContractDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.marketresearch.view.fragment.AddContract",
                        controller: this
                    }).then(oDialog => {
                        this._ContractDialog = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this._ContractDialog.open()
                }
            },
            onCancel: function () {
                this._ContractDialog.close();
            },
            
            onAddContract: function () {
                debugger
                var oDialogTable = this.byId("dialogtable1");
                var aSelectedItems = oDialogTable.getSelectedItems();
            
                // Check if any item is selected
                if (aSelectedItems.length > 0) {
                    // Array to store selected data objects
                    var aSelectedData = [];
            
                    // Iterate over each selected item
                    aSelectedItems.forEach(function(oSelectedItem) {
                        // Access the binding context of the selected item
                        var oBindingContext = oSelectedItem.getBindingContext("lclModel");
                        // Get the data object from the binding context
                        var oSelectedData = oBindingContext.getObject();
                        // Push the selected data object to the array
                        aSelectedData.push(oSelectedData);
                    });
            
                    // Get the table control
                    var oTable = this.byId("Table2");
            
                    // Create a JSON model and set it to the table
                    var oTableModel = new sap.ui.model.json.JSONModel();
                    oTableModel.setData(aSelectedData);
                    oTable.setModel(oTableModel, "oTableModel");
            
                } else {
                    console.warn("No item selected.");
                }
            },
            onList: function () {
                debugger
                var oDialogTable = this.byId("dialogtable");
                var aSelectedItems = oDialogTable.getSelectedItems();
            
                // Check if any item is selected
                if (aSelectedItems.length > 0) {
                    // Array to store selected data objects
                    var aSelectedData = [];
            
                    // Iterate over each selected item
                    aSelectedItems.forEach(function(oSelectedItem) {
                        // Access the binding context of the selected item
                        var oBindingContext = oSelectedItem.getBindingContext("alModel");
                        // Get the data object from the binding context
                        var oSelectedData = oBindingContext.getObject();
                        // Push the selected data object to the array
                        aSelectedData.push(oSelectedData);
                    });
            
                    // Get the table control
                    var oTable = this.byId("Table1");
            
                    // Create a JSON model and set it to the table
                    var oTableModel = new sap.ui.model.json.JSONModel();
                    oTableModel.setData(aSelectedData);
                    oTable.setModel(oTableModel, "myModel");

                    var oDialog = this.byId("_IDGenDialog2");
                if (oDialog) {
                    oDialog.close();
                }
            
                } else {
                    console.warn("No item selected.");
                }
            },
            
            
            

        });
    });
