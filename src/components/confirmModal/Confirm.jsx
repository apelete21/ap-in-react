import { useEffect } from "react";
import "./modal.css";

const Confirm = () => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       window.history.back();
  //     }, 1000);
  //   }, []);

  return (
    <>
      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="modal-title w-100">Awesome!</h4>
            </div>
            <div className="modal-body">
              <p className="text-center">Your request has been sent successfully</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success btn-block" dataDismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
