import React, { useState } from "react";
import stl from "./ClientDetails.module.css";
const ClientDetails = () => {
  const [val, setVal] = useState("true");
  return (
    <>
      <div id={stl.clientDetails}>
        <div className={stl.clientHead}>
          <div className={stl.detailHeadImg}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.deatailHead}>Details</h2>
        </div>
        <div className={stl.formContainer}>
          <div className={stl.formInnercontainer}>
            <div className={stl.srnoFild}>
              <div>
                <label htmlFor="srno">Sr No.</label>
                <input
                  type="text"
                  id="srno"
                  value="445"
                  name="srno"
                  readonly={val}
                />
              </div>
              <div>
                <label htmlFor="date">Date.</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  defaultValue="2023-10-25"
                  readonly={val}
                />
              </div>
            </div>
            <div className={stl.businessDetails}>
              <div>
                <label htmlFor="dealerName">dealer Name</label>
                <input
                  type="text"
                  name="dealerName"
                  id="dealerName"
                  readonly={val}
                />
              </div>
              <div>
                <label htmlFor="manufacturerName">Manufacturer Name</label>

                <input
                  type="text"
                  name="manufacturerName"
                  id="manufacturerName"
                  readonly={val}
                />
              </div>
              <div>
                <label htmlFor="productName">Name Of Product</label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  readonly={val}
                />
              </div>
              <div>
                <label htmlFor="productCode">Product Code</label>
                <input
                  type="text"
                  name="productCode"
                  id="productCode"
                  readonly={val}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  rows="10"
                  cols="80"
                  readonly={val}
                ></textarea>
              </div>
              <div className={stl.hsnContainer}>
                <div className={stl.hsnInnerContainer}>
                  <div>
                    <label htmlFor="hsn">HSN Code</label>
                    <input type="text" id="hsn" name="hsn" readonly={val} />
                  </div>
                  <div>
                    <label htmlFor="cPrice">Company Price</label>
                    <input
                      type="text"
                      id="cPrice"
                      name="cPrice"
                      readonly={val}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="gst">Applicable GST</label>
                <input type="text" name="gst" id="gst" readonly={val} />
              </div>
              <div className={stl.hsnContainer}>
                <div className={stl.hsnInnerContainer}>
                  <div>
                    <label htmlFor="buyPrice">Buying Price</label>
                    <input
                      type="text"
                      id="butPrice"
                      name="butPrice"
                      readonly={val}
                    />
                  </div>
                  <div>
                    <label htmlFor="sellPrice">Selling Price</label>
                    <input
                      type="text"
                      id="sellPrice"
                      name="sellPrice"
                      readonly={val}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="mouVal">MOU Validity</label>

                <input type="text" name="mouVal" id="mouVal" readonly={val} />
              </div>
            </div>

            <div className={stl.inputFilesContainer}>
              <div className={stl.innerInputFilecontainer}>
                <div>
                  <label htmlFor="ttAthorization">
                    Teritary Authorization :
                  </label>
                </div>
                <div>
                  <label htmlFor="ppt">PPT Available :</label>
                </div>
                <div>
                  <label htmlFor="coverLetter">Covering Letter :</label>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className={stl.inputFilesContainer}>
              <div className={stl.innerInputFilecontainer}>
                <div>
                  <label htmlFor="ttAthorization">
                    Teritary Authorization :
                  </label>
                </div>
                <div>
                  <label htmlFor="ppt">PPT Available :</label>
                </div>
                <div>
                  <label htmlFor="coverLetter">Covering Letter :</label>
                </div>
              </div>
            </div>

            <div className={stl.techSpec}>
              <div>
                <div>
                  <label htmlFor="techSpec">Technical Specification</label>
                </div>
                <div id={stl.techText}>
                  <textarea
                    name="techSpec"
                    id="techSpec"
                    rows="10"
                    cols="120"
                    readonly={val}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={stl.actionBtn}>
          <div>
            <button>Edit</button>
            <button>PDF</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClientDetails;

const mfName = ["Tata", " Honda", "sukesh", " Dell"];
const product = ["Dell", "Asus", " Lava", " Lenovo", " HP"];
const gst = ["5%", "6%", "8%"];
const mou = ["mou1", "mou3", "mou4"];
