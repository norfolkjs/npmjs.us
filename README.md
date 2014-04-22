# npmjs.us

[![Build Status](https://travis-ci.org/norfolkjs/npmjs.us.svg)](https://travis-ci.org/norfolkjs/npmjs.us)


This is an unofficial but pretty good US (east) mirror for npm; this service is sponsored and maintained by [norfolkjs.org](http://norfolkjs.org).

### 1. Use the npmjs.us mirror!

  It's really easy. Just install our `npm` module.

  ```bash
    $ npm install npmjs.us
  ```

  This will configure your `~/.npmrc` file to use the **npmjs.us** servers by
  default.

### 2. Modus Operandi
We continuously replicate the official npmjs database. It is large (>100GB) so
updates to public npm modules may take some minutes to show up in our registry.
In the event of failure to resolve a module, the server will failover to the
official npm service. This service is SSL-secured and monitored.

### 3. Issues?
If you have questions, comments, or notice issues with this service, please file
an issue here: <https://github.com/norfolkjs/npmjs.us/issues>.

### 4. Because, gigabytes
[![Donate](http://gravaco.in/btc/336a6efc3cfba869194c29a9e37883e6.png)](http://gravaco.in/336a6efc3cfba869194c29a9e37883e6)
