export const formatDate = _prDate => {
  let date = _prDate.replace(/\D/g,'').slice(0, 10);

  if (date.length >= 5) {
    return `${date.slice(0,2)}/${date.slice(2,4)}/${date.slice(4)}`;
  } else if (date.length >= 3) {
    return `${date.slice(0,2)}/${date.slice(2)}`;
  }

  return date;
}
