# Starter for Grunt

This is my very basic setup with grunt. It compiles sass, watches js and css files, and uses browsersync.

- [Grunt](http://gruntjs.com/)
- [BrowserSync](http://www.browsersync.io/)
- [Sass](https://www.npmjs.com/package/grunt-contrib-sass)
- [Watch](https://www.npmjs.com/package/grunt-contrib-watch)

# Get Started

1. <code>git clone https://github.com/MongooseDoom/grunt-starter.git</code> or [download zip](https://github.com/MongooseDoom/grunt-starter/archive/master.zip).
2. Move <code>Gruntfile.js</code> and <code>package.json</code> to the root directory of your build.
3. In terminal, <code>cd</code> to the root directory of your build.
4. In terminal, <code>npm install</code> or <code>sudo npm install</code>
5. Update css, scss, and js paths in Gruntfile.js to match your build. Lines [13](https://github.com/MongooseDoom/grunt-starter/blob/master/Gruntfile.js#L13), [29](https://github.com/MongooseDoom/grunt-starter/blob/master/Gruntfile.js#L29), [38](https://github.com/MongooseDoom/grunt-starter/blob/master/Gruntfile.js#L38), and [47-48](https://github.com/MongooseDoom/grunt-starter/blob/master/Gruntfile.js#L47-L48).
6. Replace <code>LOCALHOST_URL</code> in Gruntfile.js with your localhost url.
7. In terminal, <code>grunt</code>