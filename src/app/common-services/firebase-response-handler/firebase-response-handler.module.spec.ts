import { FirebaseResponseHandlerModule } from './firebase-response-handler.module';

describe('FirebaseResponseHandlerModule', () => {
  let firebaseResponseHandlerModule: FirebaseResponseHandlerModule;

  beforeEach(() => {
    firebaseResponseHandlerModule = new FirebaseResponseHandlerModule();
  });

  it('should create an instance', () => {
    expect(firebaseResponseHandlerModule).toBeTruthy();
  });
});
