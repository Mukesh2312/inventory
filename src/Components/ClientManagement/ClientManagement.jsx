import stl from "./ClientManagement.module.css";
import FilterIcon from "../IconComponents/FilterIcon";
import SearchIcon from "../IconComponents/SearchIcon";
import { data } from "../IconComponents/clientData";
import { useNavigate, Outlet } from "react-router-dom";

const ClientManagement = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    {
      navigate("/create-client");
    }
  };
  return (
    <>
      <Outlet></Outlet>
      {/* <center> <h1>Client Management</h1></center> */}
      <div id={stl.clientMng}>
        <div className={stl.topcontent}>
          <div className={stl.heading}>
            <h2>Client Management</h2>
            <div className={stl.btnContainer}>
              <button className={stl.Btn} onClick={onClickHandler}>
                Create
              </button>
            </div>
          </div>
          <div className={stl.searchBarContainer}>
            <div className={stl.searchInnerContainer}>
              <input type="text" className="searchInput" placeholder="Search" />
              <button>
                <SearchIcon />
              </button>
            </div>
            <div className={stl.filterBtn}>
              <FilterIcon />
              Filter
            </div>
          </div>
        </div>

        {console.log(data)}
        <div className={stl.hrLine}></div>

        {/* client data */}
        {/* <div className={stl.dataContainer}>
                    <div className={stl.dataInnerContainer}>
                        <div className={stl.item}>
                            Sr. No.
                        </div>
                        <div className={stl.item}>
                            Dealer Name
                        </div>
                        <div className={stl.item}>
                            Manufracture Name
                        </div>
                        <div className={stl.item}>
                            Name of Product
                        </div>
                        <div className={stl.item}>
                            Product Code
                        </div>
                        <div className={stl.item}>
                            HSN Code
                        </div>
                        <div className={stl.item}>
                            {/* <button>View Details</button> */}
        {/* Action
                        </div>


                    </div>
                    <div className={stl.brightHrLine}>

                    </div>

                    {
                        data.map((item) => {
                            return (
                                <>
                                    <div className={stl.dataItemContainer} key={item.id}>
                                        <div className={stl.dataItem}>
                                            {item.sr_no}
                                        </div>
                                        <div className={stl.dataItem}>
                                            {item.dealer_name}
                                        </div>

                                        <div className={stl.dataItem}>
                                            {item.manufracturer_name}
                                        </div>
                                        <div className={stl.dataItem}>
                                            {item.name_of_product}
                                        </div>
                                        <div className={stl.dataItem}>
                                            {item.product_code}
                                        </div>
                                        <div className={stl.dataItem}>
                                            {item.hsn_no}
                                        </div>
                                        <div className={stl.dataItem}>
                                            <button>View Details</button>

                                        </div>


                                    </div>
                                </>
                            )
                        })
                    }
                </div> } */}

        {/* {
                        data.map((item, index) => {
                            return (
                                <>
                                    <div className={stl.dataContainer}>

                                    </div>
                                </>
                            )
                        })
                    } */}

        <div className={stl.dataContainer}>
          <div className={stl.tableContainer}>
            <table className={stl.theding}>
              <thead>
                <tr>
                  <th className={stl.theding}>Sr. No.</th>
                  <th className={stl.theding}>Dealer Name</th>
                  <th className={stl.theding}>Manufacturer Name</th>
                  <th className={stl.theding}>Name of Product</th>
                  <th className={stl.theding}>Product Code</th>
                  <th className={stl.theding}>HSN No.</th>
                  <th className={stl.theding}>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <td>{item.sr_no}</td>
                        <td>{item.dealer_name}</td>
                        <td>{item.manufracturer_name}</td>
                        <td>{item.name_of_product}</td>
                        <td>{item.product_code}</td>
                        <td>{item.hsn_no}</td>
                        <td>
                          <button className={stl.actionBtn}>
                            View Details
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientManagement;
