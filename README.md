# delicut-web


# Developing locally

`yarn start`


## With tunnel to dev machine from anoher PC or mobile

*see better optiion below*

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

**CAUTION* Reaload on changes will not work because React requests localhost anyway and there is no local server on remote machine.

**alternative** https://github.com/localtunnel/localtunnel



#Even better alternative within one subnetwork

pass current network IP adress to `webpack.devServer.host` to make it work. See config.

