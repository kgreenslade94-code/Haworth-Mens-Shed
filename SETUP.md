# Haworth Men's Shed website: setup guide

Everything here is free. You need a GitHub account (for hosting) and about 15 minutes.
You only do this once.

## 1. Put the site online (GitHub Pages)

1. Go to https://github.com and sign up (or log in).
2. Click the **+** at the top right, then **New repository**.
3. Name it `haworth-mens-shed`, choose **Public**, and click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Unzip the folder you were sent. Drag **everything inside it** into the page
   (index.html, style.css, script.js, the `content` and `images` folders, `.pages.yml`).
   If your computer hides files starting with a dot, that is fine: `.pages.yml` is needed
   for the editor in step 2, so check it uploaded, or add it later.
6. Click **Commit changes**.
7. Go to **Settings**, then **Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**, and click **Save**.
8. After a minute or two the page shows your address, usually
   `https://YOUR-USERNAME.github.io/haworth-mens-shed/`.

## 2. Edit text and photos without touching code (Pages CMS)

1. Go to https://app.pagescms.org and choose **Sign in with GitHub**.
2. Allow it access to the `haworth-mens-shed` repository.
3. Open the repository. You will see **Website text** and **Photo gallery**.
4. Change anything, then press **Save**. The live site updates within a minute or two.
5. To add a photo: open **Photo gallery**, add an item, and upload the picture. Phone photos
   are fine, but photos under about 1 MB load faster for visitors.

The email, phone number and Facebook group link are already filled in. You can change them in
the editor, and clearing any contact box hides it from the site.
The phone number is visible to anyone who visits the site, so check that is what you want.
The group photo shows members' faces, so make sure everyone in it is happy for it to be public.

## 3. Optional: your own web address

A `.co.uk` name costs roughly £5 to £10 a year from any registrar. In your repository go to
**Settings**, **Pages**, **Custom domain**, and follow GitHub's prompts. The site works fine
without this on the free github.io address.

## Backup way to edit

You can also click any file in the repository on github.com and use the pencil icon.
`content/site.json` holds all the text. Keep the quote marks and commas as they are.

## Check before sharing

The wording is based on your mock-up. Please check these against what is true today:

- Meeting day, time and venue (Church Hall, Tuesday afternoons)
- Membership numbers ("around ten")
- The "Looking ahead" section about a room of your own
- Whether you want to mention charity registration (left out because the date in the mock-up has passed)
