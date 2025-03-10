import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RenewalReminder = ({ upcomingSubscriptions }) => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Upcoming Renewals</h3>
      {upcomingSubscriptions.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No upcoming renewals.
        </div>
      ) : (
        <div className="row">
          {upcomingSubscriptions.map((subscription, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{subscription.name}</h5>
                  <p className="card-text">Type: {subscription.type}</p>
                  <p className="card-text">Cost: ${subscription.cost}</p>
                  <p className="card-text">Renewal Date: {subscription.renewalDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RenewalReminder;
