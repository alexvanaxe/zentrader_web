import { ZentraderWebPage } from './app.po';

describe('zentrader-web App', () => {
  let page: ZentraderWebPage;

  beforeEach(() => {
    page = new ZentraderWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
