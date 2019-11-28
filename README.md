# NLGXP

GCWeb v5.1
WET-BOEW v4.0.31

# Requirements

- Craft CMS server requirements
- Composer
- Npm

# Install

Before you install this boilerplate, check if you meet all Craft CMS server requirements.

1. Create a new database for Craft CMS
2. Clone the repository
3. Run `composer install`, `npm install` and `npm run dev` from the project root
4. Rename `.env.example` to `.env` and modify the environment variables to use your own database credentials
5. Run `./craft setup` from the project root, follow the instructions
6. Log to the `/admin` area, click on `Entries` in the sidebar and select `Canada School of Public Service` in the dropdown menu
7. Click `New entry`, give it a title and set the slug to `__home__`, then save the entry

# Q & A

Q: The NPM packages won't install properly, how can I fix this?
A: Remove the `node_modules` folder and try the `npm install` command again. If that still doesn't work, you will need to run `npm install --save-dev PackageName` one by one. You can find an array of all npm packages used in the `package.json` file under `devDependencies`.

Q: What if I don't want the home page to be an entry within the `Pages` structure?
A: One solution would be to create a new `single` section and a new template.
