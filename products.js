var catalog = [
    {
        name: "Pez Payaso"
        , tags: ['reef', 'tropical']
        , description: 'Vive en los arrecifes'
        , selected: 0
        , imgUrl: "images/fish/pic1.jpg"
    }
    , {
        name: "Ciclido"
        , tags: ['african']
        , description: 'Este es el pez Noseque'
        , selected: 0
        , imgUrl: "images/fish/pic2.jpg"
    }, {
        name: "Cirujano"
        , tags: ['tropical', 'reef']
        , description: 'Vive en los arrecifes'
        , selected: 0
        , imgUrl: "images/fish/pic3.jpg"
    }, {
        name: "Fish 4"
        , tags: ['tropical', 'reef']
        , description: 'Vive en los arrecifes'
        , selected: 0
        , imgUrl: "images/fish/pic4.png"
    }, {
        name: "Rodostropo"
        , tags: ['pacific']
        , description: 'Rios de Agua dulce'
        , selected: 0
        , imgUrl: "images/fish/pic5.jpg"
    }, {
        name: "Amarillo"
        , tags: ['pacific']
        , description: 'Rios de Agua dulce'
        , selected: 0
        , imgUrl: "images/fish/pic6.jpg"
    }, {
        name: "Rodostropo"
        , tags: ['pacific']
        , description: 'Rios de Agua dulce'
        , selected: 0
        , imgUrl: "images/fish/pic7.jpg"
    }, {
        name: "Magic"
        , tags: ['asian']
        , description: 'Pez de Rio'
        , selected: 0
        , imgUrl: "images/fish/pic8.jpg"
    }, {
        name: "Gogo"
        , tags: ['african']
        , description: 'Este es el pez Noseque'
        , selected: 0
        , imgUrl: "images/fish/pic9.jpg"
    }, {
        name: "Cirujano"
        , tags: ['tropical', 'reef']
        , description: 'Vive en arrecifes'
        , selected: 0
        , imgUrl: "images/fish/pic10.jpg"
    }, {
        name: "Aletas"
        , tags: ['african', 'reef']
        , description: 'Pez de arrecife'
        , selected: 0
        , imgUrl: "images/fish/pic11.jpg"
    }, {
        name: "Rosa"
        , tags: ['african', 'reef']
        , description: 'Pez de arrecife'
        , selected: 0
        , imgUrl: "images/fish/pic12.jpg"
    }, {
        name: "Goldfish"
        , tags: ['asian']
        , description: 'Pez de acuario'
        , selected: 0
        , imgUrl: "images/fish/pic13.jpg"
    }, {
        name: "Ojon"
        , tags: ['pacific']
        , description: 'Pez de rio'
        , selected: 0
        , imgUrl: "images/fish/pic14.jpg"
    }, {
        name: "Cirujano"
        , tags: ['tropical', 'african', 'reef']
        , description: 'Pez de arrecife'
        , selected: 0
        , imgUrl: "images/fish/pic15.jpg"
    }, {
        name: "Cabezon"
        , tags: ['pacific', 'reef']
        , description: 'El Pez mas cabezon'
        , selected: 0
        , imgUrl: "images/fish/pic16.jpg"
    }, {
        name: "Angel"
        , tags: ['tropical', 'reef']
        , description: 'Pez angel azul'
        , selected: 0
        , imgUrl: "images/fish/pic17.jpg"
    }, {
        name: "Betta"
        , tags: ['asian']
        , description: 'Pez luchador'
        , selected: 0
        , imgUrl: "images/fish/pic18.jpg"
    }, {
        name: "Globo"
        , tags: ['tropical', 'reef']
        , description: 'Se infla'
        , selected: 0
        , imgUrl: "images/fish/pic19.jpg"
    }, {
        name: "Globo Gris"
        , tags: ['african', 'reef']
        , description: 'Se infla'
        , selected: 0
        , imgUrl: "images/fish/pic20.png"
    }, {
        name: "Cirujano Blue"
        , tags: ['reef', 'african']
        , description: 'Este es el pez Noseque'
        , selected: 0
        , imgUrl: "images/fish/pic21.jpg"
    }, {
        name: "Dardo"
        , tags: ['pacific', 'tropical']
        , description: 'Pez de rio'
        , selected: 0
        , imgUrl: "images/fish/pic22.jpg"
    }, {
        name: "Rodostropo"
        , tags: ['pacific', 'tropical']
        , description: 'Pez de rio'
        , selected: 0
        , imgUrl: "images/fish/pic23.jpg"
    }, {
        name: "Plateado"
        , tags: ['tropical', 'african']
        , description: 'Pez de rio'
        , selected: 0
        , imgUrl: "images/fish/pic24.jpg"
    }, {
        name: "Puntos"
        , tags: ['tropical', 'asian']
        , description: 'Pez de rio'
        , selected: 0
        , imgUrl: "images/fish/pic25.jpg"
    }, {
        name: "Angel Claro"
        , tags: ['tropical', 'reef']
        , description: 'Este es el pez Noseque'
        , selected: 0
        , imgUrl: "images/fish/pic26.jpg"
    }, {
        name: "Pez loro"
        , tags: ['tropical', 'reef']
        , description: 'Tiene un pico'
        , selected: 0
        , imgUrl: "images/fish/pic27.jpg"
    }, {
        name: "Roca"
        , tags: ['tropical', 'african']
        , description: 'Venenoso'
        , selected: 0
        , imgUrl: "images/fish/pic28.png"
    }, {
        name: "Pez Loro"
        , tags: ['pacific', 'tropical', 'reef']
        , description: 'El mas loro de los peces'
        , selected: 0
        , imgUrl: "images/fish/pic29.jpg"
    }, {
        name: "Africano"
        , tags: ['reef', 'african']
        , description: 'Pez de rio'
        , selected: 0
        , imgUrl: "images/fish/pic30.gif"
    }

];
//Show All Products
exports.showAll = function () {
    console.log('Show all products');
    return catalog;
};
//Show category products
exports.filter = function (tagFilter) {
        console.log('Fetching Caribean Fishes');
        //Var for tag to look for
        var searchTag = tagFilter;
        //Create Array to return objects
        var filterResults = [];
        //LOOP the array in order to check all items
        for (var i = catalog.length - 1; i >= 0; i--) {
            //LOOP all the tags on each object 
            var tempObject = catalog[i];
            console.log(tempObject);
            for (var j = tempObject.tags.length - 1; j >= 0; j--) {
                var targetTag = tempObject.tags[j];
                console.log(targetTag);
                //compare the targetTag with the seachTag
                if (targetTag.localeCompare(searchTag) == 0) {
                    //If they are the same push the object into the retrun array
                    //Selected field by field, so the tags array can be pushed inside
                    filterResults.push({
                        name: tempObject.name
                        , tags: tempObject.tags
                        , description: tempObject.description
                        , selected: tempObject.selected
                        , imgUrl: tempObject.imgUrl
                    });
                }
            }
        }
        return filterResults;
    }
    //------------------------------------------------------------------------------