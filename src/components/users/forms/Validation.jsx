const Validation = (users) => {
  let errors = {};

  if (!users.firstName) {
    errors.firstName = "FirstName is required";
  }
  if (!users.lastName) {
    errors.lastName = "LastName is required";
  }
  if (!users.UserName) {
    errors.userName = "UserName is required";
  }
  if (!users.email) {
    errors.email = "Email is required";
  }
  if (!users.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default Validation;
