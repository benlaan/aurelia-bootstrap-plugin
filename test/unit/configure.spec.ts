/// <reference path="../../typings/index.d.ts" />

import {configure} from '../../src/index';

class ConfigStub {

  resources: string | string[];

  globalResources(...resources: string[]) {

    this.resources = resources;

    return this;
  }
}

describe('the Aurelia configuration', () => {

  var mockedConfiguration: any;

  beforeEach(() => {
    mockedConfiguration = new ConfigStub();
    configure(mockedConfiguration);
  });

  it('should register a global resource', () => {

    expect(mockedConfiguration.resources.length).toBe(24);
    expect(mockedConfiguration.resources).toContain('./badge/bs-badge');
  });
});
