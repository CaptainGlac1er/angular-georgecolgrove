import {ProjectModule} from './project.module';

describe('ProjectModule', () => {
  let projectModule: ProjectModule;

  beforeEach(() => {
    projectModule = new ProjectModule();
  });

  it('should create an instance', async (done) => {
    expect(projectModule).toBeTruthy();
    done();
  });
});