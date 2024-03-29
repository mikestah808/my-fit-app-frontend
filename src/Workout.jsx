import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



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










function Workout({ workout, onDeleteWorkout, handleEditButtonClick, editWorkout, setEditWorkout, onUpdateWorkout, setTitle, setLevel }) {

  const { title, level } = workout
  const [edit, setEdit] = useState(false)

  function handleDeleteClick() {
    fetch(`http://localhost:9292/workouts/${workout.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(() => {
        onDeleteWorkout(workout.id)
      })
  }


  function handleEditClick(){
    setEdit((edit) => !edit)
    fetch(`http://localhost:9292/workouts/${workout.id}`)
    .then((resp) => resp.json())
    .then((selectedWorkout) => handleEditButtonClick(selectedWorkout));
  }

  function handleChange(e){
    setEditWorkout({...editWorkout,[e.target.name]: e.target.value})
  }


  function handleEditSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:9292/workouts/${workout.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editWorkout),
    })
      .then((r) => r.json())
      .then((updatedWorkout) => onUpdateWorkout(updatedWorkout));

      setTitle("");
      setLevel("");

  }
  
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Difficulty: {level}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={ Link } to={`workouts/${workout.id}`} >View</Button>
        <Button size="small" onClick={handleEditClick}>Edit</Button>
        <Button onClick={handleDeleteClick} size="small">Delete</Button>
      </CardActions>
      
    { edit ? (
       <form onSubmit={handleEditSubmit}>
       <Label>Title:</Label>
       <Input type="text" value={editWorkout.title} name="title" onChange={handleChange}/>
       <HelperText />
       <Label>Level:</Label>
       <Input type="text" value={editWorkout.level} name="level" onChange={handleChange}/>
       <HelperText />
     <br />
     <Button variant="contained" type="submit">Edit Workout</Button>
     </form>
    ) : null }

    </Card>
  );
}


export default Workout;
