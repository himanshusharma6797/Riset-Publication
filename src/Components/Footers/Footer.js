import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    // {/* <!-- Footer --> */}
    <footer className="text-center text-lg-start bg-white text-muted">
      {/* <!-- Section: Social media --> */}

      {/* <!-- Section: Social media --> */}

      {/* <!-- Section: Links  --> */}
      <section className="">
        <div className="text-center text-md-start containerFull pt-4">
          {/* <!-- Grid row --> */}
          <div className="row widthFull">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-grayish"></i>Address:
              </h6>
              <p>
                JMD Megapolis
                <br />
                Gurugram India.
                <br />
                Pin Code: 122018
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">
              Help & Support


              </h6>
              <p>
                <a href="#!" className="text-reset">Terms Of Use
</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Support</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Privacy Policy</a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">
              Services
              </h6>
              <p>
                <a href="#!" className="text-reset">Research Guidance</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Conference</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Research Publication</a>
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}
    </footer>
  )
}
