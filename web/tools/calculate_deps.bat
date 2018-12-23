cd ..

python ^
    node_modules/google-closure-library/closure/bin/build/depswriter.py ^
    --root_with_prefix="app ../../../../app/" ^
    --output_file="app/deps.js"

cd tools