
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
            'imageURL':'images/hotels/1.1.jpg',
            'filter-class':'jubileehills bars',
            'title':'Dominos',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },{
            'imageURL':'images/saloon/manea.jpg',
            'filter-class':'lakdikapul',
            'title':"Mane'a",
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
            'imageURL':'images/hotels/2.2.jpg',
            'filter-class':'banjarahills gachibowli bars',
            'title':'Khan Saab ',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/3.3.jpg',
            'filter-class':'banjarahills bars',
            'title':'Sahib Sindh Sultan',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },{
            'imageURL':'images/saloon/Naturals.jpg',
            'filter-class':'jubileehills saloon',
            'title':'Naturals',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/saloon/Page3.jpg',
            'filter-class':'saloon',
            'title':'Page3',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        }
    ];



    
 $scope.categoryList = [
        {
            name:'Food',
            filterClass:'food'
        },
        {
            name:'Saloon',
            filterClass:'saloon'
        },
        {
            name:'Spa',
            filterClass:'spa'
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
