import { FormManagementModule } from './form-management.module';

describe('FormManagementModule', () => {
  let formManagementModule: FormManagementModule;

  beforeEach(() => {
    formManagementModule = new FormManagementModule();
  });

  it('should create an instance', () => {
    expect(formManagementModule).toBeTruthy();
  });
});
