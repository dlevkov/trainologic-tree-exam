import { browser, element, by } from 'protractor';

export class TrainologicTestPrjPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dl-root h1')).getText();
  }
}
