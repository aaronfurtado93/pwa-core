import { MaterialSnackBarModule } from './material-snack-bar.module';

describe('MaterialSnackBarModule', () => {
  let materialSnackBarModule: MaterialSnackBarModule;

  beforeEach(() => {
    materialSnackBarModule = new MaterialSnackBarModule();
  });

  it('should create an instance', () => {
    expect(materialSnackBarModule).toBeTruthy();
  });
});
