# cfn-modules: AWS KMS key (strict)

AWS KMS key with strict access restrictions.

> The KMS key is not deleted if you delete the CloudFormation stack to prevent unwanted data loss!

If you look for a KMS key with less strict access check out the [kms-key](https://github.com/cfn-modules/kms-key) module.

## Install

> Install [Node.js and npm](https://nodejs.org/) first!

```
npm i @cfn-modules/kms-key-strict
```

## Usage

```
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'cfn-modules example'
Resources:
  Key:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      Parameters:
        AlertingModule: !GetAtt 'Alerting.Outputs.StackName' # optional
        AdminAccess: !Sub 'arn:aws:iam::${AWS::AccountId}:role/ROLE_NAME' # required
        UseAccess: !Sub 'arn:aws:iam::${AWS::AccountId}:role/ROLE_NAME' # optional
        ServiceAccess: 'NO_SERVICES' # optional
        AliasName: '' # optional
      TemplateURL: './node_modules/@cfn-modules/kms-key-strict/module.yml'
```

## Examples

none

## Related modules

* [kms-key](https://github.com/cfn-modules/kms-key)
* [secret](https://github.com/cfn-modules/secret)

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
      <th>Required?</th>
      <th>Allowed values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AlertingModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alerting">alerting module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AdminAccess</td>
      <td>Comma-delimited list of IAM principals (e.g., IAM Role or User ARN) allowed to administer this CMK</td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>UseAccess</td>
      <td>Comma-delimited list of IAM principals (e.g., IAM Role or User ARN) allowed to use this CMK</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ServiceAccess</td>
      <td>Which AWS service is allowed to use this CMK from the same AWS account and region?</td>
      <td>NO_SERVICES</td>
      <td>no</td>
      <td>[NO_SERVICES, ALL_SERVICES, connect, dms, ssm, ec2, elasticfilesystem, es, kinesis, kinesisvideo, lambda, lex, redshift, rds, secretsmanager, ses, s3, importexport, sqs, workmail, workspaces]</td>
    </tr>
    <tr>
      <td>AliasName</td>
      <td>Alias name (if not set, the stack name is used)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Outputs

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Interface</th>
      <th>Description</th>
      <th>Exported?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ModuleId</td>
      <td>global</td>
      <td>Id of the module</td>
      <td>no</td>
    </tr>
    <tr>
      <td>ModuleVersion</td>
      <td>global</td>
      <td>Version of the module</td>
      <td>no</td>
    </tr>
    <tr>
      <td>StackName</td>
      <td>global</td>
      <td>Name of the stack (used to pass module references)</td>
      <td>no</td>
    </tr>
    <tr>
      <td>Arn</td>
      <td>ExposeArn</td>
      <td>KMS key ARN</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>IamActions</td>
      <td>LambdaDependency</td>
      <td>Used to auto-generate IAM policies</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>IamResources</td>
      <td>LambdaDependency</td>
      <td>sed to auto-generate IAM policies</td>
      <td>yes</td>
    </tr>
  </tbody>
</table>
