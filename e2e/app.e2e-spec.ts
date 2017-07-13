import { PngPage } from './app.po';

describe('png App', () => {
  let page: PngPage;

  beforeEach(() => {
    page = new PngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
