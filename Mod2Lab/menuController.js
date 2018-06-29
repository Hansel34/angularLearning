app.controller("menuController",[
	"$scope",
	function($scope){
		$scope.model = {title: 'Our Menu'};
		$scope.model.mainDish = {name:'',price:''}
		$scope.changeMainDish = function(item, item2){
			$scope.model.mainDish.name=item;
			$scope.model.mainDish.price=item2;
		}
	}
	]);