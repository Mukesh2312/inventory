import { useState } from "react";
import stl from "./TenderDetails.module.css";
import LineBreak from "../../IconComponents/LineBreak";
import { Link, useNavigate } from "react-router-dom";
const TenderDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id={stl.tenderDetailes}>
        <div className={stl.tenderHead}>
          <div className={stl.headImgcontainer}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.heading}>Tender Deatils</h2>
        </div>
        <div className={stl.detailContainer}>
          <div className={stl.detailInerContainer}>
            {Object.entries(bidData)?.map(([key, value], index) => {
              return (
                <>
                  <div className={stl.item} key={index}>
                    <div className={`${stl.itemContent} ${stl.itemName}`}>
                      {key} :
                    </div>
                    <div className={`${stl.itemContent} ${stl.itemVal}`}>
                      {value}
                    </div>
                  </div>
                  {(key === "Tender Name" ||
                    key === "Description" ||
                    key === "Bid Validity") && <LineBreak />}
                </>
              );
            })}
          </div>
        </div>
        <div className={stl.AuthPersonDetails}>
          <div className={stl.authInnerContainer}>
            <p className={stl.personPost}>Authorised Person :</p>
            <p className={stl.personName}>ABC</p>
          </div>
          <div className={stl.authInnerContainer}>
            <p className={stl.personPost}>Authorised Manager :</p>
            <p className={stl.personName}>ABC</p>
          </div>
        </div>

        <div className={stl.formBtnContainer}>
          <Link to="/uploaded-document">
            <button>Veiw Documents</button>
          </Link>

          <button onClick={() => navigate(-1)}>OK</button>
          <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
        <div className={stl.editBtn}>
          <button>Edit</button>
          <button>Pdf</button>
        </div>
      </div>
    </>
  );
};

export default TenderDetails;

const bidData = {
  "Tender Id": "T/2023/01",
  "Tender Name": "Surgisul Healthcare Pvt Ltd",
  Title: "Submission process by contractors to various levels of government",
  "Issue Date": "02/04/23",
  "Tender Floating Date": "02/04/23",
  Description: "N/A",
  "Bidder Name": "Unisol",
  "Document Download/Sale Start Date": "02/04/2023",
  "Document Download/Sale End Date": "02/04/2023",
  "Bid Submission Start Date": "02/04/2023",
  "Bid Submission End Date": "02/04/2023",
  "Bid Validity": "10 Days",
  "Prebid Meeting Address Portal":
    "www.SurgiSul Healthcare Solutions Pvt Ltd.com",
  "Technical Bid Opening Date": "02/04/2023",
  "Period Of Work": "02/04/2023",
  Location: "Nagpur",
  Pincode: "440016",
  "Bid Opening Place": "02/04/2023",
  "Product Category": "Service",
  "Nature Of Work": "Proposals Invited",
  "Proposals Invited By": "Proposals Invited By name",
  "Financial Proposals Opening Date": "03/02/2023",
  "Mode Of Submitting Proposals":
    "www.SurgiSul Healthcare Solutions Pvt Ltd.com",
  "Tender Website": "www.SurgiSul Healthcare Solutions Pvt Ltd.com",
  "Cost Of RPF Document": "Amount",
  "Earnest Money Deposit": "Amount",
  "Mode Of Payment": "Mode of Payment",
  Amount: "Amount",
  Bank: "Bank Name",
  "Performance Security": "Performance Security",
  "Method Of Selection": "Method Of Selection",
  "Objection Charges": "Objection Charge",
};

//manual code for displaying tender details
{
  /* <div className={stl.item}>
                            <div className={`${stl.itemContent} ${stl.itemName}`}>
                                Tender Id :
                            </div>
                            <div className={stl.itemContent}>
                                15626
                            </div>
                        </div>
                        <div className={stl.item}>
                            <div className={`${stl.itemContent} ${stl.itemName}`}>
                                Ternder Name :
                            </div>
                            <div className={stl.itemContent}>
                                SurgiSul Healthcare Pvt Ltd
                            </div>
                        </div>
                        <br />

                        <div className={stl.item}>
                            <div className={`${stl.itemContent} ${stl.itemName}`}>
                                Title :
                            </div>
                            <div className={stl.itemContent}>
                                Submission process by contractors to various levels of goverment
                            </div>
                        </div>
                        {/* <br /> */
}
// <div className={stl.item}>
//     <div className={`${stl.itemContent} ${stl.itemName}`}>
//         Issue Date :
//     </div>
//     <div className={stl.itemContent}>
//         02/04/23
//     </div>
// </div>
// <div className={stl.item}>
//     <div className={`${stl.itemContent} ${stl.itemName}`}>
//         Tender Floating Date :
//     </div>
//     <div className={stl.itemContent}>
//         02/04/23
//     </div>
// </div>
// <div className={stl.item}>
//     <div className={`${stl.itemContent} ${stl.itemName}`}>
//         Description :
//     </div>
//     <div className={stl.itemContent}>
//         N/A
//     </div>
// </div>
