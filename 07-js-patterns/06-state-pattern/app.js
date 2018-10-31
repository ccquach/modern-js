function PageState() {
  let currentState = new homeState();

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
}

// States
const homeState = function() {
  document.getElementById('heading').textContent = null;
  document.getElementById('content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};

const aboutState = function() {
  document.getElementById('heading').textContent = 'About Us';
  document.getElementById('content').innerHTML = `
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam molestias ratione accusamus dolorum officia minus laboriosam ducimus? Explicabo ipsam, iusto fuga quas nihil et, harum a quos reprehenderit, distinctio officia.</p>
  `;
};

const contactState = function() {
  document.getElementById('heading').textContent = 'Contact';
  document.getElementById('content').innerHTML = `
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter Name">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
};

// Instantiate new page state
const page = new PageState();

// Initialize page with starting state
page.init();

// Event listeners
document.getElementById('home').addEventListener('click', e => {
  e.preventDefault();
  page.change(new homeState());
});

document.getElementById('about').addEventListener('click', e => {
  e.preventDefault();
  page.change(new aboutState());
});

document.getElementById('contact').addEventListener('click', e => {
  e.preventDefault();
  page.change(new contactState());
});
