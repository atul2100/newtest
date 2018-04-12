sap.ui.jsview("com.pgeRelay.view.RelayDashboard", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.RelayDashboard
	 */
	getControllerName: function() {
		return "com.pgeRelay.controller.RelayDashboard";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.RelayDashboard
	 */
	createContent: function(oController) {
			var oTable = new sap.ui.table.Table({
			selectionMode : sap.ui.table.SelectionMode.Single,
			selectionBehavior : sap.ui.table.SelectionBehavior.Row,
			visibleRowCount : 7,
			firstVisibleRow : 3,

			fixedColumnCount : 2
		});

		// define the Table columns and the binding values
		/*oTable.addColumn(new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "EQUIPMENT"
			}),
			width : "120px",
			template : new sap.ui.commons.TextView({
				text : "{EQUIPMENT}"
			})
		}));*/
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "EQUIPMENT",
				
			}),
			width : "150px",
		template : new sap.ui.commons.Link({
			press : function (e) {
				var id = e.oSource.getText();
				
				if (id != "NA") {
					var url = "http://sapdv8db1.comp.pge.com:1080/sap/bc/gui/sap/its/webgui?~transaction=*ie03  RM63E-EQUNR="+id+"; DYNP_OKCODE=/00";
					window.open(url);
				} else {
					sap.ui.commons.MessageBox.show("Equipment Number is not applicable. ", sap.ui.commons.MessageBox.Icon.INFORMATION, "Information");
				}

			}
		}).bindProperty("text", "MyJsonData>EQUIPMENT"),
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "DESCRIPTION"
			}),
			width : "250px",

			template : new sap.ui.commons.Label({
				text : "{MyJsonData>EQUIPMENT_DESCR}"
			})
		}));

		/*oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "RESPONSIBILITY"
			}),
			width : "140px",
			template : new sap.ui.commons.Label({
				text : "{RESPONSIBILITY}"
			})
		}));*/
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "FUNCTIONAL LOCATION"
			}),
			width : "150px",
			template : new sap.ui.commons.Link({
				press : function (e) {
					var id = e.oSource.getText();
					
					if (id != "NA") {
						var url = "http://sapdv8db1.comp.pge.com:1080/sap/bc/gui/sap/its/webgui?~transaction=*il02 IFLO-TPLNR="+id+"; DYNP_OKCODE=/00";
						window.open(url);
					} else {
						sap.ui.commons.MessageBox.show("Equipment Number is not applicable. ", sap.ui.commons.MessageBox.Icon.INFORMATION, "Information");
					}

				}
			}).bindProperty("text", "MyJsonData>FUNCTIONAL_LOC"),
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new  sap.ui.commons.Label({
				text : "MAIN WORK CENTER"
			}),
			width : "170px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>MAIN_WORK_CENTER}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "PLANT SECTION"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>PLANT_SECTION}"
			})
		}));
		/*oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "DEVICE_CODE"
			}),
			width : "120px",
			template : new sap.ui.commons.Label({
				text : "{DEVICE_CODE}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "DEVICE_ID"
			}),
			width : "200px",
			template : new sap.ui.commons.Label({
				text : "{DEVICE_ID}"
			})
		}));*/

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "FUNCTION DESCRIPTION"
			}),
			width : "200px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>FUNCTION}"
			})
		}));
		/*oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "MAKE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MAKE}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "TYPE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{TYPE}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "STYLE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{STYLE}"
			})
		}));
*/
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "2ND LAST TEST"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>2ND_LASTTEST_DT}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "LAST TEST"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>LAST_TESTED_DATE}"
			})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "NEXT DUE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>NEXT_DUE_DATE}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "REQUIRES_TESTING"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{REQUIRES_TESTING}"
			})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "PROTECTION_TYPE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>PROTECTION_TYPE}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "WECC_FUNCTION"
			}),
			width : "150px",
			
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>WECC_FUNCTION}"
			})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "DEVICE_FUNCTION"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>DEVICE_FUNCTION}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "MAINT_PLAN"
			}),
			width : "150px",
			template : new sap.ui.commons.Link({
				press : function (e) {
					var id = e.oSource.getText();
					
					if (id != "NA") {
						var url = "http://sapdv8db1.comp.pge.com:1080/sap/bc/gui/sap/its/webgui?~transaction=*ip02  RMIPM-WARPL="+id+"; DYNP_OKCODE=/00";
						window.open(url);
					} else {
						sap.ui.commons.MessageBox.show("Equipment Number is not applicable. ", sap.ui.commons.MessageBox.Icon.INFORMATION, "Information");
					}

				}
			}).bindProperty("text", "MyJsonData>MAINT_PLAN"),
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "SELECTED"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>SELECTED}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "OVERDUE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>OVERDUE}"
			})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "NOPLAN"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>NOPLAN}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "WECC"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>WECC}"
			})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "WECC_DUE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>WECC_DUE}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "PCT_DUE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>PCT_DUE}"
			})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "PCT_WECC_DUE"
			}),
			width : "150px",
			template : new sap.ui.commons.Label({
				text : "{MyJsonData>PCT_WECC_DUE}"
			})
		}));

	
		
		oTable.bindRows("MyJsonData>/");
		var panel = new sap.ui.commons.Panel( {
				width : "50%",
				height : "100px",
				showCollapseIcon : false,
				title : new sap.ui.commons.Title({
					text : "Relay Look Ahead"
				}),
				areaDesign : sap.ui.commons.enums.AreaDesign.Transparent
			});

		
		var riskChartContainer = new sap.ui.core.HTML("riskChartContainer",
	    {
	        content: "<div id='riskChart' style=\"width: 100% !important;height: 100% !important;position: fixed;top: 5%; overflow: hidden !important;\"></div>"
	       
	    });
		panel.addContent(riskChartContainer);
		
		var panel2 = new sap.ui.commons.Panel( {
			width : "50%",
			height : "100px",
			showCollapseIcon : false,
			title : new sap.ui.commons.Title({
				text : "Relay Status"
			}),
			areaDesign : sap.ui.commons.enums.AreaDesign.Transparent
		});

	
	var riskChartContainer1 = new sap.ui.core.HTML("riskChartContainer1",
    {
        content: "<div id='riskChart1' style=\"width: 100% !important;height: 100% !important;position: fixed;top: 5%; overflow: hidden !important;\"></div>"
       
    });
	panel2.addContent(riskChartContainer1);
	// var oModel = sap.ui.getCore().getModel(oModel);
	
	/*var objData = oController.getView().getModel(oModel).getData();*/

	
		
	//	panel2.addContent(x);
		
	var oPanel11 = new sap.ui.commons.Panel({

	});
	oPanel11.addContent(panel,panel2);	
	
		var oPanel1 = new sap.m.Panel({

		});
		oPanel1.addContent(oTable);
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [panel,panel2, oPanel1]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});