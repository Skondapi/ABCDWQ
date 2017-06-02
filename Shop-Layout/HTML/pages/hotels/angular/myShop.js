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
            'filter-class':'jubileehills',
            'title':'Dominos',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/2.2.jpg',
            'filter-class':'banjarahills gachibowli',
            'title':'Khan Saab',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/3.3.jpg',
            'filter-class':'banjarahills',
            'title':'Sahib Sindh Sultan',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/4.4.1.jpg',
            'filter-class':'madhapur',
            'title':"Ohri's Nautanki Gali",
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/5.5.jpg',
            'filter-class':'sf-dress',
            'title':'Four Seasons',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/6.6.1.jpg',
            'filter-class':'jubileehills',
            'title':'Testa Rossa',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/6.6.jpg',
            'filter-class':'jubileehills',
            'title':'Vivaha Bhojanambu',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/7.7.jpg',
            'filter-class':'lakdikapul',
            'title':'Kamat',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/8.8.jpg',
            'filter-class':'abids',
            'title':'Palace heights',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/9.9.jpg',
            'filter-class':'jubileehills',
            'title':'36 Chhattees',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/10.10.jpg',
            'filter-class':'sf-dress',
            'title':'Minerva coffee shop',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/11.11.1.jpg',
            'filter-class':'madhapur',
            'title':'Maharaja chat house',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/11.11.jpg',
            'filter-class':'abids',
            'title':'Gokul chat',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/12.12.1.jpg',
            'filter-class':'madhapur banjarahills',
            'title':'Little italy',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/12.12.jpg',
            'filter-class':'banjarahills',
            'title':'Exotica',
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },{
            'imageURL':'images/hotels/13.13.1.jpg',
            'filter-class':'banjarahills',
            'title':"A'La Liberty",
            'costPrice':'1999',
            'sellingPrice':'1299',
            'rating':3.5
        },
        {
            'imageURL':'images/hotels/13.13.jpg',
            'filter-class':'banjarahills',
            'title':'Mozzarella',
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