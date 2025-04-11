sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("project1.controller.App", {
      onInit: function () {        
        //var oModel = new JSONModel("webapp/model/items.json");
        //this.getView().setModel(oModel);   
        debugger;
        var dataModel = this.getOwnerComponent().getModel("tableData");
			  this.getView().setModel(dataModel, "DataModel");

      },

      onSelectionChange: function (oEvent) {
        var bSelected = oEvent.getParameter("selected");
        MessageToast.show((bSelected ? "Selected" : "Unselected") + " item with ID " + oEvent.getParameter("listItem").getId());
      },
  
      onDelete: function (oEvent) {
        MessageToast.show("Delete item with ID " + oEvent.getParameter("listItem").getId());
      },
  
      onDetailPress: function (oEvent) {        
        MessageToast.show("Request details for item with ID " + oEvent.getSource().getId());
      },
  
      onPress: function (oEvent) {        
        MessageToast.show("Pressed item with ID " + oEvent.getSource().getId());    
      }  

  });
});