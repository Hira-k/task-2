import React from 'react';
import './HeaderBottom.css';
function HeaderBottom() {
  return (
    <section class='section-1'>
      {/* <!--this "section-1" is not bootstrap class--> */}

      <div class='container text-center'>
        <div class='row'>
          <div class='col-md-6'>
            <div class='panel text-left'>
              <h1 class='header-text pt-5'>
                Get the Professional Qualifications you are looking for
              </h1>
              <p class='para-text'>
                Interport Corporate Academy is also accredited by the Chartered
                Institute of Logistics and Transport (CILT), International (UK)
                to provide the globally recognized CILT International Diploma
                and Certificate courses in Logistics and Transport in
                Bangladesh.
              </p>
            </div>
          </div>
          <div class='col-md-6'>
            <div class='play'>
              <a class='cta' href='/'>
                <button class=' btn sec-button'>VIEW ALL QUALIFICATIONS</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderBottom;
