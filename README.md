# Typescript Serverless Framework Template

[Serverless Framework Documentation](https://www.serverless.com/)

### What's included
  - Typescript
  - Jest
  - Eslint
  - Husky
  - Simple hello service and handler

### Getting started
```
% serverless create --name YOUR_PROJECT_NAME --template-url https://github.com/vmotta8/sls-typescript-template
% cd YOUR_PROJECT_NAME
% yarn
% yarn test
```

### How to run locally
```
% yarn build:start
```

### How to deploy
- Manually deploy
```
% aws configure
% AWS Access Key ID [None]: ******
% AWS Secret Access Key [None]: ******
% Default region name [None]: us-east-1
% Default output format [None]: yaml
% yarn deploy
```

- Github workflow deploy
  - Add NODE_ENV environment secret in staging and main branches
  - Add AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY to repository secrets
  - Merge code to staging and main


