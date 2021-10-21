
# Gulp SASS Start Template 📚💻🎓
This is a project template to make a simple web applications using Gulp and SASS as development tools. To start development, you must run the app and then edit the files inside **html**, **scss** and **js** folders. Be careful with name of the folders and files, or you can have problems on gulpfile.js.

## Running the app 🏃🏼‍♂🔥
```
$ git clone https://github.com/feliperocha93/gulp-sass-starter-template.git

$ npm install

$ npm run dev
```

## Building the app ⚙🏗
```
$ npm run build
```

## Documentation

### Using without SASS
If you dont using SASS, you can remove SASS plugins. You must change 'scss' to 'css' in all project locations, even in gulpfile.js.

### Using external script
To concatenate external scripts, in gulpJs function, you can change the string `"js/**/*.js"` by an array, passing all the scripts path you want to concatenate.

```
.src(["js/**/*.js", "path to file 1", "path to file 2"])
```

## Thanks for using this
If you can, give me your feedback. This is very important for the project and for me. Feel free to open issues and send pull requests.

##
<div style="display: flex">
  <img align="center" alt="Node" title="Node" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg">
  <img align="center" alt="Node" title="Node" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg">
</div>
