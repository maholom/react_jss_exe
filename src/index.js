import React from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    '*, *:before, *:after': {
      boxSizing: 'border-box',
    },
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
      margin: '0',
    },
    '#root': {
      height: '100%',
    },
  },
  // --- please fill in style bellow --------------------------------------->
  page: {},
  blocksHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40%',
  },
  block: {
    width: '150px',
    height: '150px',
    background: 'green',
    '&:first-child': {
      background: 'red',
    },
    '&:last-child': {
      background: 'blue',
    },
  },

  '@media (min-width: 768px)': {
    blocksHolder: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.blocksHolder}>
        {[...Array(3)].map((e, i) => (
          <div className={classes.block} key={i} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
