import { useState } from 'react'

import './App.css'

function App() {
  const [checkedBoxOne, setCheckBoxOne] = useState(false);
  const [checkedBoxTwo, setCheckBoxTwo] = useState(false);
  const [mainCheckBox, setMainCheckBox] = useState(false);

  const [checkedBoxOneCount, setCheckBoxOneCount] = useState(0);
  const [checkedBoxTwoCount, setCheckBoxTwoCount] = useState(0);

  const handleCheckBoxOneClick = () => {
    setCheckBoxOne(!checkedBoxOne);
    if (checkedBoxOne) {
      setCheckBoxOneCount((p) => p - 1);
    } else {
      setCheckBoxOneCount((p) => p + 1);
    }

    if (checkedBoxTwo) {
      setMainCheckBox(!mainCheckBox);
    }
  };

  const handleCheckBoxTwoClick = () => {
    setCheckBoxTwo(!checkedBoxTwo);
    if (checkedBoxTwo) {
      setCheckBoxTwoCount((p) => p - 1);
    } else {
      setCheckBoxTwoCount((p) => p + 1);
    }

    if (checkedBoxOne) {
      setMainCheckBox(!mainCheckBox);
    }
  };

  const handleMainCheckBoxClick = () => {
    if (checkedBoxOneCount + checkedBoxTwoCount == 1) {
      return;
    }
    setMainCheckBox(!mainCheckBox);
    if (mainCheckBox) {
      setCheckBoxTwoCount((p) => p - 1);
      setCheckBoxOneCount((p) => p - 1);
      setCheckBoxOne(!checkedBoxOne);
      setCheckBoxTwo(!checkedBoxTwo);
    } else {
      setCheckBoxTwoCount((p) => p + 1);
      setCheckBoxOneCount((p) => p + 1);
      setCheckBoxTwo(!checkedBoxTwo);
      setCheckBoxOne(!checkedBoxOne);
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="selected">
            <div className="select">
              <div className="total-checked">
                <div>
                  {mainCheckBox ? (
                    <div
                      className="selectBox main-select-box"
                      onClick={handleMainCheckBoxClick}
                    >
                      <img src="./checked-pink.svg" />
                    </div>
                  ) : (
                    <div
                      className="selectBox main-select-box"
                      onClick={handleMainCheckBoxClick}
                    >
                      <img src="./checked-empty.svg" />
                    </div>
                  )}
                </div>
                <div className="check-count">
                  {checkedBoxOneCount + checkedBoxTwoCount}/2 ITEMS SELECTED
                </div>
              </div>
            </div>
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
            {checkedBoxOne ? (
              <div className="selectBox" onClick={handleCheckBoxOneClick}>
                <img src="./checked-pink.svg" />
              </div>
            ) : (
              <div className="selectBox" onClick={handleCheckBoxOneClick}>
                <img src="./checked-empty.svg" />
              </div>
            )}

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
            {checkedBoxTwo ? (
              <div className="selectBox" onClick={handleCheckBoxTwoClick}>
                <img src="./checked-pink.svg" />
              </div>
            ) : (
              <div className="selectBox" onClick={handleCheckBoxTwoClick}>
                <img src="./checked-empty.svg" />
              </div>
            )}

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
