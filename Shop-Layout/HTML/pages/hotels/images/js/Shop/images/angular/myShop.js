angular.module('shopApp', []).controller('shopController', function(){


    $scope.locationList = [
        {
            'filter-class':'hyderabad',
            'name':'hyderabad'
        },
        {
            'filter-class':'banjarahills',
            'name':'Banjara Hills'
        },
        {
            'filter-class':'kukatpally',
            'name':'Kukatpally'
        },
        {
            'filter-class':'gachibowli',
            'name':'Gachibowli'
        },
        {
            'filter-class':'khairathabad',
            'name':'Khairathabad'
        }
    ]

});