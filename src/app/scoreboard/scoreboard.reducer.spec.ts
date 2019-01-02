import {selectHomeScore, selectAwayScore} from './scoreboard.reducer';
import {Scoreboard} from './scoreboard';

describe('Scoreboard reducer', () => {
	const [homeScore, awayScore] = [10, 23];
	let scoreboard = {home: homeScore, away: awayScore} as Scoreboard;

	it('should select home score from state', () => {
		expect(selectHomeScore.projector(scoreboard)).toBe(homeScore);
	});

	it('should select away score from state', () => {
		expect(selectAwayScore.projector(scoreboard)).toBe(awayScore);
	});
});
