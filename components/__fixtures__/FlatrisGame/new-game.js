// @flow

import { getSampleUser } from '../../../utils/test-helpers';
import { getBlankGame } from '../../../reducers/game';
import FlatrisGame from '../../FlatrisGame';

const user = getSampleUser();
const game = getBlankGame({ id: 'dce6b11e', user });

export default {
  component: FlatrisGame,

  container: {},

  reduxState: {
    curUser: user,
    curGame: game
  }
};
