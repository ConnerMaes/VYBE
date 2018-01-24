import { VasWebAppPage } from './app.po';

describe('vas-web-app App', () => {
  let page: VasWebAppPage;

  beforeEach(() => {
    page = new VasWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
