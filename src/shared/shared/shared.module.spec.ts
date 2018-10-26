import {SharedModule} from './shared.module';

describe('SharedModule', () => {
  let sharedModule: SharedModule;

  beforeEach(() => {
    sharedModule = new SharedModule();
  });

  it('should create an instance', async (done) => {
    await expect(sharedModule).toBeTruthy();
    done();
  });
});
