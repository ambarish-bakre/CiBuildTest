cd VersionInfo
npm install && gulp setBuildVersion --buildno %BUILD_NUMBER% && gulp setAssemblyVersion && gulp setNpmPackageVersion && gulp setWixVersion