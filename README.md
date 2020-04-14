# delicut-web


# Developing locally

`yarn start`


## With tunnel to dev machine from anoher PC or mobile

See
https://dashboard.ngrok.com/get-started
https://github.com/microsoft/fluentui/wiki/Ngrok

from vs code terminal:
```
c:/tools/ngrok.exe http -region eu --host-header=rewrite 8080
```
Grab enerated url from the terminal output and send it to whatever.

*assuming that exe is located c:/tools and web server is running on 8080

*and assuming that ngrok config file already craeted and auth is done.
