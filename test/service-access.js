const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('no', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/service-access.yml`, stackName, {ServiceAccess: 'NO_SERVICES'}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('all', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/service-access.yml`, stackName, {ServiceAccess: 'ALL_SERVICES'}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('ebs', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/service-access.yml`, stackName, {ServiceAccess: 'ebs'}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
