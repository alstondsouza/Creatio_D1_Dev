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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,7,242,31,6,209,131,4,102,73,174,77,27,168,141,91,2,161,45,177,146,75,233,97,189,26,43,91,246,67,236,172,156,186,165,255,189,179,90,185,118,228,20,50,8,180,59,251,230,205,123,195,128,147,22,169,147,10,161,198,16,36,249,77,20,11,239,54,186,237,131,140,218,187,243,179,223,231,103,192,209,147,118,45,172,118,20,209,94,29,167,142,11,173,245,238,191,143,1,197,210,69,29,53,210,107,48,98,185,69,23,247,208,111,67,122,55,228,110,53,139,112,24,202,149,122,68,43,63,179,7,120,15,197,61,133,59,148,38,238,138,234,123,46,234,250,181,209,10,148,145,68,144,223,94,160,129,183,48,151,132,47,188,100,150,113,0,71,132,126,203,146,117,131,176,245,186,129,47,110,37,183,108,164,244,235,31,168,34,16,186,6,195,12,50,225,28,55,236,106,160,253,16,90,2,172,14,116,71,204,41,214,172,66,252,99,219,211,96,117,245,28,150,121,33,12,126,216,120,153,19,85,46,152,128,27,84,218,74,3,93,208,42,77,41,87,137,79,24,235,93,135,205,194,155,222,186,7,105,122,124,55,66,175,203,52,201,175,9,95,76,91,235,13,148,153,233,26,46,47,246,81,61,7,77,92,165,64,113,67,11,233,20,26,108,88,68,12,61,50,243,41,142,98,72,27,193,59,73,178,197,26,109,103,100,76,178,29,62,193,173,87,210,232,95,114,109,112,53,224,202,209,204,61,97,224,165,117,60,124,222,88,113,135,228,251,160,24,228,3,179,204,78,219,164,56,172,75,222,179,98,6,197,73,7,18,195,104,110,168,246,126,174,219,124,43,42,81,251,81,65,245,10,27,44,63,39,196,71,31,172,140,229,196,30,55,190,20,23,243,55,39,211,78,17,31,131,127,26,236,47,127,42,236,146,193,125,253,20,254,231,112,29,143,252,227,239,47,186,199,62,238,229,3,0,0 };
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

