import { MyRecipieAppPage } from './app.po';

describe('my-recipie-app App', () => {
  let page: MyRecipieAppPage;

  beforeEach(() => {
    page = new MyRecipieAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
