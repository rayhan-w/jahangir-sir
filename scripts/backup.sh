#!/bin/sh
# Daily Automated PostgreSQL Database Backup Script for Education for All
# Project No: ZRF-26-25400D (Dept. of CSE, BAUST)

BACKUP_DIR="/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/efa_db_${TIMESTAMP}.sql.gz"
RETENTION_DAYS=14

mkdir -p ${BACKUP_DIR}

echo "[$(date)] Starting PostgreSQL backup for education_for_all..."

PGPASSWORD="${POSTGRES_PASSWORD}" pg_dump -h "${POSTGRES_HOST:-localhost}" -U "${POSTGRES_USER:-postgres}" -d "${POSTGRES_DB:-education_for_all}" -F p | gzip > "${BACKUP_FILE}"

if [ $? -eq 0 ]; then
  echo "[$(date)] Backup completed successfully: ${BACKUP_FILE}"
else
  echo "[$(date)] Backup failed!" >&2
  exit 1
fi

# Clean up backups older than 14 days
echo "[$(date)] Cleaning up backups older than ${RETENTION_DAYS} days..."
find ${BACKUP_DIR} -name "efa_db_*.sql.gz" -type f -mtime +${RETENTION_DAYS} -delete

echo "[$(date)] Backup rotation completed."
