#!/bin/bash
# Auto-push script for trump-thesis-lab
# Runs daily to commit and push updates

set -e

REPO_DIR="$HOME/projects-public/trump-thesis-lab"
cd "$REPO_DIR"

# Check if there are changes
if [[ -z $(git status --porcelain) ]]; then
    echo "NO_REPLY"
    exit 0
fi

# Configure git if needed
git config user.name "AlphaC007" 2>/dev/null || true
git config user.email "alphac007@example.com" 2>/dev/null || true

# Stage all changes
git add -A

# Commit with timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "Auto-update: $TIMESTAMP"

# Push to remote
git push origin main

echo "✅ Pushed at $TIMESTAMP"
