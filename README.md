
<p align="center">

<img src='https://i.imgur.com/qkJvAQO.png'>

## Tamper Data for FF Quantum

</p>

Tamper Data no longer works in FF 57+. 

This is a re-write that works in FF 57+, however, the webRequest API doesn't currently support changing request body paramters. There are tickets open for both [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1491087) and [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=91191) so hopefully it will be resolved sooner than later, but for now this is still very useful for other things:

 - Monitoring live requests
 - Editing headers on live requests
 - Canceling live requests
 - Redirecting live requests

### Installing from source

 1) Download and unpack the source code.
 2) Navigate to [about:debugging](about:debugging).
 3) Click the button to add a temporary extention.
 4) Select the manifest.json file and hit OK.

It will automatically uninstall when you close the browser.

### Usage

Once installed you will see a blue cloud button in the toolbar, to the left of the URL bar. Click that to start tampering.
