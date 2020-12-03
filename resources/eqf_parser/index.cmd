@echo off
set "EXIT_CODE=0"

chcp 65001 2>nul >nul

if ["%~1"] EQU [""] ( goto NOARG )
if not exist %~s1   ( goto NOARG )
if exist %~s1\NUL   ( goto NOARG )

call "%~sdp0resources\node.exe" "%~sdp0index.js" %*
set "EXIT_CODE=%ErrorLevel%"

goto EXIT

:NOARG
  echo Error. Please specify a file as an argument 1>&2
  set "EXIT_CODE=333"
  goto EXIT

:EXIT
  pause
  exit /b %EXIT_CODE%
