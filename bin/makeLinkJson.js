#!/usr/bin/env node
/* This script generates a JSON file containing all the links in the markdown files in the project directory. */

const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const rootDir = process.cwd();

async function parseMarkdownFile(filePath) {
    try {
        const content = await readFile(filePath, 'utf8');
        const parts = content.split('---');
        const frontMatter = parts[1].trim();
        const lines = frontMatter.split('\n');
        const linkData = {
            filepath: path.relative(rootDir, filePath) // Add relative file path
        };

        lines.forEach(line => {
            const firstColonIndex = line.indexOf(':');
            const key = line.slice(0, firstColonIndex).trim();
            const value = line.slice(firstColonIndex + 1).trim();
            if (key && value) {
                linkData[key] = value.replace(/, /g, ',');
            }
        });
        if (linkData.category) {
            linkData.category = linkData.category.split(',').map(category => category.trim());
        }
        delete linkData.filename;

        // Exclude frontmatter from the text and trim whitespace
        linkData.text = parts.slice(2).join('---').trim();
        return linkData;
    } catch (error) {
        console.error('Error parsing file:', filePath, error);
        throw error;
    }
}


async function scanDirectory(dir) {
    const subdirs = await readdir(dir, { withFileTypes: true });
    const links = [];

    for (let dirent of subdirs) {
        if (dirent.isDirectory()) {
            links.push(...await scanDirectory(path.join(dir, dirent.name)));
        } else if (dirent.name.endsWith('.md')) {
            const filePath = path.join(dir, dirent.name);
            const linkData = await parseMarkdownFile(filePath);
            links.push(linkData);
        }
    }

    return links;
}

async function collectLinks() {
    try {
        // call scandirectory for all directories below rootDir that start with 20 and collect the links
        const datasubdirs = await readdir(rootDir, { withFileTypes: true });
        const links = [];
        for (let dirent of datasubdirs) {
            if (dirent.isDirectory() && dirent.name.startsWith('20')) {
                links.push(...await scanDirectory(path.join(rootDir, dirent.name)));
            }
        }

        links.sort((a, b) => a.filepath.localeCompare(b.filepath));
        await writeFile(path.join(rootDir, 'db/links.json'), JSON.stringify(links, null, 2), 'utf8');
        console.log('Successfully generated links.json');
    } catch (error) {
        console.error('Error generating links.json:', error);
    }
}

collectLinks();
