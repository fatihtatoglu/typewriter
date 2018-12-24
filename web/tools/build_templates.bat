cd ..

java -jar node_modules/closure-templates/SoyToJsSrcCompiler.jar ^
    --shouldProvideRequireSoyNamespaces ^
    --outputPathFormat app/views/{INPUT_FILE_NAME_NO_EXT}.js ^
    --srcs app/templates/*.soy

cd tools