@echo off
setlocal
cd /d "%~dp0"

set LOG=run-local.log
echo Starting SulitFinds locally... > "%LOG%"
echo Log: %LOG%

where node >> "%LOG%" 2>&1
if errorlevel 1 (
	echo Node.js is not installed or not on PATH.
	echo See %LOG% for details.
	pause
	exit /b 1
)

where npm >> "%LOG%" 2>&1
if errorlevel 1 (
	echo npm is not available on PATH.
	echo See %LOG% for details.
	pause
	exit /b 1
)

if not exist node_modules (
	echo Installing dependencies...
	npm install >> "%LOG%" 2>&1
	if errorlevel 1 (
		echo Failed to install dependencies.
		echo See %LOG% for details.
		pause
		exit /b 1
	)
)

echo Launching dev server...
echo Launching dev server... >> "%LOG%"

start "SulitFinds Dev Server" cmd /c "npm run dev >> \"%LOG%\" 2>&1"

REM Wait briefly for the dev server to print the Local URL
set URL=
for /l %%i in (1,1,10) do (
	for /f "tokens=2" %%u in ('findstr /c:"Local:" "%LOG%"') do set URL=%%u
	if defined URL goto open
	timeout /t 1 >nul
)

:open
if defined URL (
	echo Opening %URL%
	start "" %URL%
) else (
	echo Could not detect the dev server URL. Defaulting to http://localhost:5173
	start "" http://localhost:5173
)

echo If the page does not load, open %LOG% to see the actual Local URL.
pause
