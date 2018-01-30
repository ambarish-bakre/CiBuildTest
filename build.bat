
set VSCMD_START_DIR=%cd%
call "C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\Tools\VsDevCmd.bat"

msbuild C#\WindowsFormsApp\WindowsFormsApp.sln
msbuild C#\ConsoleApp\ConsoleApp.sln
msbuild C++\ConsoleApplication\ConsoleApplication.sln
msbuild C++\WindowsProject\WindowsProject.sln
msbuild Node\ExpressApp\ExpressApp.sln
msbuild Node\NodejsConsoleApp\NodejsConsoleApp.sln
msbuild Wix\SetupProject\SetupProject.sln
devenv.com Setup\Setup\Setup.sln /Build

set