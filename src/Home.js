import  './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home= () => {

    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" style={{paddingLeft:"10px", paddingRight:"10px"}}>
        <a class="navbar-brand" href="#logo">Life Utilities</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#a">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/task">Task Scheduler</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/expense">Expense Tracker</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pmanager">Password Manager</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/subscription">Subscription Manager</a>
                </li>
            </ul>
        </div>
    </nav>

    {/* <!-- Header Section --> */}
    <header class="jumbotron text-center">
        <div class="container">
            <h1 class="display-4">Welcome to Your Life Utilities Hub</h1>
            <p class="lead">Manage your tasks, expenses, passwords, and subscriptions all in one place.</p>
            
        </div>
    </header>

    {/* <!-- Info Section --> */}
    <section class="container my-5">
        <div class="row mb-4">
            <div class="col-12">
                <div class="card shadow">
                    <div class="card-body">
                        <h2 class="card-title">About Our Utilities</h2>
                        <p class="card-text">Our web application provides you with essential tools to manage your daily life efficiently. Whether you need to schedule tasks, track expenses, manage passwords, or manage subscriptions, we've got you covered. Explore each tool and simplify your daily routines.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">Task Scheduler</h5>
                        <p class="card-text">Organize your tasks and boost your productivity with our intuitive task scheduler. Keep track of deadlines and manage your to-do lists effectively.</p>
                        <a href="/task" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">Expense Tracker</h5>
                        <p class="card-text">Keep track of your spending and stay within budget. Our expense tracker helps you monitor your finances and save money.</p>
                        <a href="/expense" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">Password Manager</h5>
                        <p class="card-text">Securely store and manage your passwords with our password manager. Keep your online accounts safe and easily accessible.</p>
                        <a href="/pmanager" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">Subscription Manager</h5>
                        <p class="card-text">Never miss a renewal date again. Our subscription manager helps you keep track of all your subscriptions in one place.</p>
                        <a href="/subscription" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Footer Section  */}
    <footer class="bg-light py-4">
        <div class="container text-center">
            <p>&copy; 2024 Life Utilities. All rights reserved.</p>
        </div>
    </footer>
      </div>
    );
};

export default Home;