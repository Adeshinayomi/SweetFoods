
let totalCart=0;

//page items 
const menu=[
  {
    quantity:0,
    class:'burger',
    id:'low',
    dataId:"all",
    category:'Dinner',
    title:'Burger',
    price:700,
    image:'images/view-3d-delicious-looking-burger.jpg',
    text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis possimus fugit? Neque velit natus amet, eligendi facere illo harum!'
  },
  {
    quantity:0,
    class:'meatpie',
    id:'low',
    dataId:"all",
    category:'Breakfast',
    title:'Meatpie',
    price:530,
    image:'images/delicious-pumpkin-pie-soup.jpg',
    text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis possimus fugit? Neque velit natus amet, eligendi facere illo harum!'
  },
  {
    quantity:0,
    class:'cake',
    id:'high',
    dataId:"all",
    category:'Breakfast',
    title:'Cake',
    price:1200,
    image:'images/delicious-birthday-cake-studio.jpg',
    text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis possimus fugit? Neque velit natus amet, eligendi facere illo harum!'
  },
  {
    quantity:0,
    class:'muffin',
    id:'low',
    dataId:"all",
    category:'Dinner',
    title:'Muffin',
    price:300,
    image:'images/delicious-cupcake-with-orange.jpg',
    text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis possimus fugit? Neque velit natus amet, eligendi facere illo harum!'
  },
  {
    quantity:0,
    class:'crossiant',
    id:'high',
    dataId:"all",
    category:'Breakfast',
    title:'Crossiant',
    price:1150,
    image:'images/side-view-delicious-croissant-pancakes-wooden-cutting-board-beloved-one-right-side-dark-surface.jpg',
    text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis possimus fugit? Neque velit natus amet, eligendi facere illo harum!'
  },
]

// variable for accumulating cart
let cartProduct=[];

const wrapper=document.querySelector('.food-wrapper');
const searchbar=document.getElementById('searchbar');
const searchBtn=document.querySelector('.search-btn');
const foodbtns=document.querySelectorAll('.btn');


// loading the webpage
document.body.addEventListener('load',onLoad(menu))



    function onLoad(menu){
      let result=menu.map((menu)=>{
        return `<article class="article">
        <div class="image-wrapper">
          <img src="${menu.image}" alt="">
        </div>
        <div class="text">
          <div class="title">
            <h2>${menu.title}</h2>
            <span class="price">$${menu.price/100}</span>
          </div>
          <hr>
          <h4>${menu.category}</h4>
          <p>
            ${menu.text}
          </p>
          <span class="show-add"></span>
          <div class="article-btns">
            <p class="qty-cont">
              <button class="qty-btns" id="minus">-</button>
              <span class="quantity">0</span>
              <button class="qty-btns" id="plus">+</button>
            </p>
            <button class="addbtn" id="${menu.class}">Add To Cart</button>
          </div>
          </div>

      </article>`;

      });
      result=result.join('');
      wrapper.innerHTML=result

    }

    // displaying the cart onclick 
       const cartIcon=document.querySelector('.cart-icon');
       const times=document.querySelector('.times');
       const showCarts=document.querySelector('.show-carts');
       const cart=document.querySelector('.carts')
       const cartContent=document.querySelector('.cart-content')
       const EmptyMsg=document.querySelector('.empty-msg')
       cartIcon.addEventListener('click',()=>{
        cart.style.right='0%';
        cart.style.display='block';
        document.title="SweetFoods-Cart"
        times.style.display='block';
        if(totalCart===0){
          EmptyMsg.style.display='grid'
          cartContent.style.display='none'
        }else{
          cartContent.style.display='grid'
          EmptyMsg.style.display='none'
        }
       })
      //  closing the cart onclick
       times.addEventListener('click',()=>{
        cart.style.right="-100%"
        cart.style.display="none"
        times.style.display='none';
        
        document.title="SweetFoods-Home"
       })
       showCarts.addEventListener('click',()=>{
        cart.style.right='0%';
        cart.style.display='block';
        document.title="SweetFoods-Cart"
        times.style.display='block';
        if(totalCart===0){
          EmptyMsg.style.display='grid'
          cartContent.style.display='none'
        }else{
          cartContent.style.display='grid'
          EmptyMsg.style.display='none'
        }
       })

      //  each food item functionality
    function reuse(){
      const articles=document.querySelectorAll('.article');
      const cartQuantity=document.querySelector('.cart')
      articles.forEach((article)=>{
        let quantNum=0
        const btn=article.querySelector('.addbtn');
        const show=article.querySelector('.show-add');
        let quantity=article.querySelector('.quantity') 
        const qtyBtn=article.querySelectorAll('.qty-btns');

        // increasing and decreasing food item number
        qtyBtn.forEach((btn)=>{
          btn.addEventListener('click',()=>{
            const id=btn.id
            if(id==='minus'){
              if(quantNum>0){
                quantNum--
                quantity.innerHTML--
              }
              
            }else{
              quantNum++
              quantity.innerHTML++
    
            }
   
          });
          
        })
        
        
        // Adding food to cart
        const foodNum=document.querySelector('.food-num');
        const amount=document.querySelector('.amount')
        const tax=document.querySelector('.tax')
        const total=document.querySelector('.total-amount')
        btn.addEventListener('click',()=>{
        
          if(quantNum <= 0){
            show.innerHTML=''
          }else{
            show.innerHTML='Added Sucessfully'
           
            for(i=0;i<menu.length;i++){
              let item=menu[i];

              if(item.class===btn.id){ 
                let totaltax=0
                const qaunt=Number(quantity.innerHTML)
                let numAmt=Number(amount.innerHTML)
                let taxAmt=Number(tax.innerHTML)
                let totalAmt=Number(total.innerHTML)
                // increasing food item if it is already in the cart
                if(cartProduct.includes(item)){
                  const acc= Number(item.quantity)+quantNum
                  item.quantity=acc
                  addToCart();

                  // calculating cost of foods after increasing quantity
                  foodNum.innerHTML='('+ cartProduct.length + ')'
                  numAmt+=qaunt*(item.price/100)
                  amount.innerHTML=numAmt.toFixed(1)
                  taxAmt=(numAmt * 0.1)
                  totaltax=taxAmt.toFixed(1)
                  tax.innerHTML=totaltax
                  totalAmt=numAmt+Number(totaltax)
                  total.innerHTML=totalAmt.toFixed(1)
                  
                }else{
                  // adding food to cart if it is not in cart and increasing total  foods in cart
                  totalCart++
                  cartQuantity.innerHTML=totalCart;
                  item.quantity=quantity.innerHTML;
                  cartProduct.push(item)
                  addToCart();

                  // calculating cost of foods
                  foodNum.innerHTML='('+ cartProduct.length + ')'
                  numAmt+=qaunt*(item.price/100)
                  amount.innerHTML=numAmt.toFixed(1)
                  taxAmt=(numAmt * 0.1)
                  totaltax=taxAmt.toFixed(1)
                  tax.innerHTML=totaltax
                  totalAmt=numAmt+Number(totaltax)
                  total.innerHTML=totalAmt.toFixed(1)
                }

                
               }
             }
           }
           setTimeout(()=>{
            show.innerHTML=''
           },3000);        
          }); 
        })
     
      }
 

    // search functionality
   const errorMessage=document.querySelector('.error-message');
   const message=document.querySelector('.message');
   
  
  // filtering menu array to search for food
    function search(){
      const searchval=searchbar.value.toLowerCase()
      const emptyArray=[]
      serchResult=menu.filter((value)=>{
        const item=value.title.toLowerCase()
        if(searchval === item){
          errorMessage.innerHTML=''
          message.innerHTML=`Showing Results For "<span>${searchval}</span>"`
          return item === searchval;
        }
        
      })
      // showing search result on webpage

      document.body.addEventListener('load',onLoad(serchResult));
      reuse();

      // search error message
      if(JSON.stringify(serchResult)=== JSON.stringify(emptyArray)){
        errorMessage.innerHTML=`<h1>No Result For "${searchval}"</h1>`
      }
    }

    // clearing input field after running a search
    searchBtn.addEventListener('click',()=>{
       search();
       searchbar.value=''
    });
    // running seaech function using enter key
    searchbar.addEventListener('keyup',(event)=>{
      if(event.key=== 'Enter'){
         search();
         searchbar.value=''
      }
    });
             
    
    // Button Functionality
    foodbtns.forEach(function(btn){
      btn.addEventListener('click',(e)=>{
        message.innerHTML=''
        errorMessage.innerHTML=''
        // let id=btn.dataset.id
        const id=e.target.dataset.id
        if(id){
          foodbtns.forEach((btn)=>{
            btn.classList.remove('active');
            e.target.classList.add('active');
          })
        }
        // filtering menu to match category of foods
        result= menu.filter((value)=>{
          if(id === value.id){
            return value.id === id;
          }else if(id === value.dataId){
            return value.dataId === id;
          }else if(id){
            return value.category === id;
          }
        });
        
        // display result on webpage
        document.addEventListener('load',onLoad(result)) 
        reuse();       
      });
    });
 

    // loading cart item on the webpage
    function addToCart(){
      let cartHtml=''
      cartProduct.forEach((value,index)=>{
       const Html=`
       <article class="cart-container">
          <div class="image-wrapper">
            <img src="${value.image}" alt="">
            <span class="item-amt"></span>
          </div>
          <div class="text" id="${value.class}">
            <div class="title">
              <h2>${value.title}</h2>
            </div>
            <hr>
            <h4>${value.category}</h4>
            <p >quantity:<span class="val-qty">${value.quantity}</span></p>
            <span class="show-add"></span>
          </div>
          <div class="delete-cont">
            <p>$<span class="price">${value.price/100}</span></p>
            <button class="addbtn" onclick="
            
              const cartQuantity=document.querySelector('.cart')
              const updateQty=document.querySelector('.val-qty');
              const amount=document.querySelector('.amount')
              const tax=document.querySelector('.tax')
              const total=document.querySelector('.total-amount')
              let numAmt=Number(amount.innerHTML)
              let taxAmt=Number(tax.innerHTML)
              let totalAmt=Number(total.innerHTML)
             
              
              cartProduct.splice(${index},1)
              addToCart();
              const dele=${value.price/100}*${value.quantity}
              numAmt-=dele
              amount.innerHTML=numAmt.toFixed(1)
              taxAmt=(numAmt * 0.1)
              totaltax=taxAmt.toFixed(1)
              tax.innerHTML=totaltax
              totalAmt=numAmt+Number(totaltax)
              total.innerHTML=totalAmt.toFixed(1)
              totalCart--
              cartQuantity.innerHTML=totalCart;
              if(totalCart===0){
                EmptyMsg.style.display='grid'
                cartContent.style.display='none'
              }
            "><i class="fa fa-trash"></i></button>
          </div>
       </article>
          ` 
          cartHtml+=Html
         
        });

     document.querySelector('.cart-product').innerHTML=cartHtml; 
    }
    reuse();
    

     

    // carts.forEach((cart)=>{
    //   const updateQty=cart.querySelector('.val-qty');
    //   const cartQty=cart.querySelector('.cart-qty');
    //   cartQty++
    // })
  
 /* foodbtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      let id=btn.dataset.id
      if(id==='low'){
        result=menu.filter((value)=>{
          return value.price <= 7;
        })
        document.body.addEventListener('load',onLoad(result))
      }else if(id==='high'){
        result=menu.filter((value)=>{
          return value.price > 7;
        })
        document.body.addEventListener('load',onLoad(result))
      }else{
        document.addEventListener('load',onLoad(menu))
      }
    }) 
  })*/
