# HAMID.js

[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FFcmam5%2Fhamid.js%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/Fcmam5/hamid.js/main) ![Known Vulnerabilities](https://snyk.io/test/github/Fcmam5/hamid.js/badge.svg) [![codecov](https://codecov.io/gh/Fcmam5/hamid.js/branch/main/graph/badge.svg?token=L0LQ6O6Q2M)](https://codecov.io/gh/Fcmam5/hamid.js) [![npm](https://img.shields.io/npm/v/hamid.js)](https://www.npmjs.com/package/hamid.js)

A library that triggers an action if the user is inactive after a period of time.

- [HAMID.js](#hamidjs)
  - [Use cases](#use-cases)
    - [Banking and payment services](#banking-and-payment-services)
    - [Chat and online games](#chat-and-online-games)
  - [Usage](#usage)
  - [Origin of the library's name](#origin-of-the-librarys-name)
  - [License](#license)

## Use cases

### Banking and payment services

PSD 2 regulation for example requires logging out the user if they're inactive for 5 minutes
> *The automatic logout after five minutes of inactivity is a regulatory requirement for banks and payment service providers under the PSD 2 regulation to increase security in online banking. See article 4(3)(d) of the DELEGATED REGULATION (EU) 2018/389 (RTS), https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32018R0389&from=EN ("the maximum time without activity by the payer after being authenticated for accessing its payment account online shall not exceed 5 minutes.").* [[commerzbank](https://cbportal.commerzbank.com/portal/en/fi/de/system-1/zahlungsdiensterichtlinie_2.html)]

### Chat and online games

Online chat rooms, and games may have a requirement of triggering an action if a user is inactive for a set period of time.

## Usage

Install the library using [npm](https://www.npmjs.com/package/hamid.js) with `npm i hamid.js`, or you can use it from a CDN with:

```html
    <script src="https://unpkg.com/browse/hamid.js@0.0.1/dist/lib.js"></script>
```

Then in your script
```js
      const logMeOut = () => alert('You shall be logged out my friend');
      new Hamid(logMeOut);
```
## Origin of the library's name

It's a local meme in Algeria, especially in Oran. It's a scene from a famous comedy show called "Bila Houdoud" where a bus driver asked his tickets man (Hamid) to kick-out someone.

![Hamid Ser7ah from Bila Houdoud](./docs/hamid-ser7ah.jpg)

## License

[MIT](./LICENSE)