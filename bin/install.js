#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const skillName = "odyssey-plan";
const packageRoot = path.resolve(__dirname, "..");

function printHelp() {
  console.log(`Install ${skillName} into your Codex skills folder.

Usage:
  npx github:PENGLEI8686/odyssey-plan
  npx github:PENGLEI8686/odyssey-plan -- --force
  npx github:PENGLEI8686/odyssey-plan -- --dest ~/.codex/skills

Options:
  --dest <dir>   Skills directory. Default: ~/.agents/skills
  --force        Replace an existing ${skillName} skill directory
  --help         Show this help message
`);
}

function expandHome(input) {
  if (!input) return input;
  if (input === "~") return os.homedir();
  if (input.startsWith("~/")) return path.join(os.homedir(), input.slice(2));
  return input;
}

function parseArgs(argv) {
  const options = {
    destRoot: path.join(os.homedir(), ".agents", "skills"),
    force: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--dest") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--dest requires a directory path.");
      }
      options.destRoot = expandHome(value);
      index += 1;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return options;
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.copyFileSync(src, dest);
}

function install(options) {
  const destRoot = path.resolve(options.destRoot);
  const destDir = path.join(destRoot, skillName);
  const required = [
    "SKILL.md",
    "references/methodology.md",
    "references/examples.md",
    "assets/report-template.md"
  ];

  for (const relativePath of required) {
    const sourcePath = path.join(packageRoot, relativePath);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Package is missing ${relativePath}. Please reinstall from GitHub.`);
    }
  }

  if (fs.existsSync(destDir)) {
    if (!options.force) {
      throw new Error(
        `Destination already exists: ${destDir}\n` +
          `Run "npx github:PENGLEI8686/odyssey-plan -- --force" to replace it.`
      );
    }
    fs.rmSync(destDir, { recursive: true, force: true });
  }

  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of ["SKILL.md", "references", "assets", "agents", "README.md", "LICENSE"]) {
    const sourcePath = path.join(packageRoot, entry);
    if (fs.existsSync(sourcePath)) {
      copyRecursive(sourcePath, path.join(destDir, entry));
    }
  }

  console.log(`Installed ${skillName} to ${destDir}`);
  console.log("Restart Codex or use Force Reload Skills to pick it up.");
}

try {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
  } else {
    install(options);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
