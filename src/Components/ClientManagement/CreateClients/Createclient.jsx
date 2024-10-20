import stl from "./Createclient.module.css";
const Createclient = () => {
  return (
    <>
      {/* <center><h1>Create Client</h1></center> */}
      <div id={stl.createClient}>
        <div className={stl.clientHead}>
          <div className={stl.headImgcontainer}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.heading}>Create/Add Client</h2>
        </div>

        <div className={stl.formContainer}>
          <div className={stl.formInnercontainer}>
            <form action="/">
              <div className={stl.srnoFild}>
                <div>
                  <label htmlFor="srno">Sr No.</label>
                  <input type="text" id="srno" name="srno" />
                </div>
                <div>
                  <label htmlFor="date">Date.</label>
                  <input type="date" id="date" name="date" />
                </div>
              </div>
              <div className={stl.businessDetails}>
                <div>
                  <label htmlFor="dealerName">dealer Name</label>
                  <input type="text" name="dealerName" id="dealerName" />
                </div>
                <div>
                  <label htmlFor="manufacturerName">Manufacturer Name</label>

                  <select name="manufacturerName" id="manufacturerName">
                    <option value="Select">Select</option>
                    {mfName.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="productName">Name Of Product</label>
                  <select name="productName" id="productName">
                    {product.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="productCode">Product Code</label>
                  <input type="text" name="productCode" id="productCode" />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    rows="10"
                    cols="80"
                  ></textarea>
                </div>
                <div className={stl.hsnContainer}>
                  <div className={stl.hsnInnerContainer}>
                    <div>
                      <label htmlFor="hsn">HSN Code</label>
                      <input type="text" id="hsn" name="hsn" />
                    </div>
                    <div>
                      <label htmlFor="cPrice">Company Price</label>
                      <input type="text" id="cPrice" name="cPrice" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="gst">Applicable GST</label>
                  {/* <input type="text" name="gst" id="gst" /> */}
                  <select name="gst" id="gst">
                    {gst.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={stl.hsnContainer}>
                  <div className={stl.hsnInnerContainer}>
                    <div>
                      <label htmlFor="buyPrice">Buying Price</label>
                      <input type="text" id="butPrice" name="butPrice" />
                    </div>
                    <div>
                      <label htmlFor="sellPrice">Selling Price</label>
                      <input type="text" id="sellPrice" name="sellPrice" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="mouVal">MOU Validity</label>
                  <select name="mouVal" id="mouVal">
                    {mou.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  {/* <input type="text" name="mouVal" id="mouVal" /> */}
                </div>
              </div>

              <div className={stl.inputFilesContainer}>
                <div className={stl.innerInputFilecontainer}>
                  <div>
                    <label htmlFor="ttAthorization">
                      Teritary Authorization :
                    </label>
                    <input
                      type="file"
                      id="ttAthorization"
                      name="ttAthorization"
                    />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ppt">PPT Available :</label>
                    <input type="file" id="ppt" name="ppt" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="coverLetter">Covering Letter :</label>
                    <input type="file" id="coverLetter" name="coverLetter" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
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
                    <input
                      type="file"
                      id="ttAthorization"
                      name="ttAthorization"
                    />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ppt">PPT Available :</label>
                    <input type="file" id="ppt" name="ppt" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="coverLetter">Covering Letter :</label>
                    <input type="file" id="coverLetter" name="coverLetter" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
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
                    ></textarea>
                    <input type="file" name="techSpecFile" id="techSpecFile" />
                  </div>
                </div>
              </div>

              <div className={stl.formBtnContainer}>
                <button type="button">Submit</button>
                <button type="button">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createclient;

const mfName = ["Tata", " Honda", "sukesh", " Dell"];
const product = ["Dell", "Asus", " Lava", " Lenovo", " HP"];
const gst = ["5%", "6%", "8%"];
const mou = ["mou1", "mou3", "mou4"];
