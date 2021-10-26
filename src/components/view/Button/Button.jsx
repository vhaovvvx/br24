import React from 'react';

function Button(props) {
  return (
    <form action='/action_page.php'>
      <label for='cars'>Choose a car:</label>
      <select id='cars' name='cars'>
        <option value='volvo'>Volvo XC90</option>
        <option value='saab'>Saab 95</option>
        <option value='mercedes'>Mercedes SLK</option>
        <option value='audi'>Audi TT</option>
      </select>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default Button;
