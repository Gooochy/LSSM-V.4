import copydir from 'copy-dir';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

import config from '../../src/config';
import { version } from '../../package.json';

config.discord.invite = `https://discord.gg/${config.discord.invite}`;
config.discord.channels = Object.fromEntries(
    Object.entries(config.discord.channels).map(([channel, id]) => [
        channel,
        `https://discordapp.com/channels/${config.discord.id}/${id}`,
    ])
);

const langModules = fs
    .readdirSync('./docs/')
    .filter((x: string) => Object.keys(config.games).indexOf(x) >= 0);

const emptyFolder = (path: string, deleteFolder = true): void => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file: string) => {
            const curPath = `${path}/${file}`;
            if (fs.lstatSync(curPath).isDirectory()) emptyFolder(curPath, true);
            else fs.unlinkSync(curPath);
        });
        if (deleteFolder) fs.rmdirSync(path);
    }
};
emptyFolder('./dist/docs');
langModules.forEach((x: string) => emptyFolder(`./docs/${x}/modules`));
emptyFolder('./docs/.vuepress/public/assets', false);

const moduleDirs = fs.readdirSync('./src/modules');
const modulesSorted = {} as {
    [lang: string]: { title: string; f: string; noMapkit: boolean }[];
};
moduleDirs.forEach((module: string) => {
    if (
        module !== 'template' &&
        fs.existsSync(`./src/modules/${module}/docs`)
    ) {
        const docs = fs
            .readdirSync(`./src/modules/${module}/docs`)
            .filter((f: string) => f.match(/^[a-z]{2}_[A-Z]{2}\.md$/));
        const availableLangs = [] as string[];
        docs.forEach((f: string) => {
            const [lang] = f.split('.');
            availableLangs.push(lang);
            if (!modulesSorted.hasOwnProperty(lang)) modulesSorted[lang] = [];
            if (!fs.existsSync(`./docs/${lang}/modules`))
                fs.mkdirSync(`./docs/${lang}/modules`);
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const title = require(`../../src/modules/${module}/i18n/${lang}.root`)
                .name;
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const register = require(`../../src/modules/${module}/register`);
            modulesSorted[lang].push({
                title,
                f: `${lang}/modules/${f.replace(lang, module)}`,
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                noMapkit: register.noMapkit,
            });
            fs.copyFileSync(
                path.join(__dirname, `../../src/modules/${module}/docs/${f}`),
                `./docs/${lang}/modules/${f.replace(lang, module)}`
            );
            const content = fs
                .readFileSync(
                    `./docs/${lang}/modules/${f.replace(lang, module)}`
                )
                .toString();
            fs.writeFileSync(
                `./docs/${lang}/modules/${f.replace(lang, module)}`,
                `---
title: ${title}
lang: ${lang}
---

# ${title} ${
                    register.github
                        ? `<a href="https://github.com/LSS-Manager/LSSM-V.4/issues/${register.github}" title="Issue #${register.github} on GitHub" target="_blank"><img src="https://github.githubassets.com/pinned-octocat.svg" alt="Issue #${register.github} on GitHub" style="height: 1.5ex" data-prevent-zooming/></a>`
                        : ''
                }

${content}`
            );
        });
        if (!fs.existsSync(`./docs/.vuepress/public/assets`))
            fs.mkdirSync(`./docs/.vuepress/public/assets`);
        if (fs.existsSync(`./src/modules/${module}/docs/assets`)) {
            if (!fs.existsSync(`./docs/.vuepress/public/assets/${module}`))
                fs.mkdirSync(`./docs/.vuepress/public/assets/${module}`);
            copydir.sync(
                `./src/modules/${module}/docs/assets`,
                `./docs/.vuepress/public/assets/${module}`
            );
        }

        Object.keys(config.games).forEach(lang => {
            if (
                availableLangs.includes(lang) ||
                !fs.existsSync(`./docs/${lang}`)
            )
                return;
            if (!fs.existsSync(`./docs/${lang}/modules`))
                fs.mkdirSync(`./docs/${lang}/modules`);
            const rootFile = `./src/modules/${module}/i18n/${lang}.root`;
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            let title = require(`../.${rootFile.replace(lang, 'en_US')}`).name;
            try {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                title = require(`../.${rootFile}`).name;
            } catch {
                // Do nothing
            }
            fs.writeFileSync(
                `./docs/${lang}/modules/${module}.md`,
                `---
title: ${title}
lang: ${lang}
---

# ${title}
:::warning No module page existing yet
Dear User,

thanks for your interest in the Wiki page of **${title}**!
Unfortunately, we weren't able to create the content for your language \`${lang}\` yet. If you want to contribute to our wiki, feel free to create this page [on GitHub](https://github.com/${
                    config.github.repo
                }/new/dev/src/modules/${module}/docs?filename=${lang}.md)!
We suggest to have a look at the files of the other languages for examples in the [docs directory](https://github.com/${
                    config.github.repo
                }/tree/dev/src/modules/${module}/docs)

This module already has a Wiki page in the following languages:
${availableLangs
    .map(
        l =>
            `* [${config.games[l].flag} ${config.games[l].name}](/${l}/modules/${module}.html)`
    )
    .join('\n')}
:::
`
            );
        });
    }
});
const noMapkitModules = {} as {
    [lang: string]: { title: string; f: string }[];
};
Object.keys(modulesSorted).forEach(lang => {
    noMapkitModules[lang] = [
        ...Object.values(modulesSorted[lang])
            .filter(module => module.noMapkit)
            .sort((a, b) =>
                a.title < b.title ? -1 : a.title > b.title ? 1 : 0
            )
            .map(m => ({
                title: m.title,
                f: m.f.replace(/(^[a-z]{2}_[A-Z]{2}\/|\..*?$)/g, ''),
            })),
    ];
    ((modulesSorted as unknown) as { [lang: string]: string[] })[lang] = [
        ...Object.values(modulesSorted[lang])
            .sort((a, b) =>
                a.title < b.title ? -1 : a.title > b.title ? 1 : 0
            )
            .map(file => file.f),
    ];
    if (fs.existsSync(`./docs/${lang}/apps.md`)) {
        ((modulesSorted as unknown) as { [lang: string]: string[] })[
            lang
        ].unshift(`${lang}/apps.md`);
    }
});

const locales = {} as { [langPath: string]: { lang: string; title: string } };
const themeLocales = {} as {
    [langPath: string]: {
        label: string;
        nav: { text: string; link: string }[];
        sidebar: unknown[];
    };
};

const sidebar_lssm = ['', 'metadata'];
const sidebar_others = [
    'suggestions',
    'support',
    'error_report',
    'faq',
    'bugs',
    'appstore',
    'settings',
    'other',
];

module.exports = async () => {
    const { version: stable } = await fetch(
        `${config.server}static/build_stats.json`
    ).then(res =>
        res.status === 200
            ? res.json()
            : new Promise(resolve => resolve({ version: '4.x.x' }))
    );
    Object.entries(config.games).forEach(([lang, { flag }]) => {
        if (!fs.existsSync(`./docs/${lang}`)) return;
        fs.writeFileSync(
            `./docs/${lang}/README.md`,
            fs
                .readFileSync(`./docs/${lang}/README.md`)
                .toString()
                .replace(
                    /(.|\n)*?(?=\n## )/,
                    `---
title: LSS-Manager V.4
lang: ${lang}
sidebarDepth: 2
---

# Wiki ${flag} <Badge :text="'v.' + $themeConfig.variables.versions.short"/>

> stable: <i>{{ $themeConfig.variables.versions.stable }}</i>
> 
> beta: <i>{{ $themeConfig.variables.versions.beta }}</i>

<discord style="float: right;"><img src="https://discord.com/api/guilds/254167535446917120/embed.png?style=banner1" alt="Our Discord-Server: United Dispatch" data-prevent-zooming></discord>

[LSSM-Server-Status](https://status.lss-manager.de)

[Game-Online-Status](https://stats.uptimerobot.com/OEKDJSpmvK)
`
                )
        );
        const game = config.games[lang];
        const langPath = `/${lang}/`;
        locales[langPath] = {
            lang,
            title: `LSS-Manager V.4 Wiki ${game.flag}`,
        };
        themeLocales[langPath] = {
            label: `${game.flag} ${game.name}`,
            nav: [
                {
                    text: 'Discord',
                    link: config.discord.invite,
                },
            ],
            sidebar: [
                {
                    title: 'LSSM',
                    collapsable: false,
                    children: sidebar_lssm
                        .filter(f =>
                            fs.existsSync(
                                `./docs${langPath}${f || 'README'}.md`
                            )
                        )
                        .map(f => `${langPath}${f}`),
                },
                ...sidebar_others
                    .filter(f =>
                        fs.existsSync(`./docs${langPath}${f || 'README'}.md`)
                    )
                    .map(f => `${langPath}${f}`),
                {
                    title: 'Apps 📦',
                    collapsable: true,
                    children: modulesSorted[lang] || [],
                },
            ],
        };
    });
    return {
        title: 'LSS-Manager V.4 Wiki',
        description: 'The Wiki for the LSS-Manager',
        base: '/v4/docs/',
        dest: './dist/docs',
        head: [
            [
                'link',
                {
                    rel: 'icon',
                    href: '/img/lssm.png',
                },
            ],
        ],
        markdown: {
            sluglify: '',
            lineNumbers: true,
        },
        themeConfig: {
            logo: '/img/lssm.png',
            variables: {
                discord: config.discord,
                github: `https://github.com/${config.github.repo}`,
                server: config.server,
                versions: {
                    beta: version,
                    stable,
                    short: stable.match(/4(\.(x|\d+)){2}/)[0],
                },
                browsers: config.browser,
                noMapkitModules,
            },
            locales: themeLocales,
            activeHeaderLinks: true,
            repo: config.github.repo,
            editLinks: false,
        },
        locales,
        plugins: {
            '@vuepress/active-header-links': {},
            '@vuepress/back-to-top': {},
            '@vuepress/last-updated': {
                transformer(timestamp: number, lang: string) {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    const moment = require('moment');
                    moment.locale(lang);
                    return moment(timestamp).format('LLL');
                },
            },
            'vuepress-plugin-redirect': {
                locales: true,
            },
            'vuepress-plugin-smooth-scroll': {},
            'vuepress-plugin-zooming': {
                selector: 'img:not([data-prevent-zooming])',
                options: {
                    bgColor: 'black',
                },
            },
        },
    };
};
