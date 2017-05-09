import { TrainologicTestPrjPage } from './app.po';

describe('trainologic-test-prj App', () => {
  let page: TrainologicTestPrjPage;

  beforeEach(() => {
    page = new TrainologicTestPrjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dl works!');
  });
});
