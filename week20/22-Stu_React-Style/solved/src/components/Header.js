import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  card: {
    background: 'red',
    fontSize: '50px',
    color: 'white',
    padding: '25px 0 0 0',
    textAlign: 'center',
    margin: '0 0 0 0',
  }
}

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles.card}>
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
