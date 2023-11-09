import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="selected">
            <div className="select">2/2 ITEMS SELECTED</div>
          </div>
          <div className="buttons">
            <div className="button-one">
              <a>Remove</a>
            </div>
            <div className="button-two">
              <a>MOVE TO WISHLIST</a>
            </div>
          </div>
        </div>

        <div className="inner-container">
          <div className="card-one">
            <div className="card-one-inner-container">
              <div className="cancel">
                <img src="./wrong.svg" alt="cancel" />
              </div>
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEaGRILNt5MOfYyGvIeAz9b0BVqmwIErlcASywiIX1g&s"
                  alt="ear-buds"
                />
              </div>
              <div className="product-details">
                <h3>onePlus</h3>
                <p className="heading">Nord Buds 2r True Wireless</p>
                <p>sold by: Supercom Net</p>
                <div className="options">
                  <select className="selectOpt">
                    <option id="onesize">Size: OneSize</option>
                    <option id="Freesize">FreeSize</option>
                  </select>
                  <select className="selectOpt">
                    <option id="onesize">Qty:1</option>
                    <option id="Freesize">Qty:2</option>
                  </select>
                </div>

                <div className="price">
                  <p>$2999</p>
                  <p className="discount">$5000</p>
                </div>

                <p>Not Refundable</p>
              </div>
            </div>
          </div>

          <div className="card-two">
            <div className="card-one-inner-container">
              <div className="cancel">
                <img src="./wrong.svg" alt="cancel" />
              </div>
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEaGRILNt5MOfYyGvIeAz9b0BVqmwIErlcASywiIX1g&s"
                  alt="ear-buds"
                />
              </div>
              <div className="product-details">
                <h3>onePlus</h3>
                <p>Nord Buds 2r True Wireless</p>
                <p>sold by: Supercom Net</p>
                <div className="options">
                  <select className="selectOpt">
                    <option id="onesize">Size: OneSize</option>
                    <option id="Freesize">FreeSize</option>
                  </select>
                  <select className="selectOpt">
                    <option id="onesize">Qty:1</option>
                    <option id="Freesize">Qty:2</option>
                  </select>
                </div>

                <div className="price">
                  <p>$2999</p>
                  <p className="discount">$5000</p>
                </div>

                <p>Not Refundable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
