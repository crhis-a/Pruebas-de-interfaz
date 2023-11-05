const { Builder, By, Key, until } = require('selenium-webdriver');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
  let driver = null;
  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

    //  Textarea, agrega el texto 'anita lava la tina'.
    const textArea = await driver.findElement(By.name('my-textarea'));
    await textArea.sendKeys('anita lava la tina');

    await delay(2000);

    // campo Dropdown (select), seleccione la opción 'Three'.
    const dropdown = await driver.findElement(By.name('my-select'));
    await dropdown.findElement(By.css('option[value="3"]')).click();

    await delay(2002);

    // campo Color picker, seleccione el color con la configuración R: 32 G: 167 B: 34.
    const colorPicker = await driver.findElement(By.name('my-color'));
    await colorPicker.sendKeys('#20a722');

    await delay(2000);

    // campo Datepicker, seleccionado la fecha '16 de agosto de 1970'.
    const datepicker = await driver.findElement(By.name('my-date'));
    await datepicker.sendKeys('08/16/1970');

    await delay(2000);

    // Chequeo el campo Default checkbox.
    const checkbox = await driver.findElement(By.name('my-checkbox'));
    await checkbox.click();

    await delay(2000);

    // botón submit.
    const submit = await driver.findElement(By.css('button[type="submit"]'));
    await submit.click();

    await delay(2000);

    //  el título 'Form submitted' y muéstralo en la consola.
    const title = await driver.findElement(By.css('h1'));
    const titleText = await title.getText();
    console.log('Título:', titleText);

    //  mensaje 'Received' y muéstralo en la consola.
    const received = await driver.findElement(By.id('received'));
    const receivedText = await received.getText();
    console.log('Mensaje Received:', receivedText);
  } catch (error) {
    console.error('Ocurrió un error:', error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
};

start();
