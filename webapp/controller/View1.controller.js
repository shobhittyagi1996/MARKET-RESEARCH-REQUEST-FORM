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
                        "suppliername": "Alade Ifeanyichukwu Akerele",
                        "supplieraddress": "34 Leonard Street",
                        "supplierdeals": "Electrical and Electronics Drafter",
                        "suppliercontact": "+0941 1207559",
                    },
                    {
                        "supplierid": "	SUP1002",
                        "suppliername": "Luciana Esposito",
                        "supplieraddress": "Piazza Tolomeo 476 Appartamento 82",
                        "supplierdeals": "eos",
                        "suppliercontact": "+39 339 944 309",

                    },
                    {
                        "supplierid": "	SUP1003",
                        "suppliername": "Lesly Wehner",
                        "supplieraddress": "849 Schoen Mill",
                        "supplierdeals": "Educational Counselor",
                        "suppliercontact": "+1 (410) 259-9051",

                    },
                    {
                        "supplierid": "	SUP1004",
                        "suppliername": "David Ward",
                        "supplieraddress": "14 ممر أمين جواهرجي",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+(248) 930-3993",
                    },
                    {
                        "supplierid": "	SUP1005",
                        "suppliername": "Sr. Thiago Reséndez",
                        "supplieraddress": "Urb. Daniela Arreola # 92436 Hab. 424",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+51 914547843",

                    }, {
                        "supplierid": "	SUP1006",
                        "suppliername": "Berenice Shields",
                        "supplieraddress": "31849 Vivianne Via Apt. 629",
                        "supplierdeals": "Armored Assault Vehicle Crew Member",
                        "suppliercontact": "+1-312-391-2275",

                    },
                    {
                        "supplierid": "	SUP1007",
                        "suppliername": "Wilmer Bernhard",
                        "supplieraddress": "Kaspar-Fricke-Platz 46b",
                        "supplierdeals": "Full legal name of the company",
                        "suppliercontact": "+44 7700 900077",


                    },
                    {
                        "supplierid": "	SUP1008",
                        "suppliername": "Mr. Willie Mogale",
                        "supplieraddress": "Jónás part 20.",
                        "supplierdeals": "Rotary Drill",
                        "suppliercontact": "013 486 0835",

                    },
                    {
                        "supplierid": "	SUP1009",
                        "suppliername": "GNti. Hilppa Jurvanen",
                        "supplieraddress": "Valjakkahaka 293",
                        "supplierdeals": "aut",
                        "suppliercontact": "+358 19 6493801",

                    },
                    {
                        "supplierid": "	SUP1010",
                        "suppliername": "Shemar Sanford",
                        "supplieraddress": "890 Colten Heights",
                        "supplierdeals": "Benefits Specialist",
                        "suppliercontact": "+1-203-481-3220",

                    },
                ];
                let cdata = [
                    {
                        "contractid": "	CON1001",
                        "contracttitle": "Supply Agreement with ABC Inc.",
                        "contractexpiredate": "10-04-2024",
                    },
                    {
                        "contractid": "	CON1004",
                        "contracttitle": "Distribution Contract with XYZ Corp.",
                        "contractexpiredate": "04-06-2024",

                    },
                    {
                        "contractid": "	CON1003",
                        "contracttitle": "Service Agreement with LMN Enterprises",
                        "contractexpiredate": "09-06-2024",


                    },
                    {
                        "contractid": "	CON1006",
                        "contracttitle": "Purchase Agreement with PQR Ltd.",
                        "contractexpiredate": "12-06-2024",

                    },
                    {
                        "contractid": "	CON1002",
                        "contracttitle": "Consulting Agreement with EFG Consulting Services",
                        "contractexpiredate": "12-06-2024",

                    }, {
                        "contractid": "	CON1008",
                        "contracttitle": "Lease Contract for RST Warehouse.",
                        "contractexpiredate": "10-05-2024",


                    },
                    {
                        "contractid": "	CON1009",
                        "contracttitle": "Software License Agreement with XYZ Software Inc.",
                        "contractexpiredate": "12-06-2025",



                    },
                    {
                        "contractid": "	CON1001",
                        "contracttitle": "Maintenance Contract for ABC Machinery",
                        "contractexpiredate": "12-09-2024",


                    },
                    {
                        "contractid": "	CON1005",
                        "contracttitle": "Lease Agreement for PQR Office Space",
                        "contractexpiredate": "11-07-2024",


                    },
                    {
                        "contractid": "	CON1010",
                        "contracttitle": "Advertising Contract with LMN Marketing Agency",
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
                    this._ContractDialog.close();
            
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
               
                    this._ListDialog.close();
                    oDialog.refresh(); 
                
            
                } else {
                    console.warn("No item selected.");
                }
            },
            
            
            

        });
    });
