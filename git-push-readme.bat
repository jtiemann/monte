@echo off
echo Pushing README.md to git repository...
cd C:\Users\jonti\monte
git add README.md
git commit -m "Add README.md"

REM Check if remote exists and push
git remote -v > nul 2>&1
if %ERRORLEVEL% EQU 0 (
  echo Remote repository found, pushing changes...
  git push
) else (
  echo No remote repository found.
  echo To add a remote repository, use:
  echo git remote add origin [your-repository-url]
  echo git push -u origin main
)

pause
