import { Button } from '@mantine/core';
import { useContext } from 'react';
import { createStyles } from '@mantine/core';
import { ModeContext } from '../../Context/Mode';
import './styles.scss';

export const useStyles = createStyles((theme) => ({
  button: {
    borderRadius: theme.radius.sm,
  },
}))

function Main() {
  const { classes } = useStyles();
  const { mode } = useContext(ModeContext);
  return (
    <>
    <Button
      id="my-button"
      className={classes.button}
      variant="gradient"
      gradient={{ from: 'cyan.9', to: 'grape.9', deg: 90}}
      size="md"
      uppercase
    >
      Click me!
    </Button>

  <h3>{mode} mode from context!</h3>
  </>
  ) 
}

export default Main;

 