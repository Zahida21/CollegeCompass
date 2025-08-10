import React from 'react'
import { Link } from 'react-router-dom'
import './FinalCompanySubmission.css'

function FinalCompanySubmision() {
  return (
    <div className="submission-container">
                      <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>
                <div className="blob blob4"></div>
      <h4>Thank you, your data has been successfully collected</h4>
      {/* <Link className="review-link" to="/CandidateOverview">Recall</Link> */}
      <Link className="review-link" to="/">Get Back</Link>
    </div>
  )
}

export default FinalCompanySubmision
