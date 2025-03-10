import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubscriptionForm = ({ addSubscription, editSubscription, currentSubscription }) => {
  const [subscription, setSubscription] = useState({
    name: '',
    type: '',
    cost: '',
    renewalDate: ''
  });

  useEffect(() => {
    if (currentSubscription) {
      setSubscription(currentSubscription);
    }
  }, [currentSubscription]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscription((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentSubscription) {
      editSubscription(subscription);
    } else {
      addSubscription(subscription);
    }
    setSubscription({ name: '', type: '', cost: '', renewalDate: '' });
  };

  return (
    <div class="container mt-3">
    <form action="#" method="post" onSubmit={handleSubmit}> <div class="row">
        <div class="col-md-6 mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" value={subscription.name} onChange={handleChange} required class="form-control"/>
        </div>
        <div class="col-md-6 mb-3">
          <label for="type" class="form-label">Type</label>
          <input type="text" name="type" id="type" placeholder="Type" value={subscription.type}onChange={handleChange} required class="form-control"/>
        </div>
        <div class="col-md-6 mb-3">
          <label for="cost" class="form-label">Cost</label>
          <input type="number" name="cost" id="cost" placeholder="Cost" value={subscription.cost} onChange={handleChange} required class="form-control"/>
        </div>
        <div class="col-md-6 mb-3">
          <label for="renewalDate" class="form-label">Renewal Date</label>
          <input type="date" name="renewalDate" id="renewalDate" value={subscription.renewalDate} placeholder="Renewal Date" onChange={handleChange} required class="form-control"/>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Add Subscription</button>
      </div>
    </form>
  </div>
  );
};

export default SubscriptionForm;
