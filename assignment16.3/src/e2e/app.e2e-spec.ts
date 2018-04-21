import { FirstAngularProjectPage } from './app.po';

describe('first-angular-project App', () => {
  let page: FirstAngularProjectPage;

  beforeEach(() => {
    page = new FirstAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
