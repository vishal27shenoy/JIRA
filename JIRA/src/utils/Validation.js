export const handelEmail = email => {
  console.log(email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const handlePassword = password => {
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    let errorMessage = 'Password is invalid. ';
    if (password.length < 8) {
      return 'Password must be at least 8 characters long. ';
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      return 'Password must contain at least one symbol. ';
    } else if (!/(?=.*[a-z])/.test(password)) {
      return 'Password must contain at least one lowercase letter. ';
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return 'Password must contain at least one uppercase letter. ';
    }
    return errorMessage.trim();
  }
  return false;
};

export const handleUsername = username => {
  username?.length() > 6 ? false : 'Username must be at least 8 characters';
};
