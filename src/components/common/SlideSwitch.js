import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

export default function SlideSwitch({label, onChange}) {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={1}
          control={<Switch color="primary" onChange={onChange}/>}
          label={label}
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}