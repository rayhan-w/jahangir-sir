#!/bin/sh
# Database Restore Script for Education for All
# Usage: ./scripts/restore.sh /path/to/backup_file.sql.gz

if [ -z "$1" ]; then
  echo "Error: Please provide backup file path."
  echo "Usage: $0 <backup-file.sql.gz>"
  exit 1
fi

BACKUP_FILE="$1"

if [ ! -f "${BACKUP_FILE}" ]; then
  echo "Error: File not found: ${BACKUP_FILE}"
  exit 1
fi

echo "WARNING: This will drop and restore database 'education_for_all'."
echo "Restoring from: ${BACKUP_FILE}"

PGPASSWORD="${POSTGRES_PASSWORD}" dropdb -h "${POSTGRES_HOST:-localhost}" -U "${POSTGRES_USER:-postgres}" --if-exists education_for_all
PGPASSWORD="${POSTGRES_PASSWORD}" createdb -h "${POSTGRES_HOST:-localhost}" -U "${POSTGRES_USER:-postgres}" education_for_all

gunzip -c "${BACKUP_FILE}" | PGPASSWORD="${POSTGRES_PASSWORD}" psql -h "${POSTGRES_HOST:-localhost}" -U "${POSTGRES_USER:-postgres}" -d education_for_all

if [ $? -eq 0 ]; then
  echo "Database restored successfully!"
else
  echo "Database restore encountered errors!" >&2
  exit 1
fi
