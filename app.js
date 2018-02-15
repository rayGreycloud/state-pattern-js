// State Pattern 

const PageState = function () {
  let currentState = new homeState(this);
  
  this.init = function () {
    this.change(new homeState);
  }
  
  this.change = function (state) {
    currentState = state;  
  }
};

const homeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div classname="jumbotron">
      <h1 classname="display-3">Home State</h1>
      <p classname="lead">This is the Home State.</p>    
    </div>
  `;
}

const aboutState = function (page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <div>
      <p classname="lead">This is the About Us page.</p>    
    </div>
  `;
};

const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <div>
      <form action="">
        <div classname="form-group">
          <label>Name</label>
          <input type="text" classname="form-control" />
        </div>
        <div classname="form-group">
          <label>Email</label>
          <input type="email" classname="form-control" />
        </div>
        <button type="submit" classname="btn btn-primary">Submit</button>
      </form>    
    </div>
  `;
};

// Initiate pageState
const page = new PageState();

// Init the first state 
page.init();

// UI vars 
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact'),
      brand = document.getElementById('brand');

// Event listeners 
home.addEventListener('click', (e) => {
  page.change(new homeState);
  
  e.preventDefault();
});

about.addEventListener('click', (e) => {
  page.change(new aboutState);
  
  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState);
  
  e.preventDefault();
});

brand.addEventListener('click', (e) => {
  page.change(new homeState);
  
  e.preventDefault();
});






