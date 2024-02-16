export const maskEmail = (email: string) => {
  const atIndex = email.indexOf('@');
  if (atIndex === -1) return email;

  const username = email.substring(0, atIndex);

  const maskedUsername =
    username.substring(0, 2) + '*'.repeat(username.length - 2);

  const domain = email.substring(atIndex);

  const maskedEmail = maskedUsername + domain;

  return maskedEmail;
};

export const maskPhone = (phone: string) => {
  const show = phone.substring(phone.length - 2);
  const hide = '*'.repeat(phone.length - 2);
  return hide + show;
};
