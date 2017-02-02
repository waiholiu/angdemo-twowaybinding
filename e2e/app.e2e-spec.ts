import { TempAng6Page } from './app.po';

describe('temp-ang6 App', function() {
  let page: TempAng6Page;

  beforeEach(() => {
    page = new TempAng6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
