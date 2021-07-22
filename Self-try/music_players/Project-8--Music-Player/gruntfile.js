module.exports = function(grunt){
    grunt.initConfig({
        ts:{
            default:{
                tsconfig: 'tsconfig.json'
            }
        },
        tslint: {
            options: {
                // can be a configuration object or a filepath to tslint.json
                configuration: "tslint.json",
                // If set to true, tslint errors will be reported, but not fail the task
                // If set to false, tslint errors will be reported, and the task will fail
                force: true,
                fix: true
            },
            files: {
                src: [
                    "js/main.ts"
                ]
            }
        },
        watch: {
            scripts: {
                files: ['js/main.ts'],
                tasks: ['tslint', 'ts']
            }
        },
        serve: {
            options: {
                port: 9000
            }
        }
    });
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask("default",["watch"]);
    grunt.registerTask("script",["tslint","ts"]);
}