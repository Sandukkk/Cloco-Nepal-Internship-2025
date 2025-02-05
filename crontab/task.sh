#!/bin/bash

LOG_FILE="/home/sandhya/Cloco-Nepal-Internship-2025/crontab/top_process.log"

# Get timestamp
echo "--- Process Monitoring: $(date) ---" >> "$LOG_FILE"

# List top 5 CPU-consuming processes
echo "Top 5 CPU-consuming processes:" >> "$LOG_FILE"
ps -eo pid,user,%cpu,%mem --sort=-%cpu | head -6 >> "$LOG_FILE"

echo "-----------------------------------" >> "$LOG_FILE"
