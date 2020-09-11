const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'required' ;
  } else if (values.title.length > 30 || values.title.length < 5) {
    errors.title = 'Độ Dài Kí tự 5->15';
  }
  if (!values.description) {
    errors.description = 'required' ;
  } else if (values.description.length > 30 || values.description.length < 5) {
    errors.description = 'Độ Dài Kí tự 5->15';
  }

  return errors;
};

export default validate;
