async function Product(){
    let data=await fetch("http://localhost:3000/product")
    let res=await data.json("")
    let html=res.map(elem=>{
        return`
        <div class="card col-3">
        <img src="${elem.image}" class="card-img-top" style="width:100%;height:250px" alt="...">
        <div class="card-body bg-dark">
          <h5 class="card-title text-white">${elem.title}</h5>
          <p class="card-text text-white">${elem.text}</p>
          <a href="#" class="btn btn-warning">${elem.link}</a>
        </div>
      </div>
      `
    })
    document.querySelector(".row").innerHTML=html.join("")
}   
export default Product 