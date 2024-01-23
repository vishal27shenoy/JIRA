export const handelEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const handlePassword = password => {
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    let errorMessage = 'Password is invalid. ';
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      return 'It must contain at least one symbol. ';
    } else if (!/(?=.*[a-z])/.test(password)) {
      return 'It must contain at least one lowercase letter. ';
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return 'It must contain at least one uppercase letter. ';
    } else if (password.length < 8) {
      return 'It must be at least 8 characters long. ';
    }
    return errorMessage.trim();
  }
  return 'Password is valid.';
};
