import React, { Component } from 'react'

import WorksCss from "./Works.module.css";

export default class Works extends Component {
  render() {
    return (
        <div className='section'>
          <div className={WorksCss.parentContainer}>
            <h2>Works</h2>
          </div>
          <div className={WorksCss.boxContainer}>
            <div className={WorksCss.boxChild}>
              <a href='https://fancy-souffle-0890dd.netlify.app/'  target="_blank">Add to Cart</a>
              
             {/* <p>Alaram Clock </p> */}
            </div>
            <div className={WorksCss.boxChild}>
             <a href='https://mfetchapi.herokuapp.com/' target="_blank">Clothing Store</a>
            </div>
            <div className={WorksCss.boxChild}>
            <a href='https://delicate-belekoy-448173.netlify.app/  ' target="_blank">Alaram Clock</a>
            </div>

          </div>
        </div>
    )
  }
}
