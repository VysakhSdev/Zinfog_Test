import PropTypes from "prop-types";
import "./OnClickingApplyFilter.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OnClickingApplyFilter = ({ className = "" }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    fromDate: "",
    eta: "",
    patientName: "",
    hospitalId: "",
    testName: "",
    billNo: "",
    doctorName: "",
  });
  const [username, setUserName] = useState("");

  const tableData = [
    {
      orderNo: "A19023",
      date: "01/05/2023",
      patientName: "Sankaranarayanan",
      hospitalId: "DH2023/0001245",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Arun K Thambi",
      eta: "03/05/2023",
      status: "Ready",
      action: <img className="home-icon" alt="" src="/download.svg" />,
    },
    {
      orderNo: "A19024",
      date: "01/05/2023",
      patientName: "Baby. Alan",
      hospitalId: "DH2023/0001242",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Abdul Siddique",
      eta: "03/05/2023",
      status: "Partial Report",
      action: <img className="home-icon" alt="" src="/download.svg" />,
    },
    {
      orderNo: "A19025",
      date: "01/05/2023",
      patientName: "Baby. Anirudh",
      hospitalId: "DH2023/0001212",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Raveendran",
      eta: "03/05/2023",
      status: "Lab dropped",
      action: <img className="home-icon" alt="" src="/download.svg" />,
    },
    {
      orderNo: "A19026",
      date: "01/05/2023",
      patientName: "Sankaranarayanan Warrier",
      hospitalId: "DH2023/0001247",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Vignesh Muraleedharan",
      eta: "03/05/2023",
      status: "Ready",
      action: <img className="home-icon" alt="" src="/download.svg" />,
    },

    // Add more objects as needed
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleSearch2 = () => {
    const filteredBySearchQuery = tableData.filter(
      (item) =>
        item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.testName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filtersLower = {
      patientName: filters.patientName?.toLowerCase(),
      hospitalId: filters.hospitalId?.toLowerCase(),
      testName: filters.testName?.toLowerCase(),
      billNo: filters.billNo?.toLowerCase(),
      doctorName: filters.doctorName?.toLowerCase(),
    };

    const filteredData = filteredBySearchQuery.filter(
      (item) =>
        (!filters.fromDate || item.date >= filters.fromDate) &&
        (!filters.eta || item.date <= filters.eta) &&
        (!filters.patientName ||
          item.patientName.toLowerCase().includes(filtersLower.patientName)) &&
        (!filters.hospitalId ||
          item.hospitalId.toLowerCase().includes(filtersLower.hospitalId)) &&
        (!filters.testName ||
          item.testName.toLowerCase().includes(filtersLower.testName)) &&
        (!filters.billNo ||
          item.orderNo.toLowerCase().includes(filtersLower.billNo)) &&
        (!filters.doctorName ||
          item.doctorName.toLowerCase().includes(filtersLower.doctorName))
    );

    return filteredData;
  };

  const filteredData = handleSearch2();

  const handleClear = () => {
    setSearchQuery("");
    setFilters({
      fromDate: "",
      eta: "",
      patientName: "",
      hospitalId: "",
      testName: "",
      billNo: "",
      doctorName: "",
    });
  };

  const handleLogOut = () => {
    localStorage.removeItem("User_token");
    localStorage.removeItem("User_name");
    toast.success("Log out Successfully");
    navigate("/");
  };

  useEffect(() => {
    setUserName(localStorage.getItem("User_name"));
  }, []);


  return (
    <div
      className={`on-clicking-apply-filter ${className}`}
      style={{ width: "100vw" }}
    >
      <div className="line-roundedchevron-down" />
      <header className="navbar-parent" style={{ width: "100vw" }}>
        <div className="navbar">
          <img
            className="navbar-child"
            loading="lazy"
            alt=""
            src="/group-367.svg"
          />
          <div className="frame-parent">
            <div className="get-the-app-parent">
              <div className="get-the-app">Get the app</div>
              <div className="frame-child" />
              <div className="add-lab">Add lab</div>
            </div>
            <div className="login-form">
              <a className="loginsign-up">{username}</a>
              <img
                className="login-form-child"
                loading="lazy"
                alt=""
                src="/frame-337.svg"
              />
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="frame-item" />
          <img
            className="frame-inner"
            loading="lazy"
            alt=""
            src="/group-368.svg"
            onClick={handleLogOut}
          />
        </div>
      </header>
      <main className="frame-group">
        <div className="rectangle-group">
          <div className="rectangle-div" />
          <div className="search-icon">
            <h3 className="patient-reports">Patient Reports</h3>
          </div>
          <div className="filter-alt-parent">
            <div className="filter-alt">
              <div className="filter-alt-child" />
              <div className="filter-dropdown">
                <div className="filter-input">
                  <div className="vector-parent">
                    <img className="vector-icon1" alt="" src="/vector-1.svg" />
                  </div>
                  <a className="apply-filter">Apply Filter</a>
                </div>
              </div>
            </div>
            <div className="rectangle-container">
              <div className="frame-child1" />
              <input
                className="search-by-doctor"
                placeholder="Search by Doctor Name/ Patient Name/ Test Name..."
                type="text"
                value={searchQuery}
                onChange={handleSearch}
              />
              <div className="frame-wrapper">
                <img className="group-icon" alt="" src="/group-362.svg" />
              </div>
            </div>
          </div>
        </div>
        <section className="frame-section">
          <div className="frame-child2" />
          <div className="reports-table">
            <div className="reports-table-child" />
            <div className="reports-table-inner">
              <div className="group-div">
                <div className="frame-child3" />
                <div className="search-message-cell">
                  <div className="from-to-header-parent">
                    <div className="from-to-header">
                      <div className="from-to-header-inner">
                        <div className="frame-container">
                          <div className="from-date-parent">
                            <div className="from-date">From Date</div>
                            <div className="patient-name">Patient Name</div>
                          </div>
                          <div className="bill-no">Bill No</div>
                        </div>
                      </div>
                      <div className="from-header">
                        <div className="first-row-values">
                          <div className="first-row-values-child" />
                          <div className="first-row-empty-wrapper">
                            <input
                              className="sankaranarayanan"
                              placeholder="Sankaranarayanan"
                              type="date"
                              value={filters.fromDate}
                              onChange={(e) => {
                                setFilters({
                                  ...filters,
                                  fromDate: e.target.value,
                                });
                              }}
                            />{" "}
                          </div>
                        </div>
                        <div className="first-row-values1">
                          <div className="first-row-values-item" />
                          <input
                            className="sankaranarayanan"
                            placeholder="Sankaranarayanan"
                            type="text"
                            value={filters.patientName}
                            onChange={(e) => {
                              setFilters({
                                ...filters,
                                patientName: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="first-row-values2">
                          <div className="first-row-values-inner" />
                          <input
                            className="dh22230003424"
                            placeholder="DH2223/0003424"
                            type="text"
                            value={filters.billNo}
                            onChange={(e) => {
                              setFilters({
                                ...filters,
                                billNo: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="patient-name-cell-wrapper">
                      <div className="patient-name-cell">
                        <div className="second-row-empty-value">
                          <div className="first-row">
                            <a className="to-date">To Date</a>
                            <div className="hospital-id">Hospital ID</div>
                          </div>
                        </div>
                        <div className="to-hospital-header">
                          <div className="second-row-value-container">
                            <div className="second-row-value-container-child" />
                            <div className="bill-no-cell">
                              <input
                                className="sankaranarayanan"
                                placeholder="Sankaranarayanan"
                                type="date"
                                value={filters.eta}
                                onChange={(e) => {
                                  setFilters({
                                    ...filters,
                                    eta: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="second-row-value-container1">
                            <div className="second-row-value-container-item" />
                            <input
                              className="dh2023000123456"
                              placeholder="DH2023/000123456"
                              type="text"
                              value={filters.hospitalId}
                              onChange={(e) => {
                                setFilters({
                                  ...filters,
                                  hospitalId: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="patient-name-cell-wrapper">
                      <div className="patient-name-cell">
                        <div className="second-row-empty-value">
                          <div className="first-row">
                            <a className="to-date">Reffer</a>
                            <div className="hospital-id">Hospital ID</div>
                          </div>
                        </div>
                        <div className="to-hospital-header">
                          <div className="second-row-value-container">
                            <div className="second-row-value-container-child" />
                            <div className="bill-no-cell">
                              <input
                                className="sankaranarayanan"
                                placeholder="Docter Name"
                                type="text"
                                // value={filters}
                                // onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="second-row-value-container1">
                            <div className="second-row-value-container-item" />

                            <select className="dh2023000123456">
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="third-row-value-container1">
                  <div className="third-row-value-container-item" />
                  <div className="please-provide-search-criteria-wrapper">
                    <div className="please-provide-search">
                      Please provide search criteria and hit search button.
                    </div>
                  </div>
                  <div className="third-row-values">
                    <button className="search-action-container">
                      <div className="action-icons-wrapper">
                        <img
                          className="action-icons"
                          alt=""
                          src="/vector-71.svg"
                        />
                      </div>
                      <a className="search" onClick={handleSearch2}>
                        Search
                      </a>
                    </button>
                    <button className="search-action-container1">
                      <div className="search-action-container-inner">
                        <img
                          className="frame-child4"
                          alt=""
                          src="/group-3341.svg"
                        />
                      </div>
                      <div className="clear" onClick={handleClear}>
                        Clear
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <table
              className="table-responsive"
              style={{ alignSelf: "stretch", marginTop: "24px" }}
            >
              <thead>
                <tr>
                  <th scope="col">Order No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Hospital ID</th>
                  <th scope="col">Test Name</th>
                  <th scope="col">Doctor Name</th>
                  <th scope="col">ETA</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data, index) => (
                  <tr key={index}>
                    <th scope="row">{data.orderNo}</th>
                    <td>{data.date}</td>
                    <td>{data.patientName}</td>
                    <td>{data.hospitalId}</td>
                    <td>{data.testName}</td>
                    <td>{data.doctorName}</td>
                    <td>{data.eta}</td>
                    <td>
                      {data.status === "Ready" ? (
                        <span
                          className="badge rounded-3 fw-semibold"
                          style={{ backgroundColor: "#89FFAA" }}
                        >
                          Ready
                        </span>
                      ) : data.status === "Partial Report" ? (
                        <span
                          className="badge rounded-3 fw-semibold"
                          style={{ backgroundColor: "#E7F880" }}
                        >
                          Partial Report
                        </span>
                      ) : data.status === "Lab dropped" ? (
                        <span
                          className="badge rounded-3 fw-semibold"
                          style={{ backgroundColor: "#F2A38A" }}
                        >
                          Lab dropped
                        </span>
                      ) : (
                        <span className="badge rounded-3 fw-semibold">
                          {data.status}
                        </span>
                      )}
                    </td>{" "}
                    <td>{data.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <footer className="content-wrapper">
            <div className="content">
              <div className="footer-left-wrapper">
                <div className="footer-left1">
                  <span>Copyright</span>
                  <span className="span2">{` `}</span>
                  <span>©</span>
                  <span className="span3">{` `}</span>
                  <span>2023 Access Home Lab Solutions</span>
                </div>
              </div>
              <img
                className="line-roundedphone-icon"
                loading="lazy"
                alt=""
                src="/line-roundedphone.svg"
              />
              <div className="right-footer">
                <b className="b">(+91) 9288008801</b>
                <div className="footer-right-wrapper">
                  <div className="footer-right1">
                    <span className="all-rights-reserved1">
                      All Rights Reserved |
                    </span>
                    <span>{` `}</span>
                    <span className="terms-and-conditions1">
                      Terms and Conditions
                    </span>
                    <span>{` `}</span>
                    <span className="span4">|</span>
                    <span>{` `}</span>
                    <span className="privacy-policy1">Privacy Policy</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};



export default OnClickingApplyFilter;
