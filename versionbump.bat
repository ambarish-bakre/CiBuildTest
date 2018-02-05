cd VersionInfo
set gulp=node_modules\.bin\gulp
npm install && %gulp% setBuildVersion --buildno %BUILD_NUMBER% && %gulp% setAssemblyVersion && %gulp% setNpmPackageVersion && %gulp% setWixVersion