import { ApiManagementModule } from './api-management.module';

describe('ApiManagementModule', () => {
  let apiManagementModule: ApiManagementModule;

  beforeEach(() => {
    apiManagementModule = new ApiManagementModule();
  });

  it('should create an instance', () => {
    expect(apiManagementModule).toBeTruthy();
  });
});
