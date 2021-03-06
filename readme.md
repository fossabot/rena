## Rena
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flogustra%2Frena.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Flogustra%2Frena?ref=badge_shield)

Read [documentation](https://github.com/logustra/7ad)

## Requirement
  - [node.js](http://nodejs.org/)
  - [yarn](https://yarnpkg.com/en/)
  - [watchman](https://facebook.github.io/watchman/docs/install.html#buildinstall)
  - [adoptopenjdk](https://adoptopenjdk.net/)
  - [android studio](https://developer.android.com/studio)
  - [cocoapods](https://cocoapods.org/)
  - [xcode](https://developer.apple.com/xcode/)
    
## Quick Start

```bash
# clone repository
$ git clone https://github.com/logustra/rena.git

# open folder rena
$ cd rena

# instal dependencies
$ yarn install

# copy file .env.example to .env
$ cp .env.example .env
```

### Android

```bash
# build android and open emulator
$ yarn android
```

### IOS

```bash
# open folder ios
$ cd ios

# instal dependencies
$ pod install

# build ios and open emulator
$ yarn ios
```

## How to Rename
```bash
# add dependency react-native-rename
$ yarn global add react-native-rename

# rename rena to myApp
$ react-native-rename myApp
```

## How to Create Folder
A guide how to create a folder using `create-cli`

### Component
```bash
# create atom component and give it name loading
$ node create atom loading
```

### Module
```bash
# create new module and give it name home
$ node create module home
```

## How to Contribute
I'm delighted that you're helping make this open source project better. Here are a few quick guidelines to make this an easier and better process for everyone.

### Reporting a bug
First, **make sure the bug hasn't already been reported** by searching GitHub's issues section.

If no existing issue exists, go ahead and create one. **Please be sure to include all of the following**:

1. A clear, descriptive title (ie. "A bug" is not a good title).
2. Include the error message if have.
3. The browser and OS that you're using.

### Submitting a Pull Request
1. Fork it
2. Create your feature branch `git checkout -b new-feature`
3. Commit your changes `git commit -m "Add some feature"`
4. Push to the branch `git push origin new-feature`
5. Create new Pull Request


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flogustra%2Frena.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Flogustra%2Frena?ref=badge_large)