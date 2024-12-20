import { menu,reuse} from "./script";
let cartProduct=[];
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
             cartProduct.splice(${index},1);
             addToCart();
            "><i class="fa fa-trash"></i></button>
          </div>
       </article>
          ` 
          cartHtml+=Html
         
        });

     document.querySelector('.cart-product').innerHTML=cartHtml; 
     
    }
const foodNum=document.querySelector('.food-num');
const amount=document.querySelector('.amount')     
           
  for(let i=0;i<menu.length;i++){
    let item=menu[i];

    if(item.class===btn.id){ 
      const qaunt=Number(quantity.innerHTML)
      let numAmt=Number(amount.innerHTML)
      if(cartProduct.includes(item)){
        item.quantity=quantity.innerHTML
        addToCart();
        foodNum.innerHTML='('+ cartProduct.length + ')'
        numAmt+=qaunt*(item.price/100)
        amount.innerHTML=numAmt
       
      }
      item.quantity=quantity.innerHTML;
      cartProduct.push(item)
      console.log(cartProduct)
      addToCart();
      // const qaunt=Number(quantity.innerHTML)
      // let numAmt=Number(amount.innerHTML)
      foodNum.innerHTML='('+ cartProduct.length + ')'
      numAmt+=qaunt*(item.price/100)
      amount.innerHTML=numAmt
      
      
        const carts=document.querySelectorAll('.cart-product');
        console.log(carts)
        carts.forEach((cart)=>{
          const cartitem=cart.querySelectorAll('.cart-container');
          cartitem.forEach((cartIt)=>{
            const updateQty=cartIt.querySelector('.val-qty');
            const cartQty=cartIt.querySelector('.cart-qty'); 
            const  updateBtn=cartIt.querySelector('.update-btn');
            const cartBtn=cartIt.querySelectorAll('.cart-btns');
        
        
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
        
            })
            updateBtn.addEventListener('click',()=>{
              totalCart=quantNum
              cartQuantity.innerHTML=totalCart;

              const update=Number(updateQty.innerHTML);
              updateQty.innerHTML=cartQty.innerHTML 
              const updatedQuant=Number(updateQty.innerHTML);
              const sub=updatedQuant - update
              const newprice=(item.price/100)*sub;
              numAmt+=newprice
              amount.innerHTML=numAmt
            })     
          });              
        })
      

    }
  }