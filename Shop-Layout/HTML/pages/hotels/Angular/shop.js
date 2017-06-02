angular.module('shopApp', []).controller('shopController', function($scope){


    var locationList = [
        {
            'filter-class': 'jubileehills',
            'name': 'Jubilee hills'
        },
        {
            'filter-class': 'banjarahills',
            'name': 'Banjara Hills'
        },{
            'filter-class':'madhapur',
            'name':'Madhapur'
        },
        {
            'filter-class': 'kukatpally',
            'name': 'Kukatpally'
        },{
            'filter-class': 'lakdikapul',
            'name': 'Lakdikapul'
        },
        
        {
            'filter-class': 'gachibowli',
            'name': 'Gachibowli'
        },
        {
            'filter-class': 'khairathabad',
            'name': 'Khairathabad'
        },
        {
            'filter-class': 'abids',
            'name': 'Abids'
        }
    ];

    $scope.locationList = locationList;

      $scope.getArray = function(value){
        var tempArray = [];
        while(value>0){
            if(value==0.5){
                tempArray.push(value);
            }else{
                tempArray.push(1);
            }
            value = value - 1;
        }
        while(tempArray.length<5){
            tempArray.push(0);
        }
        return tempArray;
    }

        $scope.shopItems = [
        {
            'imageURL':'images/shopimages/brisah.jpg',
            'filter-class':'jubileehills',
            'title':'Brisah',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/chennaishoppingmall.jpg',
            'filter-class':'banjarahills gachibowli',
            'title':'Chennai Shopping Mall',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/kalanjali.jpg',
            'filter-class':'banjarahills',
            'title':'Kalanjali',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/lifestyle.jpg',
            'filter-class':'madhapur',
            'title':"Life Style",
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/neerus.jpg',
            'filter-class':'sf-dress',
            'title':'Neerus',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/radhakrishnasilks.jpg',
            'filter-class':'lakdikapul',
            'title':'Radha Krishan Silks',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/shoppersstop.jpg',
            'filter-class':'abids',
            'title':'Shoppers Stop',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/taruni.jpg',
            'filter-class':'jubileehills',
            'title':'Taruni',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/tommyhilfigher.jpg',
            'filter-class':'sf-dress',
            'title':'Tommy Hilfigher',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/shopimages/westside.jpg',
            'filter-class':'madhapur',
            'title':'Westside',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        }
    ]

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