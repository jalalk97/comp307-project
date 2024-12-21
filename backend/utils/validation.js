/* 
Contributors:
    - Jalal Kalyati
*/

function validateMcGillEmail(email) {
  return email.match(/\w+@(?:mail\.)?mcgill.ca/);
}

module.exports = {
  validateMcGillEmail
};
