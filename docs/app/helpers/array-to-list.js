import { helper } from '@ember/component/helper';

export default helper(function arrayToList([arrayOfMessages] /*, named*/) {
  if (Array.isArray(arrayOfMessages)) {
    return arrayOfMessages.join(', ');
  }

  return arrayOfMessages;
});
