define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "27be8d11-4df9-432d-98f8-3f90521a0656",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "database-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrNumber_mdx5rnh",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_mdx5rnh",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_t5yrl5v",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_t5yrl5v"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_z1ozfk0",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_z1ozfk0"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_d3j4heh",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_d3j4heh",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_kq6fndr",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_kq6fndr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_94et8gg",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_94et8gg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_yldvu68",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_yldvu68_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_tsu3k3p",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_tsu3k3p",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_fjisefo",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_fjisefo",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_h16nqwz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_h16nqwz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_3tuo4vm",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_3tuo4vm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_rsgo8sx",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_rsgo8sx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "PromotionDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrPromotionDate_g9wi09e",
					"labelPosition": "auto",
					"control": "$PDS_UsrPromotionDate_g9wi09e",
					"pickerType": "date"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Percent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(Percent_label)#",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_8bgdyzp",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_rkl4g3c",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_rkl4g3c_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_umnjxq4",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_rkl4g3c",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tsa9ei3",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_umnjxq4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_zubzufh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_zubzufh_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_tsa9ei3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_phj9p2a",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_phj9p2a_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_bmejpg8DS"
						}
					}
				},
				"parentName": "FlexContainer_tsa9ei3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_j41t4of",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_j41t4of_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_tsa9ei3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_566g4e6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_566g4e6_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_j41t4of",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_a6paaef",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_a6paaef_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_j41t4of",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_b0jrccs",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_b0jrccs_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_b0jrccs_GridDetail_bmejpg8",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_bmejpg8"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_b0jrccs_SearchValue",
							"GridDetailSearchFilter_b0jrccs_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_tsa9ei3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_8s4ee5u",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_rkl4g3c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_bmejpg8",
					"activeRow": "$GridDetail_bmejpg8_ActiveRow",
					"selectionState": "$GridDetail_bmejpg8_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_bmejpg8_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_bmejpg8DS_Id",
					"columns": [
						{
							"id": "72e41b2f-4f06-ffd6-c347-1d405dba4c9c",
							"code": "GridDetail_bmejpg8DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_bmejpg8DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 111
						},
						{
							"id": "207751e9-e55d-8cbb-6739-7121268cfb86",
							"code": "GridDetail_bmejpg8DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_bmejpg8DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 130
						},
						{
							"id": "bf54aae9-ce82-8c26-104f-c105b2239269",
							"code": "GridDetail_bmejpg8DS_UsrManager",
							"caption": "#ResourceString(GridDetail_bmejpg8DS_UsrManager)#",
							"dataValueType": 10,
							"width": 92
						},
						{
							"id": "4350049e-212b-2bfd-5a99-9d0e863a640b",
							"code": "GridDetail_bmejpg8DS_UsrComment",
							"caption": "#ResourceString(GridDetail_bmejpg8DS_UsrComment)#",
							"dataValueType": 28,
							"width": 93
						},
						{
							"id": "a303b746-7a8c-6358-0e8d-c420067383af",
							"code": "GridDetail_bmejpg8DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_bmejpg8DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 114
						},
						{
							"id": "69ac51f5-42f5-7ae7-34d2-8a4189cd6517",
							"code": "GridDetail_bmejpg8DS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_bmejpg8DS_UsrParentRealty)#",
							"dataValueType": 10,
							"width": 126
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_8s4ee5u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_bmejpg8_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_bmejpg8DS",
							"filters": "$GridDetail_bmejpg8 | crt.ToCollectionFilters : 'GridDetail_bmejpg8' : $GridDetail_bmejpg8_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_bmejpg8_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_bmejpg8_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_bmejpg8DS",
							"filters": "$GridDetail_bmejpg8 | crt.ToCollectionFilters : 'GridDetail_bmejpg8' : $GridDetail_bmejpg8_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_bmejpg8_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_bmejpg8_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_bmejpg8_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetail",
							"filters": "$GridDetail_bmejpg8 | crt.ToCollectionFilters : 'GridDetail_bmejpg8' : $GridDetail_bmejpg8_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_bmejpg8_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_bmejpg8_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_bmejpg8DS",
							"filters": "$GridDetail_bmejpg8 | crt.ToCollectionFilters : 'GridDetail_bmejpg8' : $GridDetail_bmejpg8_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_bmejpg8_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_t5yrl5v": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.MinValueValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_z1ozfk0": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.MinValueValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_kq6fndr": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_94et8gg": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_tsu3k3p": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_fjisefo": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_mdx5rnh": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_3tuo4vm": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_rsgo8sx": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_d3j4heh": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_8bgdyzp": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_8bgdyzp"
						}
					},
					"PDS_UsrPromotionDate_g9wi09e": {
						"modelConfig": {
							"path": "PDS.UsrPromotionDate"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.FutureDateValidator",
								"params": {
									"message": "#ResourceString(FutureDateWarning)#"
								}
							}
						}
					},
					"GridDetail_bmejpg8": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_bmejpg8DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_b0jrccs_GridDetail_bmejpg8",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_bmejpg8DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_bmejpg8DS.UsrVisitDateTime"
									}
								},
								"GridDetail_bmejpg8DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_bmejpg8DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_bmejpg8DS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_bmejpg8DS.UsrManager"
									}
								},
								"GridDetail_bmejpg8DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_bmejpg8DS.UsrComment"
									}
								},
								"GridDetail_bmejpg8DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_bmejpg8DS.CreatedOn"
									}
								},
								"GridDetail_bmejpg8DS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_bmejpg8DS.UsrParentRealty"
									}
								},
								"GridDetail_bmejpg8DS_Id": {
									"modelConfig": {
										"path": "GridDetail_bmejpg8DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_bmejpg8DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_8bgdyzp": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_bmejpg8DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
	
					console.log("Button works...");
	
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_t5yrl5v;
	
					console.log("Price = " + price);
					request.$context.PDS_UsrArea_z1ozfk0 = price * 0.2;
	
					/* Call the next handler if it exists and return its result. */
	
					return next?.handle(request);
				}
			},
			{
				
				request: "crt.HandleViewModelAttributeChangeRequest",
				
				/* The custom implementation of the system query handler. */
				
				handler: async (request, next) => {
      					
					if (request.attributeName === 'PDS_UsrPrice_t5yrl5v' || 	// if price changed
			
						request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent_8bgdyzp' ) { 	// or percent changed
	
						// debugger;
						var price = await request.$context.PDS_UsrPrice_t5yrl5v;
						
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_8bgdyzp;
						
						var commission = price * percent / 100;
						
						request.$context.PDS_UsrCommission_d3j4heh = commission;
					
					}
					
					/* Call the next handler if it exists and return its result. */
					
					return next?.handle(request);
				
				}
			
			},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			
			Format the validator type in PascalCase. */
			
			"usr.FutureDateValidator": {
				
				validator: function (config) {
					
					return function (control) {
						
						let value = control.value;
						
						let today = new Date();					
						let valueIsCorrect = value >= today;
						
						var result;
						
						if (valueIsCorrect) {
							
							result = null;
						
						} else {
							
							result = {
								
								"usr.FutureDateValidator": { 
									
									message: config.message
								
								}
							
							};
						
						}
						
						return result;
					
					};
				
				},
				
				params: [
					
					{
						
						name: "message"
					
					}
				
				],
				
				async: false
			
			},
			"usr.MinValueValidator": {
				
				validator: function (config) {
					
					return function (control) {
						
						let value = control.value;
						
						let minValue = config.minValue;
						
						let valueIsCorrect = value >= minValue;
						
						var result;
						
						if (valueIsCorrect) {
							
							result = null;
						
						} else {
							
							result = {
								
								"usr.MinValueValidator": { 
									
									message: config.message
								
								}
							
							};
						
						}
						
						return result;
					
					};
				
				},
				
				params: [
					
					{
						
						name: "minValue"
					
					},
					
					{
						
						name: "message"
					
					}
				
				],
				
				async: false
			
			}
		}/**SCHEMA_VALIDATORS*/
	};
});