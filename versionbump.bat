cd VersionInfo
npm install -g gulp && npm install && gulp setBuildVersion --buildno %BUILD_NUMBER% && gulp setAssemblyVersion && gulp setNpmPackageVersion && gulp setWixVersion