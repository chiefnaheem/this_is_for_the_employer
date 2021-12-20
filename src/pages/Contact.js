import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  const onsubmit = e => {
    e.preventDefault();
    alert("Sorry! This form is just for display purpose...");
  };

  return (
    <>
      {/* Contact Details */}
      <section className="py-5">
        <b style={{fontSize: "1.8rem", textAlign: 'center'}}>CONTACT US</b> 
        <div className="container">
          <div className="row" style={{display: 'flex', justifyContent:'space-between'}}>
            <div className="col-md-4" style={{border: '', padding: '2px', width: '220px', textAlign:'center', height:"100px"}}>
              <p className="h2">
                {/* <span class="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-globe fa-stack-1x fa-inverse" />
                </span> */}
              </p>
              <div className="col-md-4 " >
                <h2 className="font-weight-light text-primary" style={{fontSize:"1.6rem"}}>WEBSITE</h2>
                <p className="mb-0 small text-secondary" >
                  <Link to='/decagonhq.info' style={{textDecoration:"none"}}>decagonhq.info</Link>
                </p>
              </div>
            </div>
            <div className="col-md-4 " style={{border: '', padding: '2px', width: '220px', textAlign:'center', height:"150px"}}>
              <p className="h2">
                {/* <span class="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-phone-square fa-stack-1x fa-inverse" />
                </span> */}
              </p>
              <div className="ml-4" >
                <h2 className="font-weight-light text-primary" style={{fontSize:'1.6rem'}}>CALL US</h2>
                <p className="mb-1 text-secondary">+234-8000-800</p>
                <p className="m-0 text-secondary">+234-7000-700</p>
              </div>
            </div>
            <div className="col-md-4 d-flex" style={{border: '', padding: '2px', width: '220px', textAlign:'center', height:"100px"}}>
              <p className="h2">
                {/* <span class="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-envelope fa-stack-1x fa-inverse" />
                </span> */}
              </p>
              <div className="ml-4" >
                <h2 className="font-weight-light text-primary" style={{fontSize:'1.6rem'}}>EMAIL</h2>
                <p className="mb-0 small text-secondary">
                  <Link to='/decagonhq.info' style={{textDecoration:"none"}}>recruit@decagonhq.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="bg-light border-top border-bottom py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <form onSubmit={onsubmit}>
                <div className="form-row" style={{marginLeft:'1rem'}}>
                  <div className="col-md-6" style={{marginTop: '1rem'}}>
                    <div className="form-group">
                      <label className="small text-secondary font-weight-bold" style={{color:'brown', marginLeft:'1rem'}}>
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name ..."
                      />
                    </div>
                  </div>
                  {/* col-md-6 */}
                  <div className="col-md-6" style={{marginTop: '1rem'}}>
                    <div className="form-group">
                      <label className="small text-secondary font-weight-bold" style={{color:'brown', marginLeft:'1rem'}}>
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email ..."
                      />
                    </div>
                  </div>
                  {/* col-md-12 */}
                  <div className="col-md-12" style={{marginTop: '1rem'}}>
                    <div className="form-group">
                      <label className="small text-secondary font-weight-bold" style={{color:'brown', marginLeft:'1rem'}}>
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Subject ..."
                      />
                    </div>
                  </div>
                  {/* col-md-12 */}
                  <div className="col-md-12" style={{marginTop: '1rem'}}>
                    <div className="form-group">
                      <label className="small text-secondary font-weight-bold" style={{color:'brown', marginLeft:'1rem'}}>
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Enter Message ..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* col-md-12 */}
                </div>
                {/* form-row */}
                <button type="submit" className="btn btn-primary px-4" style={{marginTop:"12px", marginLeft:"42rem"}}>
                  Send Message <i className="fa fa-paper-plane" />
                </button>
              </form>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm" style={{marginRight:"2rem"}}>
                <div className="card-body text-center">
                  <h4 style={{color:'brown'}}>Office Address</h4>
                  <div id="address-box">
                    <div id="address-box-icon">
                      <i className="fa fa-map-marker fa-3x text-primary" />
                    </div>
                    <p className="mb-1 text-secondary font-weight-bold">
                      Decagon JobFinder Institute
                    </p>
                    <p className="mb-1 text-secondary small">
                      100242, 2nd Floor, Traditions Building, Familoni Street, 6th Roundabout
                    </p>
                    <p className="mb-1 text-secondary small">
                      Lekki, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;