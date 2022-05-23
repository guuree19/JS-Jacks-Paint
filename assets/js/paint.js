function configureListeners() {
    let images = document.getElementsByTagName('img');// select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)              
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')){
        this.classList.add('dim')

    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if (this.classList.contains('dim')){
        this.classList.remove('dim');
    
    }



    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price 
            price = '$18.99';
            colorName = 'lime green';
            updatePrice(colorName, price)         
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price 
            
            price = '$13.99';
            colorName = 'Medium Brown';
            updatePrice(colorName, price)
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price 
            price = '$9.99';
            colorName = 'Royal Blue';
            updatePrice(colorName, price) 
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            
            price = '$14.99';
            colorName = 'Bright red';
            updatePrice(colorName, price)
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price 
            price = '$17.99';
            colorName = 'solid white';
            updatePrice(colorName, price)      
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price 
            price = '$15.99';
            colorName = 'Solid black';
            updatePrice(colorName, price)       
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            price = '$8.99';
            colorName = 'Medium Blue';
            updatePrice(colorName, price) 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price 
            price = '$11.99';
            colorName = 'light purple';
            updatePrice(colorName, price)  
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$16.99';
            colorName = 'Bright Yellow';
            updatePrice(colorName, price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price'); // select element with corresponding id
        colorPrice.textContent = price;   // display price
        
        let color = document.getElementById('color-name'); // select element with corresponding id
        color.textContent = colorName;   //display color name
    }
    
}




