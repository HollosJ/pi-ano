import React from 'react';

const buttonStyles = 'btn btn--primary';

const Button = ({ children, onClick }) => {
  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

const KeyPad = ({ handleInput }) => {
  const handleButtonPress = (event) => {
    handleInput(event.target.innerText);
  };

  return (
    <div className="grid grid-cols-3 gap-2 md:hidden">
      <Button className={buttonStyles} onClick={handleButtonPress}>
        1
      </Button>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        2
      </Button>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        3
      </Button>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        4
      </Button>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        5
      </Button>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        6
      </Button>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        7
      </Button>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        8
      </Button>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        9
      </Button>

      <span></span>

      <Button className={buttonStyles} onClick={handleButtonPress}>
        0
      </Button>

      <span></span>
    </div>
  );
};

export default KeyPad;
