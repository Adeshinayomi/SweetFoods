let quantNum=0
let totalCart=0;

const menu=[
  {
    quantity:0,
    class:'burger',
    id:'low',
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
    category:'Breakfast',
    title:'Crossiant',
    price:1150,
    image:'images/side-view-delicious-croissant-pancakes-wooden-cutting-board-beloved-one-right-side-dark-surface.jpg',
    text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis possimus fugit? Neque velit natus amet, eligendi facere illo harum!'
  },
]

console.log(quantNum)
let cartProduct=[];

const wrapper=document.querySelector('.food-wrapper');
const searchbar=document.getElementById('searchbar');
const searchBtn=document.querySelector('.search-btn');
const foodbtns=document.querySelectorAll('.btn');

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
       const cartIcon=document.querySelector('.cart-icon');
       const times=document.querySelector('.times');
       const overlay=document.querySelector('.overlay');
       const cart=document.querySelector('.carts')
       const cartContent=document.querySelector('.cart-content')
       const EmptyMsg=document.querySelector('.empty-msg')
       cartIcon.addEventListener('click',()=>{
        cart.style.right='0%';
        document.title="cart"
        times.style.display='block';
        overlay.style.display='block'; 
        if(totalCart===0){
          EmptyMsg.style.display='grid'
          cartContent.style.display='none'
        }else{
          cartContent.style.display='grid'
          EmptyMsg.style.display='none'
        }
       })
       times.addEventListener('click',()=>{
        cart.style.right="-100%"
        times.style.display='none';
        overlay.style.display='none';
       })
    function reuse(){
      const articles=document.querySelectorAll('.article');
      const cartQuantity=document.querySelector('.cart')
      articles.forEach((article)=>{
        const btn=article.querySelector('.addbtn');
        const show=article.querySelector('.show-add');
        let quantity=article.querySelector('.quantity') 
        const qtyBtn=article.querySelectorAll('.qty-btns');
    
    
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
                if(cartProduct.includes(item)){
                  item.quantity=quantity.innerHTML
                  addToCart();
                  foodNum.innerHTML='('+ cartProduct.length + ')'
                  numAmt+=qaunt*(item.price/100)
                  amount.innerHTML=numAmt.toFixed(1)
                  taxAmt=(numAmt * 0.1)
                  totaltax=taxAmt.toFixed(1)
                  tax.innerHTML=totaltax
                  totalAmt=numAmt+Number(totaltax)
                  total.innerHTML=totalAmt.toFixed(1)
                  
                }else{
                  totalCart++
                  cartQuantity.innerHTML=totalCart;
                  item.quantity=quantity.innerHTML;
                  cartProduct.push(item)
                  console.log(cartProduct)
                  addToCart();
                  foodNum.innerHTML='('+ cartProduct.length + ')'
                  numAmt+=qaunt*(item.price/100)
                  amount.innerHTML=numAmt.toFixed(1)
                  taxAmt=(numAmt * 0.1)
                  totaltax=taxAmt.toFixed(1)
                  tax.innerHTML=totaltax
                  totalAmt=numAmt+Number(totaltax)
                  total.innerHTML=totalAmt.toFixed(1)
                }

                
                  const carts=document.querySelectorAll('.cart-product');
                  console.log(carts)
                  carts.forEach((cart)=>{
                    const cartitem=cart.querySelectorAll('.cart-container');
                    cartitem.forEach((cartIt)=>{
                      const updateQty=cartIt.querySelector('.val-qty');
                      const cartQty=cartIt.querySelector('.cart-qty'); 
                      const  updateBtn=cartIt.querySelector('.update-btn');
                      const cartBtn=cartIt.querySelectorAll('.cart-btns');
                      const delBtn=cartIt.querySelector('.addbtn');
                  
                      cartBtn.forEach((btn)=>{ 
                        btn.addEventListener('click',()=>{
                          const id=btn.id 
                          const val=Number(cartQty.innerHTML);
                          if(id==='minus'){
                            if(val>0){
                              quantNum--
                              cartQty.innerHTML--
                            }
                            
                          }else{
                            quantNum++
                            cartQty.innerHTML++
                          }
                        });
                  

                      updateBtn.addEventListener('click',()=>{      
                        const update=Number(updateQty.innerHTML);
                        updateQty.innerHTML=cartQty.innerHTML 
                        const updatedQuant=Number(updateQty.innerHTML);
                        const sub=updatedQuant - update
                        const newprice=(item.price/100)*sub;
                        numAmt+=newprice
                        amount.innerHTML=numAmt.toFixed(1)
                        taxAmt=(numAmt * 0.1)
                        totaltax=taxAmt.toFixed(1)
                        tax.innerHTML=totaltax
                        totalAmt=numAmt+Number(totaltax)
                        total.innerHTML=totalAmt.toFixed(1)
                        if(update===0){
                          totalCart--
                          cartQuantity.innerHTML=totalCart;
                        
                        }
                    
                      })  
                    })
                    delBtn.addEventListener('click',()=>{
                      cartProduct.splice(i,1);
                      addToCart();
                      const update=Number(updateQty.innerHTML);
                      const deletedAmt=(item.price/100)*update
                      numAmt-=deletedAmt
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
                    })
 
                    });              
                  })
              }
            }
          }
           setTimeout(()=>{
            show.innerHTML=''
           },3000);        
         }); 
        })
    
    }
 
  const errorMessage=document.querySelector('.error-message');
  const message=document.querySelector('.message');
   
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

      document.body.addEventListener('load',onLoad(serchResult));
      reuse();

      if(JSON.stringify(serchResult)=== JSON.stringify(emptyArray)){
        errorMessage.innerHTML=`<h1>No Result For "${searchval}"</h1>`
      }
    }

    searchBtn.addEventListener('click',()=>{
       search();
       searchbar.value=''
    });
    searchbar.addEventListener('keyup',(event)=>{
      if(event.key=== 'Enter'){
         search();
         searchbar.value=''
      }
    });
             
    

    foodbtns.forEach(function(btn){
      btn.addEventListener('click',()=>{
        message.innerHTML=''
        errorMessage.innerHTML=''
        let id=btn.dataset.id
        result= menu.filter((value)=>{
          if(id === value.id){
            return value.id === id;
          }else if(id){
            return value.category === id;
          }else{
            return value
          }
        });
        document.addEventListener('load',onLoad(result)) 
        reuse();       
      });
    });


    function addToCart(){
      console.log(cartProduct)
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
            <div class="cart-buttons">
              <p class="cart-cont">
                <button class="cart-btns" id="minus">-</button>
                <span class="cart-qty">${value.quantity}</span>
                <button class="cart-btns" id="plus">+</button>
              </p>
              <button class="update-btn">update</button>
            </div>
          </div>
          <div class="delete-cont">
            <span class="price">$${value.price/100}</span>
            <button class="addbtn" onclick="
 
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

  