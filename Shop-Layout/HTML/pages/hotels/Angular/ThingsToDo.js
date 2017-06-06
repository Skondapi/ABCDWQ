
angular.module('shopApp', []).controller('shopController', function ($scope) {

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
            'imageURL':'/images/thingstodo/aqua.jpg',
            'filter-class':'jubileehills bars',
            'title':'Aqua',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/cocktailslounge.jpg',
            'filter-class':'banjarahills gachibowli bars',
            'title':'Cocktails Lounge',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/deccantrails.jpg',
            'filter-class':'banjarahills bars',
            'title':'Deccan Trails',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/hrc.jpg',
            'filter-class':'madhapur bars',
            'title':"HRC",
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/images.jpg',
            'filter-class':'sf-dress bars',
            'title':'Carpedium',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/jalavihar.jpg',
            'filter-class':'jubileehills',
            'title':'Jala Vihar',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/necklaceroad.jpg',
            'filter-class':'jubileehills',
            'title':'Necklace Road',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/reagtton.jpg',
            'filter-class':'lakdikapul',
            'title':'Reagtton',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/rfc.jpg',
            'filter-class':'abids',
            'title':'Ramoji Film City',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/rfc2.jpg',
            'filter-class':'jubileehills',
            'title':'Ramoji Film City',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/rockclimbing.jpg',
            'filter-class':'sf-dress',
            'title':'Rock Climbing',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'/images/thingstodo/wonderla.jpg',
            'filter-class':'madhapur',
            'title':'Wonder La',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        }
        
    ];



    
 $scope.categoryList = [
        {
            name:'Fun & Leisure',
            filterClass:'funleisure'
        },
        {
            name:'Kids Activities',
            filterClass:'kidsactivities'
        },
        {
            name:'Sports & Outdoors',
            filterClass:'sportoutdoors'
        },
        {
            name:'Sightseeing & Tours',
            filterClass:'sightseeingtours'
        },
        {
            name:'Tickets and Events',
            filterClass:'ticketsevents'
        },
        {
            name:'Night Life',
            filterClass:'nightlife'
        }
    ];


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
});
