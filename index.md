### npmjs.us

This is an unofficial but pretty good US (east) mirror for npm; this service is sponsored and maintained by [norfolkjs.org](norfolkjs.org).

### Using this service
- Option 1: Add this registry to your `.npmrc`. e.g.

        registry = https://registry.npmjs.us

- Option 2: Add it as a command-line argument

        npm install forever --registry https://registry.npmjs.us

### Modus Operandi
We continuously replicate the official npmjs database. It is large (~200GB) so
updates to public npm modules may take some minutes to show up in our registry.
The database is read-only, so don't try to publish to it. To see what the
database is up to, check out <https://registry.npmjs.us/_stats>. 

1CTs5sGpaXNhvjL5B4my1EmHLoK5TPqrPT
