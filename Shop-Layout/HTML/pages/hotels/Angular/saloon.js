angular.module('saloonApp', []).controller('saloonController', function ($scope) {

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
            'imageURL':'images/saloon/Aakara.jpg',
            'filter-class':'jubileehills',
            'title':'Aakara',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/bubbles.jpg',
            'filter-class':'banjarahills gachibowli',
            'title':'Bubbles',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/envi.jpg',
            'filter-class':'banjarahills',
            'title':'Envi',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/jawedhabib.jpg',
            'filter-class':'madhapur',
            'title':"Jawed Habib",
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/Juice.jpg',
            'filter-class':'sf-dress',
            'title':'Juice',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/Lakme.jpg',
            'filter-class':'jubileehills',
            'title':'Lakme',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/Lucas.jpg',
            'filter-class':'jubileehills',
            'title':'Lucas',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/manea.jpg',
            'filter-class':'lakdikapul',
            'title':'Kamat',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/Manjushahs.jpg',
            'filter-class':'abids',
            'title':"Manju Shah's",
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/Naturals.jpg',
            'filter-class':'jubileehills',
            'title':'Naturals',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/Page3.jpg',
            'filter-class':'sf-dress',
            'title':'Page3',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/Parisdesalon.jpg',
            'filter-class':'madhapur',
            'title':'Paris De Salon',
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
});