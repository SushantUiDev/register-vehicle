(function(){
	
	function lookupServiceFn(){
		var countries=[{name:"India" , code:"IND"},
					   {name:"Australia" , code:"AUS" }];
		
		this.getCountries=function(){
			return countries;
		},
		
		this.defaultCountry = function () {
                var country ="";
                angular.forEach(countries, function (item) {
                    if (item.code == "IN") {
                        country= item;
                    }
                });
                return country;
            };
	}
	angular.module("common")
	.service("lookupService",[lookupServiceFn])
})();
