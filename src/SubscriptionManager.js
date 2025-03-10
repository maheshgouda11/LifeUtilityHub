import React, { useState, useEffect, useCallback } from 'react';
import SubscriptionForm from './Subscription Manager/SubscriptionForm';
import SubscriptionList from './Subscription Manager/SubscriptionList';
import RenewalReminder from './Subscription Manager/RenewalReminder';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

const SubscriptionManager = () => {
  const [subscriptions, setSubscriptions] = useState(() => {
    const savedSubscriptions = localStorage.getItem('subscriptions');
    return savedSubscriptions ? JSON.parse(savedSubscriptions) : [];
  });
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [upcomingSubscriptions, setUpcomingSubscriptions] = useState([]);

  const addSubscription = (subscription) => {
    const updatedSubscriptions = [...subscriptions, subscription];
    setSubscriptions(updatedSubscriptions);
    localStorage.setItem('subscriptions', JSON.stringify(updatedSubscriptions));
  };

  const editSubscription = (updatedSubscription) => {
    const updatedSubscriptions = subscriptions.map((sub) =>
      sub.name === updatedSubscription.name ? updatedSubscription : sub
    );
    setSubscriptions(updatedSubscriptions);
    localStorage.setItem('subscriptions', JSON.stringify(updatedSubscriptions));
    setCurrentSubscription(null);
  };

  const deleteSubscription = (index) => {
    const updatedSubscriptions = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(updatedSubscriptions);
    localStorage.setItem('subscriptions', JSON.stringify(updatedSubscriptions));
  };

  const checkRenewals = useCallback(() => {
    const today = new Date();
    const upcoming = subscriptions.filter((subscription) => {
      const renewalDate = new Date(subscription.renewalDate);
      const timeDiff = renewalDate.getTime() - today.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      return daysDiff <= 7 && daysDiff >= 0;
    });

    setUpcomingSubscriptions(upcoming);
  }, [subscriptions]);

  useEffect(() => {
    checkRenewals();
  }, [checkRenewals]);

  return (
    <div className="App container">  
        <div class="custom-navbar navbar navbar-light bg-light"> 
        
        <h1 className="navbar-brand">Subscription Manager</h1>
      </div>
      
      <SubscriptionForm
        addSubscription={addSubscription}
        editSubscription={editSubscription}
        currentSubscription={currentSubscription}
      />
      <br>
        </br>
        <br>
        </br>
      <SubscriptionList
        subscriptions={subscriptions}
        deleteSubscription={deleteSubscription}
        setCurrentSubscription={setCurrentSubscription}
      />

      <RenewalReminder upcomingSubscriptions={upcomingSubscriptions} />
</div>
  );
};

export default SubscriptionManager;
