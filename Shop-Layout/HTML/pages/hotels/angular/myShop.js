angular.module('shopApp', []).controller('shopController', function ($scope) {

    var locationList = [
        {
            'filter-class': 'hyderabad',
            'name': 'hyderabad'
        },
        {
            'filter-class': 'banjarahills',
            'name': 'Banjara Hills'
        },
        {
            'filter-class': 'kukatpally',
            'name': 'Kukatpally'
        },
        {
            'filter-class': 'gachibowli',
            'name': 'Gachibowli'
        },
        {
            'filter-class': 'khairathabad',
            'name': 'Khairathabad'
        }
    ];

    $scope.locationList = locationList;

}).filter('locationFilter', function(){
    return function(list,input){
        var tempArray = [];
        if(input==undefined){
            return list;
        }
        angular.forEach(list, function(item){
            if(item.name.toLowerCase().indexOf(input.toLowerCase()) === 0){
                tempArray.push(item);
            }
        });
        return tempArray.length>0?tempArray:list;
    }
})