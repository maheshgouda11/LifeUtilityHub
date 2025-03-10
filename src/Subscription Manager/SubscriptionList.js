import React from 'react';

const SubscriptionList = ({ subscriptions, deleteSubscription, setCurrentSubscription }) => {
  return (
    <div className="table-responsive">
      <h3>Subscription List</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Cost</th>
            <th>Renewal Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription, index) => (
            <tr key={index}>
              <td>{subscription.name}</td>
              <td>{subscription.type}</td>
              <td>{subscription.cost}</td>
              <td>{subscription.renewalDate}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => setCurrentSubscription(subscription)}
                >
                  Edit
                </button>
                
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteSubscription(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionList;
