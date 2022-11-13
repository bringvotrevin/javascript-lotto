const MissionUtils = require('@woowacourse/mission-utils');

const MIN_LOTTO_NUM = 1;
const MAX_LOTTO_NUM = 45;
const REGEX_NUM = /^[0-9]+$/;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkSixNum(numbers);
    this.checkIsNum(numbers);
    this.checkNumRange(numbers);
    this.checkDuplicatedNum(numbers);
  }

  checkSixNum(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  checkIsNum(numbers) {
    numbers.forEach((num) => {
      if (REGEX_NUM.test(num) === false)
        throw new Error('[ERROR] 로또 번호는 숫자만 입력해야 합니다.');
    });
  }

  checkNumRange(numbers) {
    numbers.forEach((num) => {
      if (num < MIN_LOTTO_NUM || num > MAX_LOTTO_NUM)
        throw new Error('[ERROR] 로또 번호는 1~45 범위의 숫자여야 합니다.');
    });
  }

  checkDuplicatedNum(numbers) {
    numbers.forEach((num, index) => {
      if (numbers.indexOf(num) !== index)
        throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    });
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
