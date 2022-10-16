const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  result = [];
  if (Array.isArray(members)) {
    members.forEach(item => {
      if (Array.isArray(item)) {
        item.toString().replace(/[\s.,%]/g, '');
      }
      if (typeof item === 'string') {
        for (let i = 0; i < item.length; i++) {
          if (item[i] != ' ') {
            result.push(item[i].toUpperCase());
            break;
          }
        }
      }
    });
  } else {
    return false;
  }
  if (result.length == 0) {
    return false;
  } else {
    result.sort();
    return result.toString().replace(/[\s.,%]/g, '');
  }
}

module.exports = {
  createDreamTeam
};