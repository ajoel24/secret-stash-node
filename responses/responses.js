const copyrightYear = new Date().getUTCFullYear();

const indexRes = {
  pageTitle: 'Secret Stash',
  headerTitle: 'Welcome',
  copyrightYear,
};

const loginRes = {
  pageTitle: 'Login | Secret Stash',
  headerTitle: 'Login',
  copyrightYear,
};

const homeRes = {
  pageTitle: 'Home | Secret Stash',
  headerTitle: 'Home',
  copyrightYear,
};

const loginErrRes = {
  pageTitle: 'Error',
  headerTitle: 'Error. User not found.',
  errorText: 'Invalid email or password. Try again.',
  copyrightYear,
};

const loginErrRes2 = {
  pageTitle: 'Error',
  headerTitle: 'Error. User not found.',
  errorText: 'User does not exist.',
  copyrightYear,
};

const internalErr = {
  pageTitle: 'Error',
  headerTitle: 'Oops. An error occurred',
  errorText: 'An internal error',
  copyrightYear,
};

const registerRes = {
  pageTitle: 'Register | Secret Stash',
  headerTitle: 'Register',
  copyrightYear,
};

const regSuccessRes = {
  pageTitle: 'Login',
  headerTitle: 'Register successful. Login now',
  copyrightYear,
};

module.exports = {
  indexRes,
  loginRes,
  homeRes,
  loginErrRes,
  loginErrRes2,
  internalErr,
  registerRes,
  regSuccessRes,
};
