import React from 'react';
import { TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import '../../styles/TextAdd.scss';
import PropTypes from 'prop-types';

const AddTextSetting = ({ textAttribute, dispatch }) => {
  const { id, text, font } = textAttribute;
  return (
    <div className="add-text-setting">
      <TextField
        id="outlined-multiline-static"
        label="Text"
        multiline
        rows={4}
        variant="outlined"
        value={text}
        onChange={e => dispatch({ type: 'CHANGE_TEXT_STRING', id, text: e.target.value })}
      />

      <FormControl variant="outlined" style={{ width: `100%` }}>
        <InputLabel htmlFor="outlined-age-native-simple">Font</InputLabel>
        <Select
          className="add-text-font"
          native
          label="Font"
          value={font}
          onChange={e => dispatch({ type: 'CHANGE_FONT', id, font: e.target.value })}
        >
          <option value="BlackHanSans" style={{ fontFamily: 'BlackHanSans' }}>
            BlackHanSans
          </option>
          <option value="NanumSquareR" style={{ fontFamily: 'NanumSquareR' }}>
            NamumSquareR
          </option>
          <option value="NanumSqaureRoundR" style={{ fontFamily: 'NanumSqaureRoundR' }}>
            NanumSquareRound
          </option>
        </Select>
      </FormControl>
    </div>
  );
};

export default AddTextSetting;

AddTextSetting.propTypes = {
  textAttribute: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    font: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
