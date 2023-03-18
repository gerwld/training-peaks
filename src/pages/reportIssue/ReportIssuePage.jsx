import React from "react";
import ReportIssueForm from "./ReportIssueForm";

import s from "./s.module.css";

const ReportIssuePage = () => {
 const onReport = () => {};
 return (
  <div className={`page_content page_content__100 ${s.report_page}`}>
    <div className="page-header">
      <h1 className="page-header__title">Report Issue</h1>
      <p className="page-header__desc">Experiencing issues? Let us know. We value your feedback and strive for a seamless experience. Our team will investigate and resolve promptly.</p>
    </div>
    <ReportIssueForm onReport={onReport} />

  </div>
 );
};

export default ReportIssuePage;
