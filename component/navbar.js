 const navBar=()=>{
    return `<nav class="navbar  navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a href="/index.html">
        <img src="/images/logo-gold-letter-beauty-fashion-business-des-vector-23900413.avif" class="logo"  alt="">
    </a>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-centre">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/admin.html">AddProduct</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/product.html">Product</a>
          </li>
          <li class="nav-item">
           
          </li>
        </ul>
        <form class="d-flex" role="search" id="searchform">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
          
          <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass m-3"></i> </button>
        </form>
        <a class="nav-link" href="/pages/login.html"><i class="fa-regular fa-user"></i></a>
     
        <a class="nav-link" href="/pages/cart.html"><i class="fa-solid fa-cart-shopping m-4"></i></a>
      </div>
    </div>
  </nav>`
 }
 export default navBar