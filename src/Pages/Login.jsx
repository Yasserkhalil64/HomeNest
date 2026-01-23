import { useState } from "react";

import logo3 from "../logo3.png"
import logo4 from "../logo4.png"
import logo from "../logo.png"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم تسجيل الدخول (واجهة فقط)");
    console.log({ email, password });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h6>login</h6>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>e-mail</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">enter</button>
        </form>

        <p className="register-text">
            you have no sense ? <span> create an account</span>
        </p>
      </div>
            {/* Model */}
     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <h1 className="modal-title" id="staticBackdropLabel">Dream Apartment</h1>
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
              <div className="modal-body">
               {/* Carousel */}
               <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                 <div className="carousel-indicators">
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>                                                                        
                 </div>
                 <div className="carousel-inner">
                   <div className="carousel-item active">
                     <img src={logo} className="d-block w-100" />
                   </div>
                   <div className="carousel-item">
                     <img src={logo3} className="d-block w-100" />
                   </div>
                   <div className="carousel-item">
                     <img src={logo4} className="d-block w-100" />
                   </div>
                   <div className="carousel-item">
                     <img src={logo4} className="d-block w-100" />
                   </div>
                   <div className="carousel-item">
                     <img src={logo4} className="d-block w-100" />
                   </div>
                   <div className="carousel-item">
                     <img src={logo4} className="d-block w-100" />
                   </div>
                   <div className="carousel-item">
                     <img src={logo4} className="d-block w-100" />
                   </div>                                                                        
                 </div>
               </div>
               {/* Collapse */}
               <div className="collapse-container" id="accordionExample">
                 <a className="btn" data-bs-toggle="collapse" href="#Specifications" role="button" aria-expanded="false" aria-controls="collapseExample">
                   Specifications
                 </a>
                 <a className="btn" data-bs-toggle="collapse" href="#Houselocation" role="button" aria-expanded="false" aria-controls="collapseExample">
                   House location
                 </a>
                 <a className="btn" data-bs-toggle="collapse" href="#Houseadescriotion" role="button" aria-expanded="false" aria-controls="collapseExample">
                   House a descriotion
                 </a>
                 <a className="btn" data-bs-toggle="collapse" href="#contactinformation" role="button" aria-expanded="false" aria-controls="collapseExample">
                   Contact information
                 </a>  
                 <div className="collapse" id="Specifications"  data-bs-parent="#accordionExample">
                   <div className="card card-body">
                     <div className="property-type">
                       <h6 className="title-proerty">
                         Property type
                       </h6>
                       <p>
                         apartment
                       </p>
                     </div>
                     <div className="price">
                       <h6 className="price-title">
                         Price
                       </h6>
                       <p>25000$</p>
                     </div>
                     <div className="space">
                       <h6 className="space-title">
                         Space
                       </h6>
                       <p>200 M</p>
                     </div>
                     <div className="rooms">
                       <h6 className="room-title">
                         Rooms
                       </h6>
                       <p>
                         5
                       </p>
                     </div>
                     <div className="baths">
                       <h6 className="bath-title">
                         Bath
                       </h6>
                       <p>
                         2
                       </p>
                     </div>
                   </div>
                 </div>
                 <div className="collapse" id='Houselocation'  data-bs-parent="#accordionExample" >
                   <div className="card card-body ">
                     <div className="city">
                       <h6 className="city-title">
                         City
                       </h6>
                       <p>Damacous</p>
                     </div>
                     <div className="area">
                       <h6 className="area-title">
                         Area
                       </h6>
                       <p>
                         mazze
                       </p>
                     </div>
                   </div>
                 </div>
                 <div className="collapse" id='Houseadescriotion'  data-bs-parent="#accordionExample">
                   <div className="card card-body">
                     <div className="House-a-descriotion">
                       <p>
                         Modern, Peaceful Apartment with Natural Light and Spacious Comfort
                       </p>
                     </div>
                   </div>
                 </div>                 
                 <div className="collapse" id='contactinformation'  data-bs-parent="#accordionExample">
                   <div className="card card-body">
                     <div className="number-phone">
                       <h6 className="numberphone-title">
                         Number Phone
                       </h6>
                       <p>
                         +963 993 8896 61
                       </p>
                     </div>
                   </div>
                 </div>               
               </div>
           </div>
         </div>
       </div>
     </div>        
      {/* Offcanvas */}
 <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
   <div className="offcanvas-header">
     <h6 className="offcanvas-title" id="offcanvasExampleLabel">Your basket</h6>
     <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   </div>
   <div className="offcanvas-body">
     <div className="card" style={{width:"18rem" }}>
       <img src={logo4} className='logo'  alt="logo4"/>
       <div className="card-body">
         <h6 className="card-title">
           Dream Apartment
           </h6>
           <p className="card-text">
             Modern, Peaceful Apartment with Natural Light and Spacious Comfort
             </p>
             <a href="#" className='btn btn-offcanvas' data-bs-toggle="modal" data-bs-target="#staticBackdrop"  >Explore the Apartment</a>
       </div>
     </div>
      
     <div className="card" style={{width:"18rem" }}>
       <img src={logo4} className='logo'  alt="logo4"/>
       <div className="card-body">
         <h6 className="card-title">
           Dream Apartment
           </h6>
           <p className="card-text">
             Modern, Peaceful Apartment with Natural Light and Spacious Comfort
             </p>
             <a href="#" className='btn btn-offcanvas' data-bs-toggle="modal" data-bs-target="#staticBackdrop"  >Explore the Apartment</a>
       </div>
     </div> 
 
     <div className="card" style={{width:"18rem" }}>
       <img src={logo4} className='logo'  alt="logo4"/>
       <div className="card-body">
         <h6 className="card-title">
           Dream Apartment
           </h6>
           <p className="card-text">
             Modern, Peaceful Apartment with Natural Light and Spacious Comfort
             </p>
             <a href="#" className='btn btn-offcanvas' data-bs-toggle="modal" data-bs-target="#staticBackdrop"  >Explore the Apartment</a>
       </div>
     </div>     
 
   </div>
 </div>   
    </div>
    
  );
}
