import { AppStateManagementModule } from './app-state-management.module';

describe('AppStateManagementModule', () => {
  let appStateManagementModule: AppStateManagementModule;

  beforeEach(() => {
    appStateManagementModule = new AppStateManagementModule();
  });

  it('should create an instance', () => {
    expect(appStateManagementModule).toBeTruthy();
  });
});
