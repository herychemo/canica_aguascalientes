import { CanicaPage } from './app.po';

describe('canica App', () => {
  let page: CanicaPage;

  beforeEach(() => {
    page = new CanicaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
