async function Menu(){
    let data=await fetch("http://localhost:3000/Menu")
    let res=await data.json("")
    let html=res.map(elem=>{
        if(elem.dropdown.length===0){
            return`
            <li class="nav-item">
              <a class="nav-link text-warning active mx-2" href="#">${elem.text}</a>
            </li>`
        }else{
            return`
            <li class="nav-item dropdown">
            <a class="nav-link text-warning dropdown-toggle mx-2 " href="#" role="button" data-bs-toggle="dropdown">${elem.text}</a>
            <ul class="dropdown-menu mt-2 bg-dark">
              ${elem.dropdown.map(item=>{
                return`<li><a class="dropdown-item text-warning" href="#">${item.text}</a></li>`
              }).join("")}
            </ul>
          </li>`
        }

    })
    document.querySelector(".navbar-nav").innerHTML=html.join("")
}
export default Menu;