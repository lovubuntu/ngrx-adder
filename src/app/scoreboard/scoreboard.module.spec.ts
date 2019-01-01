import { ScoreboardModule } from './scoreboard.module';

describe('ScoreboardModule', () => {
  let scoreboardModule: ScoreboardModule;

  beforeEach(() => {
    scoreboardModule = new ScoreboardModule();
  });

  it('should create an instance', () => {
    expect(scoreboardModule).toBeTruthy();
  });
});
