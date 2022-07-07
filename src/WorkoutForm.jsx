import React, { useState } from 'react';
import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { Button } from '@mui/material';

const WORKOUTS_URL = "http://localhost:9292/workouts"

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Input = styled(InputUnstyled)(
  ({ theme }) => `
  
  .${inputUnstyledClasses.input} {
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

function WorkoutForm({ onCreateWorkout }) {
  //add state for the workout form
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [level, setLevel] = useState("")

  
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleLevelChange(event){
    setLevel(event.target.value);
  }


  function handleWorkoutSubmit(e){
    e.preventDefault();

    const formData = {
      title: title,
      date: date,
      level: level
    };
    //what do we do once this data is submitted? 
    //send the state value of submittedData as a POST request to the correct path
    fetch(WORKOUTS_URL, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => response.json())
.then(newWorkout => {
  onCreateWorkout(newWorkout);
})

    setTitle("");
    setDate("");
    setLevel("");
  }

//if the formData input values are not all filled out, then throw out error 
//else, do the POST request 


  return (
    <form onSubmit={handleWorkoutSubmit}>
      <Label>Title:</Label>
      <Input type="text" onChange={handleTitleChange} value={title}/>
      <HelperText />
      <Label>Date:</Label>
      <Input type="text" onChange={handleDateChange} value={date}/>
      <HelperText />
      <Label>Level:</Label>
      <Input type="text" onChange={handleLevelChange} value={level}/>
      <HelperText />
    <br />
    <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
}


export default WorkoutForm;
