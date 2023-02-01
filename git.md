"Git is simple!" tutorial

Features:
- Easy to understand, simple to use
- Has practical tasks, interactivity
- Not boring. Funny? Themed? (dinosaurs?)

Testing:
- can add robot as collaborator
- Github App можно устанавливать на репозиторий, с вебхуками вместе
- Создал @git-tutorial-bot на емейл help@javascript.info
  - @git-tutorial кто-то занял, но не использует, можно запросить у github
- push можно настроить, чтобы к нам отправлял
  - git config --global remote.pushDefault

Types of tests:
1) Q/A, choice of variant
2) fill the command: git [   ] ...
3) git push to github & we check
4) isomorphic git + file access api = загрузка git-каталога и тест в браузере

Existing Tutorials
- https://githowto.com/
  - detailed step-by-step instructions
- https://gitready.com/
  - hints, pieces of info
- https://gitimmersion.com/

- https://learngitbranching.js.org/?locale=en

- Play with branches w/ d3.js https://onlywei.github.io/explain-git-with-d3/
  - forked to https://github.com/iliakan/explain-git-with-d3

- https://www.codecademy.com/learn/learn-git
  - go through actions, control the result, do projects

Hello, Git!
================
Git stores the history of a file directory and allows to share it with others.

Do you know how to use the command line?

If not, `click here to read about it`.

Do you have git installed?

If not:

- [Icon] Windows:
    - Download it here: https://git-scm.com/download
- [Icon] Mac:
    - When you run git, it automatically suggests that you install the necessary software. Simply agree.
- [Icon] Linux:
    - Use `apt-get install git` or a similar command of your package manager.

You can check if git is installed by typing in the command line:

> git version

Please note: we use > in examples to show that it's command line, but you shouldn't type it. The command text is just "git version".

Here's an example of a good output:

```
git version 2.39.1
```

@see this? https://www.youtube.com/watch?v=zOZwEe9XW9s

I'm Git. What's your name?
=========================

Tell git who we are, by using `git config` command.

> git config --global user.name "John Doe"

> git config --global user.email johndoe@example.com

(Illustration) The syntax is simple:
- "git" is always the first word, then
- "config" is the command name,
- and then parameters, in our case `--global` means that this configuration will be applied globally, to all projects of the current user. So that you won't have to repeat this command again.

More details? Easy.
===================

Here, in this tutorial we'll cover most needed stuff, but git has a lot of commands, flags, parameters... A LOT even.

To see the full documentation for a command, such as config, you can run:

> git help config

Run it, and you'll be impressed.

Yeah, luckily we don't need so much in mundane life.

Use similar help commands to find all the details, if you ever need any.

Create a project.
================

Let's start with an empty folder named `project`.

The simpler, the better, right?

Create such folder and go there in a terminal.

Run:
> git init

Result:

> Initialized empty Git repository in /Users/iliakan/project/.git

You may see other lines before it, for now just ignore them.

Congratulations! You've just created a *git repository* - a place where all the history of project development will be stored.

It's represented by the `.git` subfolder that just appeared inside `project`.

That's what `git init` does - it creates `.git` subfolder and fills it with some initial internal stuff.

Now we're ready. Let's save some files!

Q: Write a command to init git repository:
git [    ]


Git, save my work!
===================

Adding files to git is extremely simple.

Open the `project` folder in a code editor, then create a file:

(file name is on top of the highlighted listing)
```
// @file: index.html
<!doctype html>
<head>
  <title>Git is simple!</title>
</head>
<body>
  Hello, world!
</body>
```

Here I used HTML language (it's for web pages, such as this one), but you don't have to know it. That's just an example. Git can store any kind of files.

Saving to git is a two-step process.

```
TODO: describe adding to git with illustrations, see evernote

> git add index.html

> git commit -m "Message briefly describing our changes"`, e.g. Initial commit
```


Q: If you change `index.html`, then `git commit` immediately (without `git add`) - what will be saved?

1. Nothing.
2. The changed `index.html`
3. I have no idea.

A: 1. Because `git commit` saves only indexed changes, and without `git add` nothing is indexed.

Q: If you append "Git" to `index.html`, then `git add index.html`, then append "Rules" to `index.html`, and then `git commit` - what will be saved?

1. Nothing.
2. The first version, with only "Git"
3. The latest version, with both "Git" and "Rules".
4. I don't know, tell me.

A: 2, as git commit saves only what's added to index. New changes are in WD, but not in the index, so they won't be committed.

+ More: can't save an empty directory

Let's save some more!
======================
TODO: add git --diff and git --status here?
TODO: maybe add a chapter about modification -> git status -> git diff and maybe git restore?

So far all easy, right?

As you work on the project, you probably modify existing files.

And maybe add some new files, like `script.js` here.

function sayHi() {
  alert(`Hello from Git!`);
}

Again I'm using a programming language called JavaScript, if you're not familiar with it, it's totally fine.
Can be anything.

So far, I made the changes in the working tree, but git isn't aware of them yet.

Actually, let's ask git.

> git status

This command compares working tree with the current state of git, and here we can see:
this file was modified,
and this file untracked, meaning that git doesn't know about it at all.

Right↓ , let's save them to the repository.

> git add index.html
please note, if I git commit now, it will only save changes to index.html
so I want to add the other file as well

> git add script.js

Or, for brevity, there's a flag -A to add all changes
> git add -A

Here's how git status shows it:

> git status

The green color means that the changes are indexed already↓

and then

> git commit -m "Create sayHi"

saves them in the repository.

Here's the new commit number.

Try to do something similar. Did it work?

+ More info: How to commit all changes without git add? // commit -a doesn't save untracked
+ More info: The art of a good(tm) commit

... (more topics from evernote)...
==================================
(todo: git diff somewhere?)

Git branch
==========

Hi, I'm Tom.

I'll work in the same team with you, on the same project.

Do you mind if I edit your files at the same time