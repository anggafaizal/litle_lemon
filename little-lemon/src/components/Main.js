
import React, { useReducer } from 'react';
import '../components/littlelemon.css'
import food from '../components/assets/resfood.jpg';
import greeksalad from '../components/assets/greeksalad.jpg';
import bruchetta from '../components/assets/bruchetta.svg';
import Lemon from '../components/assets/lemon.jpg';
import user1 from '../components/assets/Andrew.jpg';
import user2 from '../components/assets/daphne.jpg';
import user3 from '../components/assets/MEE.jpg';
import mario from '../components/assets/mario.jpg';
import adrian from '../components/assets/adrian.jpg';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { Newpage } from './newpage';


export const initializeTimes = () => {
  return [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
};

export const updateTimes = (currentState) => {
  return currentState; // Return the current state
};

export const Main = () => {
  const navigate = useNavigate();

  // Define reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return initializeTimes(); // For now, return initial times regardless of date
      default:
        return state;
    }
  };

  // Define initial state using initializeTimes function
  const initialState = initializeTimes();

  // Define reducer state using useReducer
  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  // Define updateTimes function
  const updateTimes = () => {
    dispatch({ type: 'UPDATE_TIMES' }); // Dispatch action to update times
  };



  return (
    <main>
      <section className="main-section">
        <article className="main-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned <br />
            Mediterranean restaurant, <br />
            focused on traditional <br />
            recipes served with a modern <br />
            twist.
          </p>
          
            <button onClick={() => navigate('newpage')}>Reserve a Table</button>
        

        </article>
        <figure className="main-image">
          <img src={food} alt="Restaurant food" />
        </figure>
      </section>

      <section className="specials-section">
  <div className="header-container">
    <h2>This Week's Specials!</h2>
    <button>Online Menu</button>
  </div>

  {/* Greek Salad */}
  <div className="article-wrapper">
    <article className="greek-salad">
      <img src={greeksalad} alt="Greek Salad" />
      <div className="article-content">
        <div className="article-header">
          <h3>Greek Salad</h3>
          <p>$12.99</p>
        </div>
        <p>The famous greek salad of <br />
          crispy lettuce, peppers, olives,<br />
          and our Chicago style feta<br />
          cheese, garnished with<br />
          crunchy garlic and rosemary<br />
          croutons.</p>
        <p>Order for Delivery</p>
      </div>
    </article>
  </div>

  {/* Bruchetta */}
  <div className="article-wrapper">
    <article className="Bruchetta">
      <img src={bruchetta} alt="bruchetta" />
      <div className="article-content">
        <div className="article-header">
          <h3>Bruchetta</h3>
          <p>$ 5.99</p>
        </div>
        <p>Our Bruchetta is made from<br />
          grilled bread that has been<br />
          smeared with garlic and<br />
          seasoned with salt and olive<br />
          oil</p>
        <p>Order for Delivery</p>
      </div>
    </article>
  </div>

  {/* Lemon Dessert */}
  <div className="article-wrapper">
    <article className="Bruchetta">
      <img src={Lemon} alt="Lemon Dessert" />
      <div className="article-content">
        <div className="article-header">
          <h3>Lemon Dessert</h3>
          <p>$ 5.00</p>
        </div>
        <p>This comes straight from<br />
          grandma's recipe book, every<br />
          last ingredient has been<br />
          sourced abd is as authentic<br />
          as can be imagined.</p>
        <p>Order for Delivery</p>
      </div>
    </article>
  </div>
</section>




{/* TESTIMONIAL */}

<section className="testimonials-section">
  <h2>Our Testimonials</h2>

  {/* Testimonial 1 */}
  <article className="testimonial-card">
    <img src={user1} alt="User 1" />
    <div class="card-content">
      <p>
        Little Lemon is a true culinary gem!<br />
        From the inviting ambiance to the<br />
        exceptional dishes crafted with fresh,<br />
        local ingredients, every visit is a<br />
        delightful experience.
      </p>
      <div class="ratings">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>
      </div>
      <p className="user-name">Andrew Ng</p>
    </div>
  </article>

  {/* Testimonial 2 */}
  <article className="testimonial-card">
    <img src={user2} alt="User 2" />
    <div class="card-content">
      <p>
        Little Lemon is undeniably a culinary<br />
        treasure! thanks to the welcoming<br />
        ambiance and the exceptional dishes<br />
        skillfully crafted.
      </p>
      <div class="ratings">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
      </div>
      <p className="user-name">Daphne Koller</p>
    </div>
  </article>

  {/* Testimonial 3 */}
  <article className="testimonial-card">
    <img src={user3} alt="User 3" />
    <div class="card-content">
      <p>
        Little Lemon is a true culinary gem!<br />
        From the inviting ambiance to the<br />
        exceptional dishes crafted with fresh,<br />
        local ingredients, every visit is a<br />
        delightful experience.
      </p>
      <div class="ratings">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
      </div>
      <p className="user-name">Mohammed Fuseini</p>
    </div>
  </article>
</section>




{/*ABOUT*/}

<section className="about-section">
  <article>
    <h2>About Little Lemon</h2>
    <h3>Chicago</h3>
    <p>
      Little Lemon is owned by two Italian brothers,<br />
      Mario and Adrian, who moved to the United States<br />
      to pursue their shared dream of owning a restaurant.<br />
      To craft the menu, Mario relies on family recipes and<br />
      his experience as a chef in Italy. Adrian does all<br />
      the marketing for the restaurant and led the effort to<br />
      expand the menu beyond classic Italian to incorporate<br />
      additional cuisines from the Mediterranean region.<br /><br />

      Little Lemon is a charming neighborhood bisto<br />
      that serves simple food and classic cocktail in a<br />
      lively but casual environment. The restaurant<br />
      features a locally-sourced menu with daily specials.
    </p>
  </article>

  <aside className="about-images">
    <figure>
      <img src={mario} alt="Mario" />
    </figure>
    <figure>
      <img src={adrian} alt="Adrian" />
    </figure>
  </aside>

</section>


<Footer />

    </main>
  );
}


