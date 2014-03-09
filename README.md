### npmjs.us

This is an unofficial but pretty good US (east) mirror for npm; this service is sponsored and maintained by [norfolkjs.org](http://norfolkjs.org).

### Using this service
- Option 1: Add this registry to your `.npmrc`. e.g.

        registry = https://registry.npmjs.us/public

- Option 2: Set the registry config via `npm`

        npm config set registry=https://registry.npmjs.us/public

- Option 2: Add it as a command-line argument

        npm install forever --registry https://registry.npmjs.us/public

### Modus Operandi
We continuously replicate the official npmjs database. It is large (>200GB) so
updates to public npm modules may take some minutes to show up in our registry.
The public database is read-only, so do not try to publish to it. In the event
of failure to resolve a module, the server will failover to the official npm
service. This service is SSL-secured and monitored by pingdom.

### Issues?
If you have questions, comments, or notice issues with this service, please file
an issue here: <https://github.com/norfolkjs/npmjs.us/issues>.


1CTs5sGpaXNhvjL5B4my1EmHLoK5TPqrPT
