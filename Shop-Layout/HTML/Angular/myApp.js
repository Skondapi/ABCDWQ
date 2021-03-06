var list = [
    {
        imageURL:'images/shop/restaurant_barbeque-nation_in_indiranagar-bangalore.jpg',
        rating:4,
        price:499,
        description:'The Barbeque Nation'
    },
    {
        imageURL:'images/shop/DSC04355.jpg',
        rating:3.5,
        price:399,
        description:'Mirrors Hi-Tech City'
    },
    {
        imageURL:'images/shop/Lifestyle.jpg',
        rating:3,
        price:699,
        description:'LifeStyle Inorbit Mall'
    },
    {
        imageURL:'images/shop/bahubali.jpg',
        rating:4,
        price:599,
        description:'INOX GVK One Mall'
    },
    {
        imageURL:'images/shop/wonderla.jpg',
        rating:4,
        price:599,
        description:'Wonderla Amusement Park'
    },
    {
        imageURL:'images/shop/Over-the-Moon.jpg',
        rating:4,
        price:1599,
        description:'Over the Moon'
    },
    {
        imageURL:'images/shop/harley_davidson.jpg',
        rating:4,
        price:599,
        description:'Harley Davidson'
    },
    {
        imageURL:'images/shop/park-hyatt-hyderabad.jpg',
        rating:4,
        price:599,
        description:'Park Hyatt Hyderabad'
    },{
        imageURL:'images/shop/dialogueInTheDark.jpg',
        rating:4.5,
        price:599,
        description:'Dialogue in the dark'
    },
    {
        imageURL:'images/shop/menchies.jpg',
        rating:4,
        price:899,
        description:'Menchies Frozen Yogurt'
    },{
        imageURL:'images/shop/abs.jpg',
        rating:3.5,
        price:599,
        description:'Absolute bareque'
    },
    {
        imageURL:'images/shop/hypercitymall.jpg',
        rating:4.5,
        price:399,
        description:'Hyper City Mall'
    }
];

var parallaxList = [
    {
        imageURL:'images/slider/rev/shop/girl1.jpg',
        caption:'Get your Shopping Bags Ready',
        secondaryImage:'',
        text:'Latest Fashion Collections',
        description:'We have created a Design that looks Awesome, performs Brilliantly senses Orientations.'
    },{
        imageURL:'images/shop/creamstone.png',
        caption:'The best ice cream experience you can have, with the finest ingredients',
        secondaryImage:'images/shop/creamstone1.png',
        text:'',
        description:'LAUGHTER IS THE LOUDEST WHERE ICE-CREAM IS THE BEST'
    }
]


var app = angular.module('dealsApp', []);


app.controller('itemsController', function($scope){

    $scope.itemsList = list;

    $scope.parallaxItems = parallaxList;

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

});




