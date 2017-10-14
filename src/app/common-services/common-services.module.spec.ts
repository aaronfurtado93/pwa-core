import { CommonServicesModule } from './common-services.module';

describe('CommonServicesModule', () => {
  let commonServicesModule: CommonServicesModule;

  beforeEach(() => {
    commonServicesModule = new CommonServicesModule();
  });

  it('should create an instance', () => {
    expect(commonServicesModule).toBeTruthy();
  });
});
