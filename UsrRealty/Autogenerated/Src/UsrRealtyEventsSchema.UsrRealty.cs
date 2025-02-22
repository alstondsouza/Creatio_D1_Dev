namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("50191810-4253-4c13-b419-92d85f9cbda0");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("514ad334-2c64-4011-bf89-4e7306335eb8");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,220,48,16,61,55,144,255,48,152,30,108,88,68,114,109,218,64,118,217,150,64,104,75,214,233,165,228,160,149,103,29,21,125,24,141,188,233,182,244,191,119,100,121,187,95,41,228,97,176,52,122,243,102,222,48,224,164,69,234,164,66,168,49,4,73,126,21,197,204,187,149,110,251,32,163,246,238,252,236,247,249,25,48,122,210,174,133,197,134,34,218,171,253,208,126,162,181,222,253,247,49,160,152,187,168,163,70,122,13,71,204,215,232,226,150,250,125,8,111,134,216,157,230,38,28,134,114,161,158,208,202,207,236,1,62,64,241,64,225,30,165,137,155,162,122,204,73,93,191,52,90,129,50,146,8,242,219,11,50,240,14,166,146,240,133,151,172,50,14,96,79,208,175,185,101,221,32,172,189,110,224,139,91,200,53,27,41,253,242,7,170,8,132,174,193,48,129,44,56,197,21,187,26,100,111,66,75,128,213,78,110,79,57,97,201,93,136,127,106,91,25,172,174,14,105,89,23,194,224,135,141,151,57,80,229,132,35,114,131,74,91,105,160,11,90,165,41,229,44,241,9,99,189,233,176,153,121,211,91,247,77,154,30,223,143,212,235,50,77,242,107,226,23,199,165,245,10,202,172,116,13,151,23,91,84,135,164,35,87,9,40,110,105,38,157,66,131,13,55,17,67,143,172,124,202,163,24,210,70,240,78,146,108,177,70,219,25,25,83,219,14,159,225,206,43,105,244,47,185,52,184,24,120,229,104,230,129,48,240,210,58,30,62,111,172,184,71,242,125,80,76,242,129,85,38,167,101,18,118,235,146,247,172,152,64,113,82,129,196,48,154,91,170,189,159,234,54,223,138,74,212,126,236,160,122,133,13,110,63,7,196,71,31,172,140,229,145,61,46,124,41,46,166,111,79,166,157,16,159,130,127,30,236,207,127,42,236,146,193,109,126,162,191,97,28,38,253,217,93,199,35,255,248,251,11,157,192,227,183,235,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("f0bc1bf6-3655-92a7-e3b5-3bec4c9f135b"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("514ad334-2c64-4011-bf89-4e7306335eb8"),
				CreatedInSchemaUId = new Guid("50191810-4253-4c13-b419-92d85f9cbda0"),
				ModifiedInSchemaUId = new Guid("50191810-4253-4c13-b419-92d85f9cbda0")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("50191810-4253-4c13-b419-92d85f9cbda0"));
		}

		#endregion

	}

	#endregion

}

